/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Deployment, Deployment$ } from "./deployment";
import { z } from "zod";

export type GetDeploymentInfoRequest = {
    deploymentId: number;
    appId?: string | undefined;
};

export type GetDeploymentInfoResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Ok
     */
    deployment?: Deployment | undefined;
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
export namespace GetDeploymentInfoRequest$ {
    export type Inbound = {
        deploymentId: number;
        appId?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetDeploymentInfoRequest, z.ZodTypeDef, Inbound> = z
        .object({
            deploymentId: z.number().int(),
            appId: z.string().optional(),
        })
        .transform((v) => ({
            deploymentId: v.deploymentId,
            ...(v.appId === undefined ? null : { appId: v.appId }),
        }));

    export type Outbound = {
        deploymentId: number;
        appId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetDeploymentInfoRequest> = z
        .object({
            deploymentId: z.number().int(),
            appId: z.string().optional(),
        })
        .transform((v) => ({
            deploymentId: v.deploymentId,
            ...(v.appId === undefined ? null : { appId: v.appId }),
        }));
}

/** @internal */
export namespace GetDeploymentInfoResponse$ {
    export type Inbound = {
        ContentType: string;
        Deployment?: Deployment$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<GetDeploymentInfoResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            Deployment: Deployment$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => ({
            contentType: v.ContentType,
            ...(v.Deployment === undefined ? null : { deployment: v.Deployment }),
            statusCode: v.StatusCode,
            rawResponse: v.RawResponse,
        }));

    export type Outbound = {
        ContentType: string;
        Deployment?: Deployment$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetDeploymentInfoResponse> = z
        .object({
            contentType: z.string(),
            deployment: Deployment$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => ({
            ContentType: v.contentType,
            ...(v.deployment === undefined ? null : { Deployment: v.deployment }),
            StatusCode: v.statusCode,
            RawResponse: v.rawResponse,
        }));
}
