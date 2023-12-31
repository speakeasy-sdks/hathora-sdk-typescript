/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type LoginNicknameRequest = {
    /**
     * An alias to represent a player.
     */
    nickname: string;
};

/** @internal */
export namespace LoginNicknameRequest$ {
    export type Inbound = {
        nickname: string;
    };

    export const inboundSchema: z.ZodType<LoginNicknameRequest, z.ZodTypeDef, Inbound> = z
        .object({
            nickname: z.string(),
        })
        .transform((v) => ({
            nickname: v.nickname,
        }));

    export type Outbound = {
        nickname: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LoginNicknameRequest> = z
        .object({
            nickname: z.string(),
        })
        .transform((v) => ({
            nickname: v.nickname,
        }));
}
