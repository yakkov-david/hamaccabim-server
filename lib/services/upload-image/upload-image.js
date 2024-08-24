"use strict";
// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImage = void 0;
const schema_1 = require("@feathersjs/schema");
const upload_image_schema_1 = require("./upload-image.schema");
const upload_image_class_1 = require("./upload-image.class");
const upload_image_shared_1 = require("./upload-image.shared");
__exportStar(require("./upload-image.class"), exports);
__exportStar(require("./upload-image.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const uploadImage = (app) => {
    // Register our service on the Feathers application
    app.use(upload_image_shared_1.uploadImagePath, new upload_image_class_1.UploadImageService((0, upload_image_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: upload_image_shared_1.uploadImageMethods,
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service(upload_image_shared_1.uploadImagePath).hooks({
        around: {
            all: [
                schema_1.hooks.resolveExternal(upload_image_schema_1.uploadImageExternalResolver),
                schema_1.hooks.resolveResult(upload_image_schema_1.uploadImageResolver)
            ]
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(upload_image_schema_1.uploadImageQueryValidator),
                schema_1.hooks.resolveQuery(upload_image_schema_1.uploadImageQueryResolver)
            ],
            find: [],
            get: [],
            create: [
                schema_1.hooks.validateData(upload_image_schema_1.uploadImageDataValidator),
                schema_1.hooks.resolveData(upload_image_schema_1.uploadImageDataResolver)
            ],
            patch: [
                schema_1.hooks.validateData(upload_image_schema_1.uploadImagePatchValidator),
                schema_1.hooks.resolveData(upload_image_schema_1.uploadImagePatchResolver)
            ],
            remove: []
        },
        after: {
            all: []
        },
        error: {
            all: []
        }
    });
};
exports.uploadImage = uploadImage;
//# sourceMappingURL=upload-image.js.map