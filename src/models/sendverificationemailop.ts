/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { VerificationEmailResponse, VerificationEmailResponse$ } from "./verificationemailresponse";
import { z } from "zod";

export type SendVerificationEmailResponse = {
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
    verificationEmailResponse?: VerificationEmailResponse | undefined;
};

/** @internal */
export namespace SendVerificationEmailResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        VerificationEmailResponse?: VerificationEmailResponse$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<SendVerificationEmailResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            VerificationEmailResponse: VerificationEmailResponse$.inboundSchema.optional(),
        })
        .transform((v) => ({
            contentType: v.ContentType,
            statusCode: v.StatusCode,
            rawResponse: v.RawResponse,
            ...(v.VerificationEmailResponse === undefined
                ? null
                : { verificationEmailResponse: v.VerificationEmailResponse }),
        }));

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        VerificationEmailResponse?: VerificationEmailResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SendVerificationEmailResponse> =
        z
            .object({
                contentType: z.string(),
                statusCode: z.number().int(),
                rawResponse: z.instanceof(Response).transform(() => {
                    throw new Error("Response cannot be serialized");
                }),
                verificationEmailResponse: VerificationEmailResponse$.outboundSchema.optional(),
            })
            .transform((v) => ({
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.verificationEmailResponse === undefined
                    ? null
                    : { VerificationEmailResponse: v.verificationEmailResponse }),
            }));
}
