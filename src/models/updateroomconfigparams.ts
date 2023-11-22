/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type UpdateRoomConfigParams = {
    /**
     * Optional configuration parameters for the room. Can be any string including stringified JSON. It is accessible from the room via [`GetRoomInfo()`](https://hathora.dev/api#tag/RoomV2/operation/GetRoomInfo).
     */
    roomConfig: string;
};

/** @internal */
export namespace UpdateRoomConfigParams$ {
    export type Inbound = {
        roomConfig: string;
    };

    export const inboundSchema: z.ZodType<UpdateRoomConfigParams, z.ZodTypeDef, Inbound> = z
        .object({
            roomConfig: z.string(),
        })
        .transform((v) => ({
            roomConfig: v.roomConfig,
        }));

    export type Outbound = {
        roomConfig: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateRoomConfigParams> = z
        .object({
            roomConfig: z.string(),
        })
        .transform((v) => ({
            roomConfig: v.roomConfig,
        }));
}
