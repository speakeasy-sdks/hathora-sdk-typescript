/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Lobby, Lobby$ } from "./lobby";
import { z } from "zod";

export type GetLobbyInfoRequest = {
    roomId: string;
    appId?: string | undefined;
};

export type GetLobbyInfoResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Ok
     */
    lobby?: Lobby | undefined;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
};

/** @internal */
export namespace GetLobbyInfoRequest$ {
    export type Inbound = {
        roomId: string;
        appId?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetLobbyInfoRequest, z.ZodTypeDef, Inbound> = z
        .object({
            roomId: z.string(),
            appId: z.string().optional(),
        })
        .transform((v) => ({
            roomId: v.roomId,
            ...(v.appId === undefined ? null : { appId: v.appId }),
        }));

    export type Outbound = {
        roomId: string;
        appId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLobbyInfoRequest> = z
        .object({
            roomId: z.string(),
            appId: z.string().optional(),
        })
        .transform((v) => ({
            roomId: v.roomId,
            ...(v.appId === undefined ? null : { appId: v.appId }),
        }));
}

/** @internal */
export namespace GetLobbyInfoResponse$ {
    export type Inbound = {
        ContentType: string;
        Lobby?: Lobby$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<GetLobbyInfoResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            Lobby: Lobby$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => ({
            contentType: v.ContentType,
            ...(v.Lobby === undefined ? null : { lobby: v.Lobby }),
            statusCode: v.StatusCode,
            rawResponse: v.RawResponse,
        }));

    export type Outbound = {
        ContentType: string;
        Lobby?: Lobby$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLobbyInfoResponse> = z
        .object({
            contentType: z.string(),
            lobby: Lobby$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => ({
            ContentType: v.contentType,
            ...(v.lobby === undefined ? null : { Lobby: v.lobby }),
            StatusCode: v.statusCode,
            RawResponse: v.rawResponse,
        }));
}