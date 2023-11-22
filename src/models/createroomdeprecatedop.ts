/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { CreateRoomParams, CreateRoomParams$ } from "./createroomparams";
import { z } from "zod";

export type CreateRoomDeprecatedRequest = {
    createRoomParams: CreateRoomParams;
    appId?: string | undefined;
    roomId?: string | undefined;
};

export type CreateRoomDeprecatedResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
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
export namespace CreateRoomDeprecatedRequest$ {
    export type Inbound = {
        CreateRoomParams: CreateRoomParams$.Inbound;
        appId?: string | undefined;
        roomId?: string | undefined;
    };

    export const inboundSchema: z.ZodType<CreateRoomDeprecatedRequest, z.ZodTypeDef, Inbound> = z
        .object({
            CreateRoomParams: CreateRoomParams$.inboundSchema,
            appId: z.string().optional(),
            roomId: z.string().optional(),
        })
        .transform((v) => ({
            createRoomParams: v.CreateRoomParams,
            ...(v.appId === undefined ? null : { appId: v.appId }),
            ...(v.roomId === undefined ? null : { roomId: v.roomId }),
        }));

    export type Outbound = {
        CreateRoomParams: CreateRoomParams$.Outbound;
        appId?: string | undefined;
        roomId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateRoomDeprecatedRequest> = z
        .object({
            createRoomParams: CreateRoomParams$.outboundSchema,
            appId: z.string().optional(),
            roomId: z.string().optional(),
        })
        .transform((v) => ({
            CreateRoomParams: v.createRoomParams,
            ...(v.appId === undefined ? null : { appId: v.appId }),
            ...(v.roomId === undefined ? null : { roomId: v.roomId }),
        }));
}

/** @internal */
export namespace CreateRoomDeprecatedResponse$ {
    export type Inbound = {
        ContentType: string;
        RoomId?: string | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<CreateRoomDeprecatedResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateRoomDeprecatedResponse> = z
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
