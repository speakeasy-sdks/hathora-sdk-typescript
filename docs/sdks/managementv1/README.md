# ManagementV1
(*managementV1*)

### Available Operations

* [sendVerificationEmail](#sendverificationemail)

## sendVerificationEmail

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

  
  const res = await sdk.managementV1.sendVerificationEmail({
      userId: "string",
    });

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                   | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `request`                                                                   | [models.VerificationEmailRequest](../../models/verificationemailrequest.md) | :heavy_check_mark:                                                          | The request object to use for the request.                                  |
| `config`                                                                    | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                | :heavy_minus_sign:                                                          | Available config options for making requests.                               |


### Response

**Promise<[models.SendVerificationEmailResponse](../../models/sendverificationemailresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 400-600         | */*             |
