# DeploymentV1
(*deploymentV1*)

## Overview

Operations that allow you configure and manage an application's [build](https://hathora.dev/docs/concepts/hathora-entities#build) at runtime.

### Available Operations

* [createDeployment](#createdeployment) - Create a new [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment). Creating a new deployment means all new rooms created will use the latest deployment configuration, but existing games in progress will not be affected.
* [getDeploymentInfo](#getdeploymentinfo) - Get details for a [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment).
* [getDeployments](#getdeployments) - Returns an array of [deployments](https://hathora.dev/docs/concepts/hathora-entities#deployment) for an [application](https://hathora.dev/docs/concepts/hathora-entities#application).

## createDeployment

Create a new [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment). Creating a new deployment means all new rooms created will use the latest deployment configuration, but existing games in progress will not be affected.

### Example Usage

```typescript
import { HathoraCloud } from "@speakeasy-sdks/hathora-sdk-typescript";
import { PlanName, TransportType } from "@speakeasy-sdks/hathora-sdk-typescript/models";

async function run() {
  const sdk = new HathoraCloud({
      security: {
        hathoraDevToken: "",
      },
      appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
    });

  const deploymentConfig = {
    additionalContainerPorts: [
      {
        name: "default",
        port: 8000,
        transportType: TransportType.Udp,
      },
    ],
    containerPort: 4000,
    env: [
      {
        name: "EULA",
        value: "TRUE",
      },
    ],
    planName: PlanName.Tiny,
    roomsPerProcess: 3,
    transportType: TransportType.Tcp,
  };
  const buildId = 1;
  const appId = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
  const res = await sdk.deploymentV1.createDeployment(deploymentConfig, buildId, appId);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `deploymentConfig`                                           | [models.DeploymentConfig](../models/deploymentconfig.md)     | :heavy_check_mark:                                           | N/A                                                          |                                                              |
| `buildId`                                                    | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          | 1                                                            |
| `appId`                                                      | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          | app-af469a92-5b45-4565-b3c4-b79878de67d2                     |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[models.CreateDeploymentResponse](../../models/createdeploymentresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 400-600         | */*             |

## getDeploymentInfo

Get details for a [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment).

### Example Usage

```typescript
import { HathoraCloud } from "@speakeasy-sdks/hathora-sdk-typescript";

async function run() {
  const sdk = new HathoraCloud({
      security: {
        hathoraDevToken: "",
      },
      appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
    });

  const deploymentId = 1;
  const appId = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
  const res = await sdk.deploymentV1.getDeploymentInfo(deploymentId, appId);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `deploymentId`                                               | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          | 1                                                            |
| `appId`                                                      | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          | app-af469a92-5b45-4565-b3c4-b79878de67d2                     |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[models.GetDeploymentInfoResponse](../../models/getdeploymentinforesponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 400-600         | */*             |

## getDeployments

Returns an array of [deployments](https://hathora.dev/docs/concepts/hathora-entities#deployment) for an [application](https://hathora.dev/docs/concepts/hathora-entities#application).

### Example Usage

```typescript
import { HathoraCloud } from "@speakeasy-sdks/hathora-sdk-typescript";

async function run() {
  const sdk = new HathoraCloud({
      security: {
        hathoraDevToken: "",
      },
      appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
    });

  const appId = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
  const res = await sdk.deploymentV1.getDeployments(appId);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `appId`                                                      | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          | app-af469a92-5b45-4565-b3c4-b79878de67d2                     |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[models.GetDeploymentsResponse](../../models/getdeploymentsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 400-600         | */*             |
