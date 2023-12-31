/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Region, Region$ } from "./region";
import { z } from "zod";

export type DiscoveryResponse = {
    host: string;
    port: number;
    region: Region;
};

/** @internal */
export namespace DiscoveryResponse$ {
    export type Inbound = {
        host: string;
        port: number;
        region: Region;
    };

    export const inboundSchema: z.ZodType<DiscoveryResponse, z.ZodTypeDef, Inbound> = z
        .object({
            host: z.string(),
            port: z.number(),
            region: Region$,
        })
        .transform((v) => ({
            host: v.host,
            port: v.port,
            region: v.region,
        }));

    export type Outbound = {
        host: string;
        port: number;
        region: Region;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DiscoveryResponse> = z
        .object({
            host: z.string(),
            port: z.number(),
            region: Region$,
        })
        .transform((v) => ({
            host: v.host,
            port: v.port,
            region: v.region,
        }));
}
