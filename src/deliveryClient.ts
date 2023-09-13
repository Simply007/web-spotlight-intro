import { createDeliveryClient } from "@kontent-ai/delivery-sdk";

export const client = createDeliveryClient({
    environmentId: process.env.REACT_APP_ENVIRONMENT_ID || '',
    previewApiKey: process.env.REACT_APP_PREVIEW_API_KEY,
    defaultQueryConfig: {
        usePreviewMode: true,
        // waitForLoadingNewContent: true
    }
});