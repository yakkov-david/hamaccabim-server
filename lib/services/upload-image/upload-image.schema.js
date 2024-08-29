"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImageQueryResolver = exports.uploadImageQueryValidator = exports.uploadImageQuerySchema = exports.uploadImageQueryProperties = exports.uploadImagePatchResolver = exports.uploadImagePatchValidator = exports.uploadImagePatchSchema = exports.uploadImageDataResolver = exports.uploadImageDataValidator = exports.uploadImageDataSchema = exports.uploadImageExternalResolver = exports.uploadImageResolver = exports.uploadImageValidator = exports.uploadImageSchema = void 0;
// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const typebox_2 = require("@feathersjs/typebox");
const validators_1 = require("../../validators");
// Main data model schema
exports.uploadImageSchema = typebox_1.Type.Object({
    _id: (0, typebox_2.ObjectIdSchema)(),
    //text: Type.String()
}, { $id: 'UploadImage', additionalProperties: false });
exports.uploadImageValidator = (0, typebox_1.getValidator)(exports.uploadImageSchema, validators_1.dataValidator);
exports.uploadImageResolver = (0, schema_1.resolve)({});
exports.uploadImageExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new entries
exports.uploadImageDataSchema = typebox_1.Type.Pick(exports.uploadImageSchema, [], {
    $id: 'UploadImageData'
});
exports.uploadImageDataValidator = (0, typebox_1.getValidator)(exports.uploadImageDataSchema, validators_1.dataValidator);
exports.uploadImageDataResolver = (0, schema_1.resolve)({});
// Schema for updating existing entries
exports.uploadImagePatchSchema = typebox_1.Type.Partial(exports.uploadImageSchema, {
    $id: 'UploadImagePatch'
});
exports.uploadImagePatchValidator = (0, typebox_1.getValidator)(exports.uploadImagePatchSchema, validators_1.dataValidator);
exports.uploadImagePatchResolver = (0, schema_1.resolve)({});
// Schema for allowed query properties
exports.uploadImageQueryProperties = typebox_1.Type.Pick(exports.uploadImageSchema, []);
exports.uploadImageQuerySchema = typebox_1.Type.Intersect([
    (0, typebox_1.querySyntax)(exports.uploadImageQueryProperties),
    // Add additional query properties here
    typebox_1.Type.Object({}, { additionalProperties: false })
], { additionalProperties: false });
exports.uploadImageQueryValidator = (0, typebox_1.getValidator)(exports.uploadImageQuerySchema, validators_1.queryValidator);
exports.uploadImageQueryResolver = (0, schema_1.resolve)({});
//# sourceMappingURL=upload-image.schema.js.map