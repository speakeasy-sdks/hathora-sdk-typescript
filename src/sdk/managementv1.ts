/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as models from "../models";

export class ManagementV1 extends ClientSDK {
    private readonly options$: SDKOptions;

    constructor(options: SDKOptions = {}) {
        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
        });

        this.options$ = options;
        void this.options$;
    }
    async sendVerificationEmail(
        input: models.VerificationEmailRequest,
        options?: RequestOptions
    ): Promise<models.SendVerificationEmailResponse> {
        const headers = new Headers();
        headers.set("user-agent", SDK_METADATA.userAgent);
        headers.set("Content-Type", "application/json");
        headers.set("Accept", "application/json");

        const payload = models.VerificationEmailRequest$.outboundSchema.parse(input);

        const body = enc$.encodeJSON("body", payload, { explode: true });

        const path = this.templateURLComponent("/management/v1/sendverificationemail")();

        const security =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings = this.resolveGlobalSecurity(security);

        const response = await this.fetch$(
            { security: securitySettings, method: "post", path, headers, body },
            options
        );

        const responseFields = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = models.SendVerificationEmailResponse$.inboundSchema.parse({
                ...responseFields,
                VerificationEmailResponse: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new models.SDKError("Unexpected API response", response, responseBody);
        }
    }
}