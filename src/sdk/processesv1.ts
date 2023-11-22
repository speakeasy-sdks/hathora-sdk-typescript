/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as models from "../models";

export class ProcessesV1 extends ClientSDK {
    private readonly options$: SDKOptions;

    constructor(options: SDKOptions = {}) {
        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
        });

        this.options$ = options;
        void this.options$;
    }
    /**
     * Get details for a [process](https://hathora.dev/docs/concepts/hathora-entities#process).
     */
    async getProcessInfo(
        processId: string,
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<models.GetProcessInfoResponse> {
        const input: models.GetProcessInfoRequest | undefined = {
            processId: processId,
            appId: appId,
        };
        const headers = new Headers();
        headers.set("user-agent", SDK_METADATA.userAgent);
        headers.set("Accept", "application/json");

        const payload = models.GetProcessInfoRequest$.outboundSchema.parse(input);

        const body = null;

        const pathParams = {
            appId: enc$.encodeSimple("appId", payload.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
            processId: enc$.encodeSimple("processId", payload.processId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path = this.templateURLComponent("/processes/v1/{appId}/info/{processId}")(
            pathParams
        );

        const security =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings = this.resolveGlobalSecurity(security);

        const response = await this.fetch$(
            { security: securitySettings, method: "get", path, headers, body },
            options
        );

        const responseFields = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = models.GetProcessInfoResponse$.inboundSchema.parse({
                ...responseFields,
                Process: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new models.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Retrieve 10 most recently started [process](https://hathora.dev/docs/concepts/hathora-entities#process) objects for an [application](https://hathora.dev/docs/concepts/hathora-entities#application). Filter the array by optionally passing in a `region`.
     */
    async getRunningProcesses(
        appId?: string | undefined,
        region?: models.Region | undefined,
        options?: RequestOptions
    ): Promise<models.GetRunningProcessesResponse> {
        const input: models.GetRunningProcessesRequest | undefined = {
            appId: appId,
            region: region,
        };
        const headers = new Headers();
        headers.set("user-agent", SDK_METADATA.userAgent);
        headers.set("Accept", "application/json");

        const payload = models.GetRunningProcessesRequest$.outboundSchema.parse(input);

        const body = null;

        const pathParams = {
            appId: enc$.encodeSimple("appId", payload.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path = this.templateURLComponent("/processes/v1/{appId}/list/running")(pathParams);

        const query = [
            enc$.encodeForm("region", payload.region, { explode: true, charEncoding: "percent" }),
        ]
            .filter(Boolean)
            .join("&");

        const security =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings = this.resolveGlobalSecurity(security);

        const response = await this.fetch$(
            { security: securitySettings, method: "get", path, headers, query, body },
            options
        );

        const responseFields = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = models.GetRunningProcessesResponse$.inboundSchema.parse({
                ...responseFields,
                classes: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new models.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Retrieve 10 most recently stopped [process](https://hathora.dev/docs/concepts/hathora-entities#process) objects for an [application](https://hathora.dev/docs/concepts/hathora-entities#application). Filter the array by optionally passing in a `region`.
     */
    async getStoppedProcesses(
        appId?: string | undefined,
        region?: models.Region | undefined,
        options?: RequestOptions
    ): Promise<models.GetStoppedProcessesResponse> {
        const input: models.GetStoppedProcessesRequest | undefined = {
            appId: appId,
            region: region,
        };
        const headers = new Headers();
        headers.set("user-agent", SDK_METADATA.userAgent);
        headers.set("Accept", "application/json");

        const payload = models.GetStoppedProcessesRequest$.outboundSchema.parse(input);

        const body = null;

        const pathParams = {
            appId: enc$.encodeSimple("appId", payload.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path = this.templateURLComponent("/processes/v1/{appId}/list/stopped")(pathParams);

        const query = [
            enc$.encodeForm("region", payload.region, { explode: true, charEncoding: "percent" }),
        ]
            .filter(Boolean)
            .join("&");

        const security =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings = this.resolveGlobalSecurity(security);

        const response = await this.fetch$(
            { security: securitySettings, method: "get", path, headers, query, body },
            options
        );

        const responseFields = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = models.GetStoppedProcessesResponse$.inboundSchema.parse({
                ...responseFields,
                classes: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new models.SDKError("Unexpected API response", response, responseBody);
        }
    }
}