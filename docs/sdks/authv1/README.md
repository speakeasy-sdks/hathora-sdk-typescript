# AuthV1
(*authV1*)

## Overview

Operations that allow you to generate a Hathora-signed [JSON web token (JWT)](https://jwt.io/) for [player authentication](https://hathora.dev/docs/lobbies-and-matchmaking/auth-service).

### Available Operations

* [loginAnonymous](#loginanonymous) - Returns a unique player token for an anonymous user.
* [loginGoogle](#logingoogle) - Returns a unique player token using a Google-signed OIDC `idToken`.
* [loginNickname](#loginnickname) - Returns a unique player token with a specified nickname for a user.

## loginAnonymous

Returns a unique player token for an anonymous user.

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
  const res = await sdk.authV1.loginAnonymous(appId);

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

**Promise<[models.LoginAnonymousResponse](../../models/loginanonymousresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 400-600         | */*             |

## loginGoogle

Returns a unique player token using a Google-signed OIDC `idToken`.

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

  const loginGoogleRequest = {
    idToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZkNDhhNzUxMzhkOWQ0OGYwYWE2MzVlZjU2OWM0ZTE5NmY3YWU4ZDYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiODQ4NDEyODI2Nzg4LW00bXNyYjZxNDRkbTJ1ZTNrZ3Z1aTBmcTdrZGE1NWxzLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiODQ4NDEyODI2Nzg4LW00bXNyYjZxNDRkbTJ1ZTNrZ3Z1aTBmcTdrZGE1NWxzLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE0NTQyMzMwNzI3MTU2MTMzNzc2IiwiZW1haWwiOiJocGFdkeivmeuzQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoidno1NGhhdTNxbnVR",
  };
  const appId = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
  const res = await sdk.authV1.loginGoogle(loginGoogleRequest, appId);

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
| `loginGoogleRequest`                                         | [models.LoginGoogleRequest](../models/logingooglerequest.md) | :heavy_check_mark:                                           | N/A                                                          |                                                              |
| `appId`                                                      | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          | app-af469a92-5b45-4565-b3c4-b79878de67d2                     |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[models.LoginGoogleResponse](../../models/logingoogleresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 400-600         | */*             |

## loginNickname

Returns a unique player token with a specified nickname for a user.

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

  const loginNicknameRequest = {
    nickname: "squiddytwoshoes",
  };
  const appId = "app-af469a92-5b45-4565-b3c4-b79878de67d2";
  const res = await sdk.authV1.loginNickname(loginNicknameRequest, appId);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `loginNicknameRequest`                                           | [models.LoginNicknameRequest](../models/loginnicknamerequest.md) | :heavy_check_mark:                                               | N/A                                                              |                                                                  |
| `appId`                                                          | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | app-af469a92-5b45-4565-b3c4-b79878de67d2                         |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |                                                                  |


### Response

**Promise<[models.LoginNicknameResponse](../../models/loginnicknameresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 400-600         | */*             |
