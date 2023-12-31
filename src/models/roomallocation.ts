/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * Metadata on an allocated instance of a room.
 */
export type RoomAllocation = {
    /**
     * System generated unique identifier to a runtime instance of your game server.
     */
    processId: string;
    /**
     * System generated unique identifier to an allocated instance of a room.
     */
    roomAllocationId: string;
    scheduledAt: Date;
    unscheduledAt: Date | null;
};

/** @internal */
export namespace RoomAllocation$ {
    export type Inbound = {
        processId: string;
        roomAllocationId: string;
        scheduledAt: string;
        unscheduledAt: string | null;
    };

    export const inboundSchema: z.ZodType<RoomAllocation, z.ZodTypeDef, Inbound> = z
        .object({
            processId: z.string(),
            roomAllocationId: z.string(),
            scheduledAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            unscheduledAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .nullable(),
        })
        .transform((v) => ({
            processId: v.processId,
            roomAllocationId: v.roomAllocationId,
            scheduledAt: v.scheduledAt,
            unscheduledAt: v.unscheduledAt,
        }));

    export type Outbound = {
        processId: string;
        roomAllocationId: string;
        scheduledAt: string;
        unscheduledAt: string | null;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RoomAllocation> = z
        .object({
            processId: z.string(),
            roomAllocationId: z.string(),
            scheduledAt: z.date().transform((v) => v.toISOString()),
            unscheduledAt: z
                .date()
                .transform((v) => v.toISOString())
                .nullable(),
        })
        .transform((v) => ({
            processId: v.processId,
            roomAllocationId: v.roomAllocationId,
            scheduledAt: v.scheduledAt,
            unscheduledAt: v.unscheduledAt,
        }));
}
