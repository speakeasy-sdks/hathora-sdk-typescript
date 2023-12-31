/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKOptions, serverURLFromOptions } from "../lib/config";
import { HTTPClient } from "../lib/http";
import { ClientSDK } from "../lib/sdks";
import { AppV1 } from "./appv1";
import { AuthV1 } from "./authv1";
import { BillingV1 } from "./billingv1";
import { BuildV1 } from "./buildv1";
import { DeploymentV1 } from "./deploymentv1";
import { DiscoveryV1 } from "./discoveryv1";
import { LobbyV1 } from "./lobbyv1";
import { LobbyV2 } from "./lobbyv2";
import { LobbyV3SDK } from "./lobbyv3sdk";
import { LogV1 } from "./logv1";
import { ManagementV1 } from "./managementv1";
import { MetricsV1 } from "./metricsv1";
import { ProcessesV1 } from "./processesv1";
import { RoomV1 } from "./roomv1";
import { RoomV2 } from "./roomv2";

export class HathoraCloud extends ClientSDK {
    private readonly options$: SDKOptions;

    constructor(options: SDKOptions = {}) {
        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
        });

        this.options$ = options;
        void this.options$;
    }

    private _appV1?: AppV1;
    get appV1() {
        return (this._appV1 ??= new AppV1(this.options$));
    }

    private _authV1?: AuthV1;
    get authV1() {
        return (this._authV1 ??= new AuthV1(this.options$));
    }

    private _billingV1?: BillingV1;
    get billingV1() {
        return (this._billingV1 ??= new BillingV1(this.options$));
    }

    private _buildV1?: BuildV1;
    get buildV1() {
        return (this._buildV1 ??= new BuildV1(this.options$));
    }

    private _deploymentV1?: DeploymentV1;
    get deploymentV1() {
        return (this._deploymentV1 ??= new DeploymentV1(this.options$));
    }

    private _discoveryV1?: DiscoveryV1;
    get discoveryV1() {
        return (this._discoveryV1 ??= new DiscoveryV1(this.options$));
    }

    private _lobbyV1?: LobbyV1;
    get lobbyV1() {
        return (this._lobbyV1 ??= new LobbyV1(this.options$));
    }

    private _lobbyV2?: LobbyV2;
    get lobbyV2() {
        return (this._lobbyV2 ??= new LobbyV2(this.options$));
    }

    private _lobbyV3SDK?: LobbyV3SDK;
    get lobbyV3SDK() {
        return (this._lobbyV3SDK ??= new LobbyV3SDK(this.options$));
    }

    private _logV1?: LogV1;
    get logV1() {
        return (this._logV1 ??= new LogV1(this.options$));
    }

    private _managementV1?: ManagementV1;
    get managementV1() {
        return (this._managementV1 ??= new ManagementV1(this.options$));
    }

    private _metricsV1?: MetricsV1;
    get metricsV1() {
        return (this._metricsV1 ??= new MetricsV1(this.options$));
    }

    private _processesV1?: ProcessesV1;
    get processesV1() {
        return (this._processesV1 ??= new ProcessesV1(this.options$));
    }

    private _roomV1?: RoomV1;
    get roomV1() {
        return (this._roomV1 ??= new RoomV1(this.options$));
    }

    private _roomV2?: RoomV2;
    get roomV2() {
        return (this._roomV2 ??= new RoomV2(this.options$));
    }
}
