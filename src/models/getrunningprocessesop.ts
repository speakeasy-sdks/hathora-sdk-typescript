/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ProcessWithRooms, ProcessWithRooms$ } from "./processwithrooms";
import { Region, Region$ } from "./region";
import { z } from "zod";

export type GetRunningProcessesRequest = {
    appId?: string | undefined;
    region?: Region | undefined;
};

export type GetRunningProcessesResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * Ok
     */
    classes?: Array<ProcessWithRooms> | undefined;
};

/** @internal */
export namespace GetRunningProcessesRequest$ {
    export type Inbound = {
        appId?: string | undefined;
        region?: Region | undefined;
    };

    export const inboundSchema: z.ZodType<GetRunningProcessesRequest, z.ZodTypeDef, Inbound> = z
        .object({
            appId: z.string().optional(),
            region: Region$.optional(),
        })
        .transform((v) => ({
            ...(v.appId === undefined ? null : { appId: v.appId }),
            ...(v.region === undefined ? null : { region: v.region }),
        }));

    export type Outbound = {
        appId?: string | undefined;
        region?: Region | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetRunningProcessesRequest> = z
        .object({
            appId: z.string().optional(),
            region: Region$.optional(),
        })
        .transform((v) => ({
            ...(v.appId === undefined ? null : { appId: v.appId }),
            ...(v.region === undefined ? null : { region: v.region }),
        }));
}

/** @internal */
export namespace GetRunningProcessesResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        classes?: Array<ProcessWithRooms$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<GetRunningProcessesResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            classes: z.array(ProcessWithRooms$.inboundSchema).optional(),
        })
        .transform((v) => ({
            contentType: v.ContentType,
            statusCode: v.StatusCode,
            rawResponse: v.RawResponse,
            ...(v.classes === undefined ? null : { classes: v.classes }),
        }));

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        classes?: Array<ProcessWithRooms$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetRunningProcessesResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            classes: z.array(ProcessWithRooms$.outboundSchema).optional(),
        })
        .transform((v) => ({
            ContentType: v.contentType,
            StatusCode: v.statusCode,
            RawResponse: v.rawResponse,
            ...(v.classes === undefined ? null : { classes: v.classes }),
        }));
}
