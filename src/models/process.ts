/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ExposedPort, ExposedPort$ } from "./exposedport";
import { Region, Region$ } from "./region";
import { z } from "zod";

/**
 * A process object represents a runtime instance of your game server and its metadata.
 */
export type Process = {
    /**
     * Tracks the number of active connections to a process.
     */
    activeConnections: number;
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    activeConnectionsUpdatedAt: Date;
    additionalExposedPorts: Array<ExposedPort>;
    /**
     * System generated unique identifier for an application.
     */
    appId: string;
    /**
     * System generated id for a deployment. Increments by 1.
     */
    deploymentId: number;
    /**
     * Process in drain will not accept any new rooms.
     */
    draining: boolean;
    /**
     * Measures network traffic leaving the process in bytes.
     */
    egressedBytes: number;
    /**
     * Connection details for an active process.
     */
    exposedPort?: ExposedPort | undefined;
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    host: string;
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    idleSince: Date | null;
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    port: number;
    /**
     * System generated unique identifier to a runtime instance of your game server.
     */
    processId: string;
    region: Region;
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    roomSlotsAvailable: number;
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    roomSlotsAvailableUpdatedAt: Date;
    /**
     * Tracks the number of rooms that have been allocated to the process.
     */
    roomsAllocated: number;
    roomsAllocatedUpdatedAt: Date;
    /**
     * Governs how many [rooms](https://hathora.dev/docs/concepts/hathora-entities#room) can be scheduled in a process.
     */
    roomsPerProcess: number;
    /**
     * When the process bound to the specified port. We use this to determine when we should start billing.
     */
    startedAt: Date | null;
    /**
     * When the process started being provisioned.
     */
    startingAt: Date;
    /**
     * When the process is issued to stop. We use this to determine when we should stop billing.
     */
    stoppingAt: Date | null;
    /**
     * When the process has been terminated.
     */
    terminatedAt: Date | null;
};

/** @internal */
export namespace Process$ {
    export type Inbound = {
        activeConnections: number;
        activeConnectionsUpdatedAt: string;
        additionalExposedPorts: Array<ExposedPort$.Inbound>;
        appId: string;
        deploymentId: number;
        draining: boolean;
        egressedBytes: number;
        exposedPort?: ExposedPort$.Inbound | undefined;
        host: string;
        idleSince: string | null;
        port: number;
        processId: string;
        region: Region;
        roomSlotsAvailable: number;
        roomSlotsAvailableUpdatedAt: string;
        roomsAllocated: number;
        roomsAllocatedUpdatedAt: string;
        roomsPerProcess: number;
        startedAt: string | null;
        startingAt: string;
        stoppingAt: string | null;
        terminatedAt: string | null;
    };

    export const inboundSchema: z.ZodType<Process, z.ZodTypeDef, Inbound> = z
        .object({
            activeConnections: z.number(),
            activeConnectionsUpdatedAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            additionalExposedPorts: z.array(ExposedPort$.inboundSchema),
            appId: z.string(),
            deploymentId: z.number().int(),
            draining: z.boolean(),
            egressedBytes: z.number(),
            exposedPort: ExposedPort$.inboundSchema.optional(),
            host: z.string(),
            idleSince: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .nullable(),
            port: z.number(),
            processId: z.string(),
            region: Region$,
            roomSlotsAvailable: z.number(),
            roomSlotsAvailableUpdatedAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            roomsAllocated: z.number(),
            roomsAllocatedUpdatedAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            roomsPerProcess: z.number().int(),
            startedAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .nullable(),
            startingAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            stoppingAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .nullable(),
            terminatedAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .nullable(),
        })
        .transform((v) => ({
            activeConnections: v.activeConnections,
            activeConnectionsUpdatedAt: v.activeConnectionsUpdatedAt,
            additionalExposedPorts: v.additionalExposedPorts,
            appId: v.appId,
            deploymentId: v.deploymentId,
            draining: v.draining,
            egressedBytes: v.egressedBytes,
            ...(v.exposedPort === undefined ? null : { exposedPort: v.exposedPort }),
            host: v.host,
            idleSince: v.idleSince,
            port: v.port,
            processId: v.processId,
            region: v.region,
            roomSlotsAvailable: v.roomSlotsAvailable,
            roomSlotsAvailableUpdatedAt: v.roomSlotsAvailableUpdatedAt,
            roomsAllocated: v.roomsAllocated,
            roomsAllocatedUpdatedAt: v.roomsAllocatedUpdatedAt,
            roomsPerProcess: v.roomsPerProcess,
            startedAt: v.startedAt,
            startingAt: v.startingAt,
            stoppingAt: v.stoppingAt,
            terminatedAt: v.terminatedAt,
        }));

