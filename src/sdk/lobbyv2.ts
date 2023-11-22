/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as models from "../models";

export class LobbyV2 extends ClientSDK {
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
     * Create a new lobby for an [application](https://hathora.dev/docs/concepts/hathora-entities#application). A lobby object is a wrapper around a [room](https://hathora.dev/docs/concepts/hathora-entities#room) object. With a lobby, you get additional functionality like configuring the visibility of the room, managing the state of a match, and retrieving a list of public lobbies to display to players.
     *
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async createLobbyDeprecated(
        security: models.CreateLobbyDeprecatedSecurity,
        createLobbyParams: models.CreateLobbyParams,
        appId?: string | undefined,
        roomId?: string | undefined,
        options?: RequestOptions
    ): Promise<models.CreateLobbyDeprecatedResponse> {
        const input: models.CreateLobbyDeprecatedRequest = {
            createLobbyParams: createLobbyParams,
            appId: appId,
            roomId: roomId,
        };
        const headers = new Headers();
        headers.set("user-agent", SDK_METADATA.userAgent);
        headers.set("Content-Type", "application/json");
        headers.set("Accept", "application/json");

        const payload = models.CreateLobbyDeprecatedRequest$.outboundSchema.parse(input);

        const body = enc$.encodeJSON("body", payload.CreateLobbyParams, { explode: true });

        const pathParams = {
            appId: enc$.encodeSimple("appId", payload.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path = this.templateURLComponent("/lobby/v2/{appId}/create")(pathParams);

        const query = [
            enc$.encodeForm("roomId", payload.roomId, { explode: true, charEncoding: "percent" }),
        ]
            .filter(Boolean)
            .join("&");

        const securitySettings = this.resolveSecurity([
            { value: security?.playerAuth, fieldName: "Authorization", type: "http:bearer" },
        ]);

        const response = await this.fetch$(
            { security: securitySettings, method: "post", path, headers, query, body },
            options
        );

        const responseFields = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 201, "application/json")) {
            const responseBody = await response.json();
            const result = models.CreateLobbyDeprecatedResponse$.inboundSchema.parse({
                ...responseFields,
                Lobby: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new models.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async createLocalLobby(
        security: models.CreateLocalLobbySecurity,
        requestBody: models.CreateLocalLobbyRequestBody,
        appId?: string | undefined,
        roomId?: string | undefined,
        options?: RequestOptions
    ): Promise<models.CreateLocalLobbyResponse> {
        const input: models.CreateLocalLobbyRequest = {
            requestBody: requestBody,
            appId: appId,
            roomId: roomId,
        };
        const headers = new Headers();
        headers.set("user-agent", SDK_METADATA.userAgent);
        headers.set("Content-Type", "application/json");
        headers.set("Accept", "application/json");

        const payload = models.CreateLocalLobbyRequest$.outboundSchema.parse(input);

        const body = enc$.encodeJSON("body", payload.RequestBody, { explode: true });

        const pathParams = {
            appId: enc$.encodeSimple("appId", payload.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path = this.templateURLComponent("/lobby/v2/{appId}/create/local")(pathParams);

        const query = [
            enc$.encodeForm("roomId", payload.roomId, { explode: true, charEncoding: "percent" }),
        ]
            .filter(Boolean)
            .join("&");

        const securitySettings = this.resolveSecurity([
            { value: security?.playerAuth, fieldName: "Authorization", type: "http:bearer" },
        ]);

        const response = await this.fetch$(
            { security: securitySettings, method: "post", path, headers, query, body },
            options
        );

        const responseFields = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 201, "application/json")) {
            const responseBody = await response.json();
            const result = models.CreateLocalLobbyResponse$.inboundSchema.parse({
                ...responseFields,
                Lobby: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new models.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async createPrivateLobby(
        security: models.CreatePrivateLobbySecurity,
        requestBody: models.CreatePrivateLobbyRequestBody,
        appId?: string | undefined,
        roomId?: string | undefined,
        options?: RequestOptions
    ): Promise<models.CreatePrivateLobbyResponse> {
        const input: models.CreatePrivateLobbyRequest = {
            requestBody: requestBody,
            appId: appId,
            roomId: roomId,
        };
        const headers = new Headers();
        headers.set("user-agent", SDK_METADATA.userAgent);
        headers.set("Content-Type", "application/json");
        headers.set("Accept", "application/json");

        const payload = models.CreatePrivateLobbyRequest$.outboundSchema.parse(input);

        const body = enc$.encodeJSON("body", payload.RequestBody, { explode: true });

        const pathParams = {
            appId: enc$.encodeSimple("appId", payload.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path = this.templateURLComponent("/lobby/v2/{appId}/create/private")(pathParams);

        const query = [
            enc$.encodeForm("roomId", payload.roomId, { explode: true, charEncoding: "percent" }),
        ]
            .filter(Boolean)
            .join("&");

        const securitySettings = this.resolveSecurity([
            { value: security?.playerAuth, fieldName: "Authorization", type: "http:bearer" },
        ]);

        const response = await this.fetch$(
            { security: securitySettings, method: "post", path, headers, query, body },
            options
        );

        const responseFields = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 201, "application/json")) {
            const responseBody = await response.json();
            const result = models.CreatePrivateLobbyResponse$.inboundSchema.parse({
                ...responseFields,
                Lobby: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new models.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async createPublicLobby(
        security: models.CreatePublicLobbySecurity,
        requestBody: models.CreatePublicLobbyRequestBody,
        appId?: string | undefined,
        roomId?: string | undefined,
        options?: RequestOptions
    ): Promise<models.CreatePublicLobbyResponse> {
        const input: models.CreatePublicLobbyRequest = {
            requestBody: requestBody,
            appId: appId,
            roomId: roomId,
        };
        const headers = new Headers();
        headers.set("user-agent", SDK_METADATA.userAgent);
        headers.set("Content-Type", "application/json");
        headers.set("Accept", "application/json");

        const payload = models.CreatePublicLobbyRequest$.outboundSchema.parse(input);

        const body = enc$.encodeJSON("body", payload.RequestBody, { explode: true });

        const pathParams = {
            appId: enc$.encodeSimple("appId", payload.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path = this.templateURLComponent("/lobby/v2/{appId}/create/public")(pathParams);

        const query = [
            enc$.encodeForm("roomId", payload.roomId, { explode: true, charEncoding: "percent" }),
        ]
            .filter(Boolean)
            .join("&");

        const securitySettings = this.resolveSecurity([
            { value: security?.playerAuth, fieldName: "Authorization", type: "http:bearer" },
        ]);

        const response = await this.fetch$(
            { security: securitySettings, method: "post", path, headers, query, body },
            options
        );

        const responseFields = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 201, "application/json")) {
            const responseBody = await response.json();
            const result = models.CreatePublicLobbyResponse$.inboundSchema.parse({
                ...responseFields,
                Lobby: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new models.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Get details for a lobby.
     *
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async getLobbyInfo(
        roomId: string,
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<models.GetLobbyInfoResponse> {
        const input: models.GetLobbyInfoRequest | undefined = {
            roomId: roomId,
            appId: appId,
        };
        const headers = new Headers();
        headers.set("user-agent", SDK_METADATA.userAgent);
        headers.set("Accept", "application/json");

        const payload = models.GetLobbyInfoRequest$.outboundSchema.parse(input);

        const body = null;

        const pathParams = {
            appId: enc$.encodeSimple("appId", payload.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
            roomId: enc$.encodeSimple("roomId", payload.roomId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path = this.templateURLComponent("/lobby/v2/{appId}/info/{roomId}")(pathParams);

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
            const result = models.GetLobbyInfoResponse$.inboundSchema.parse({
                ...responseFields,
                Lobby: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new models.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Get all active lobbies for a an [application](https://hathora.dev/docs/concepts/hathora-entities#application). Filter by optionally passing in a `region`. Use this endpoint to display all public lobbies that a player can join in the game client.
     *
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async listActivePublicLobbiesDeprecatedV2(
        appId?: string | undefined,
        region?: models.Region | undefined,
        options?: RequestOptions
    ): Promise<models.ListActivePublicLobbiesDeprecatedV2Response> {
        const input: models.ListActivePublicLobbiesDeprecatedV2Request | undefined = {
            appId: appId,
            region: region,
        };
        const headers = new Headers();
        headers.set("user-agent", SDK_METADATA.userAgent);
        headers.set("Accept", "application/json");

        const payload =
            models.ListActivePublicLobbiesDeprecatedV2Request$.outboundSchema.parse(input);

        const body = null;

        const pathParams = {
            appId: enc$.encodeSimple("appId", payload.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path = this.templateURLComponent("/lobby/v2/{appId}/list/public")(pathParams);

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
            const result = models.ListActivePublicLobbiesDeprecatedV2Response$.inboundSchema.parse({
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
     * Set the state of a lobby. State is intended to be set by the server and must be smaller than 1MB. Use this endpoint to store match data like live player count to enforce max number of clients or persist end-game data (i.e. winner or final scores).
     *
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async setLobbyState(
        setLobbyStateParams: models.SetLobbyStateParams,
        roomId: string,
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<models.SetLobbyStateResponse> {
        const input: models.SetLobbyStateRequest = {
            setLobbyStateParams: setLobbyStateParams,
            roomId: roomId,
            appId: appId,
        };
        const headers = new Headers();
        headers.set("user-agent", SDK_METADATA.userAgent);
        headers.set("Content-Type", "application/json");
        headers.set("Accept", "application/json");

        const payload = models.SetLobbyStateRequest$.outboundSchema.parse(input);

        const body = enc$.encodeJSON("body", payload.SetLobbyStateParams, { explode: true });

        const pathParams = {
            appId: enc$.encodeSimple("appId", payload.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
            roomId: enc$.encodeSimple("roomId", payload.roomId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path = this.templateURLComponent("/lobby/v2/{appId}/setState/{roomId}")(pathParams);

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
            const result = models.SetLobbyStateResponse$.inboundSchema.parse({
                ...responseFields,
                Lobby: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new models.SDKError("Unexpected API response", response, responseBody);
        }
    }
}