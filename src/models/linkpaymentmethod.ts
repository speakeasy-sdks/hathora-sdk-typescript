/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type LinkPaymentMethod = {
    email?: string | undefined;
};

/** @internal */
export namespace LinkPaymentMethod$ {
    export type Inbound = {
        email?: string | undefined;
    };

    export const inboundSchema: z.ZodType<LinkPaymentMethod, z.ZodTypeDef, Inbound> = z
        .object({
            email: z.string().optional(),
        })
        .transform((v) => ({
            ...(v.email === undefined ? null : { email: v.email }),
        }));

    export type Outbound = {
        email?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LinkPaymentMethod> = z
        .object({
            email: z.string().optional(),
        })
        .transform((v) => ({
            ...(v.email === undefined ? null : { email: v.email }),
        }));
}
