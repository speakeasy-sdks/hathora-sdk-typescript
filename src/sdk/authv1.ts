/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as models from "../models";

export class AuthV1 extends ClientSDK {
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
     * Returns a unique player token for an anonymous user.
     */
    async loginAnonymous(
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<models.LoginAnonymousResponse> {
        const input: models.LoginAnonymousRequest | undefined = {
            appId: appId,
        };
        const headers = new Headers();
        headers.set("user-agent", SDK_METADATA.userAgent);
        headers.set("Accept", "application/json");

        const payload = models.LoginAnonymousRequest$.outboundSchema.parse(input);

        const body = null;

        const pathParams = {
            appId: enc$.encodeSimple("appId", payload.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path = this.templateURLComponent("/auth/v1/{appId}/login/anonymous")(pathParams);

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
            const result = models.LoginAnonymousResponse$.inboundSchema.parse({
                ...responseFields,
                LoginResponse: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new models.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Returns a unique player token using a Google-signed OIDC `idToken`.
     */
    async loginGoogle(
        loginGoogleRequest: models.LoginGoogleRequest,
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<models.LoginGoogleResponse> {
        const input: models.LoginGoogleRequest1 = {
            loginGoogleRequest: loginGoogleRequest,
            appId: appId,
        };
        const headers = new Headers();
        headers.set("user-agent", SDK_METADATA.userAgent);
        headers.set("Content-Type", "application/json");
        headers.set("Accept", "application/json");

        const payload = models.LoginGoogleRequest1$.outboundSchema.parse(input);

        const body = enc$.encodeJSON("body", payload.LoginGoogleRequest, { explode: true });

        const pathParams = {
            appId: enc$.encodeSimple("appId", payload.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path = this.templateURLComponent("/auth/v1/{appId}/login/google")(pathParams);

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
            const result = models.LoginGoogleResponse$.inboundSchema.parse({
                ...responseFields,
                LoginResponse: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new models.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Returns a unique player token with a specified nickname for a user.
     */
    async loginNickname(
        loginNicknameRequest: models.LoginNicknameRequest,
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<models.LoginNicknameResponse> {
        const input: models.LoginNicknameRequest1 = {
            loginNicknameRequest: loginNicknameRequest,
            appId: appId,
        };
        const headers = new Headers();
        headers.set("user-agent", SDK_METADATA.userAgent);
        headers.set("Content-Type", "application/json");
        headers.set("Accept", "application/json");

        const payload = models.LoginNicknameRequest1$.outboundSchema.parse(input);

        const body = enc$.encodeJSON("body", payload.LoginNicknameRequest, { explode: true });

        const pathParams = {
            appId: enc$.encodeSimple("appId", payload.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path = this.templateURLComponent("/auth/v1/{appId}/login/nickname")(pathParams);

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
            const result = models.LoginNicknameResponse$.inboundSchema.parse({
                ...responseFields,
                LoginResponse: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new models.SDKError("Unexpected API response", response, responseBody);
        }
    }
}