    export type Outbound = {
        activeConnections: number;
        activeConnectionsUpdatedAt: string;
        additionalExposedPorts: Array<ExposedPort$.Outbound>;
        appId: string;
        deploymentId: number;
        draining: boolean;
        egressedBytes: number;
        exposedPort?: ExposedPort$.Outbound | undefined;
        host: string;
        idleSince: string | null;
        port: number;
        processId: string;
        region: Region;
        roomSlotsAvailable: number;
        roomSlotsAvailableUpdatedAt: string;
        roomsAllocated: number;
        roomsAllocatedUpdatedAt: string;
        roomsPerProcess: number;
        startedAt: string | null;
        startingAt: string;
        stoppingAt: string | null;
        terminatedAt: string | null;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Process> = z
        .object({
            activeConnections: z.number(),
            activeConnectionsUpdatedAt: z.date().transform((v) => v.toISOString()),
            additionalExposedPorts: z.array(ExposedPort$.outboundSchema),
            appId: z.string(),
            deploymentId: z.number().int(),
            draining: z.boolean(),
            egressedBytes: z.number(),
            exposedPort: ExposedPort$.outboundSchema.optional(),
            host: z.string(),
            idleSince: z
                .date()
                .transform((v) => v.toISOString())
                .nullable(),
            port: z.number(),
            processId: z.string(),
            region: Region$,
            roomSlotsAvailable: z.number(),
            roomSlotsAvailableUpdatedAt: z.date().transform((v) => v.toISOString()),
            roomsAllocated: z.number(),
            roomsAllocatedUpdatedAt: z.date().transform((v) => v.toISOString()),
            roomsPerProcess: z.number().int(),
            startedAt: z
                .date()
                .transform((v) => v.toISOString())
                .nullable(),
            startingAt: z.date().transform((v) => v.toISOString()),
            stoppingAt: z
                .date()
                .transform((v) => v.toISOString())
                .nullable(),
            terminatedAt: z
                .date()
                .transform((v) => v.toISOString())
                .nullable(),
        })
        .transform((v) => ({
            activeConnections: v.activeConnections,
            activeConnectionsUpdatedAt: v.activeConnectionsUpdatedAt,
            additionalExposedPorts: v.additionalExposedPorts,
            appId: v.appId,
            deploymentId: v.deploymentId,
            draining: v.draining,
            egressedBytes: v.egressedBytes,
            ...(v.exposedPort === undefined ? null : { exposedPort: v.exposedPort }),
            host: v.host,
            idleSince: v.idleSince,
            port: v.port,
            processId: v.processId,
            region: v.region,
            roomSlotsAvailable: v.roomSlotsAvailable,
            roomSlotsAvailableUpdatedAt: v.roomSlotsAvailableUpdatedAt,
            roomsAllocated: v.roomsAllocated,
            roomsAllocatedUpdatedAt: v.roomsAllocatedUpdatedAt,
            roomsPerProcess: v.roomsPerProcess,
            startedAt: v.startedAt,
            startingAt: v.startingAt,
            stoppingAt: v.stoppingAt,
            terminatedAt: v.terminatedAt,
        }));
}
