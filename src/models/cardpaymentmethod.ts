/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { CardBrand, CardBrand$ } from "./cardbrand";
import { z } from "zod";

export type CardPaymentMethod = {
    brand: CardBrand;
    last4: string;
};

/** @internal */
export namespace CardPaymentMethod$ {
    export type Inbound = {
        brand: CardBrand;
        last4: string;
    };

    export const inboundSchema: z.ZodType<CardPaymentMethod, z.ZodTypeDef, Inbound> = z
        .object({
            brand: CardBrand$,
            last4: z.string(),
        })
        .transform((v) => ({
            brand: v.brand,
            last4: v.last4,
        }));

    export type Outbound = {
        brand: CardBrand;
        last4: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CardPaymentMethod> = z
        .object({
            brand: CardBrand$,
            last4: z.string(),
        })
        .transform((v) => ({
            brand: v.brand,
            last4: v.last4,
        }));
}
