/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Region, Region$ } from "./region";
import { z } from "zod";

export type CreatePublicLobbyDeprecatedSecurity = {
    playerAuth: string;
};

export type CreatePublicLobbyDeprecatedRequest = {
    appId?: string | undefined;
    local?: boolean | undefined;
    region?: Region | undefined;
};

export type CreatePublicLobbyDeprecatedResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Ok
     */
    roomId?: string | undefined;
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
export namespace CreatePublicLobbyDeprecatedRequest$ {
    export type Inbound = {
        appId?: string | undefined;
        local?: boolean | undefined;
        region?: Region | undefined;
    };

    export const inboundSchema: z.ZodType<
        CreatePublicLobbyDeprecatedRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            appId: z.string().optional(),
            local: z.boolean().optional(),
            region: Region$.optional(),
        })
        .transform((v) => ({
            ...(v.appId === undefined ? null : { appId: v.appId }),
            ...(v.local === undefined ? null : { local: v.local }),
            ...(v.region === undefined ? null : { region: v.region }),
        }));

    export type Outbound = {
        appId?: string | undefined;
        local?: boolean | undefined;
        region?: Region | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        CreatePublicLobbyDeprecatedRequest
    > = z
        .object({
            appId: z.string().optional(),
            local: z.boolean().optional(),
            region: Region$.optional(),
        })
        .transform((v) => ({
            ...(v.appId === undefined ? null : { appId: v.appId }),
            ...(v.local === undefined ? null : { local: v.local }),
            ...(v.region === undefined ? null : { region: v.region }),
        }));
}

/** @internal */
export namespace CreatePublicLobbyDeprecatedResponse$ {
    export type Inbound = {
        ContentType: string;
        RoomId?: string | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        CreatePublicLobbyDeprecatedResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            RoomId: z.string().optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => ({
            contentType: v.ContentType,
            ...(v.RoomId === undefined ? null : { roomId: v.RoomId }),
            statusCode: v.StatusCode,
            rawResponse: v.RawResponse,
        }));

    export type Outbound = {
        ContentType: string;
        RoomId?: string | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        CreatePublicLobbyDeprecatedResponse
    > = z
        .object({
            contentType: z.string(),
            roomId: z.string().optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => ({
            ContentType: v.contentType,
            ...(v.roomId === undefined ? null : { RoomId: v.roomId }),
            StatusCode: v.statusCode,
            RawResponse: v.rawResponse,
        }));
}
