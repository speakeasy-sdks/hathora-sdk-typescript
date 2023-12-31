/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Deployment, Deployment$ } from "./deployment";
import { DeploymentConfig, DeploymentConfig$ } from "./deploymentconfig";
import { z } from "zod";

export type CreateDeploymentRequest = {
    deploymentConfig: DeploymentConfig;
    buildId: number;
    appId?: string | undefined;
};

export type CreateDeploymentResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
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
export namespace CreateDeploymentRequest$ {
    export type Inbound = {
        DeploymentConfig: DeploymentConfig$.Inbound;
        buildId: number;
        appId?: string | undefined;
    };

    export const inboundSchema: z.ZodType<CreateDeploymentRequest, z.ZodTypeDef, Inbound> = z
        .object({
            DeploymentConfig: DeploymentConfig$.inboundSchema,
            buildId: z.number().int(),
            appId: z.string().optional(),
        })
        .transform((v) => ({
            deploymentConfig: v.DeploymentConfig,
            buildId: v.buildId,
            ...(v.appId === undefined ? null : { appId: v.appId }),
        }));

    export type Outbound = {
        DeploymentConfig: DeploymentConfig$.Outbound;
        buildId: number;
        appId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateDeploymentRequest> = z
        .object({
            deploymentConfig: DeploymentConfig$.outboundSchema,
            buildId: z.number().int(),
            appId: z.string().optional(),
        })
        .transform((v) => ({
            DeploymentConfig: v.deploymentConfig,
            buildId: v.buildId,
            ...(v.appId === undefined ? null : { appId: v.appId }),
        }));
}

/** @internal */
export namespace CreateDeploymentResponse$ {
    export type Inbound = {
        ContentType: string;
        Deployment?: Deployment$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<CreateDeploymentResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateDeploymentResponse> = z
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
