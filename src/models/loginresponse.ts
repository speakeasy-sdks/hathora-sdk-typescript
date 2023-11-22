/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type LoginResponse = {
    /**
     * A unique Hathora-signed JWT player token.
     */
    token: string;
};

/** @internal */
export namespace LoginResponse$ {
    export type Inbound = {
        token: string;
    };

    export const inboundSchema: z.ZodType<LoginResponse, z.ZodTypeDef, Inbound> = z
        .object({
            token: z.string(),
        })
        .transform((v) => ({
            token: v.token,
        }));

    export type Outbound = {
        token: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LoginResponse> = z
        .object({
            token: z.string(),
        })
        .transform((v) => ({
            token: v.token,
        }));
}