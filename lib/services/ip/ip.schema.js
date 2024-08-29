"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ipQueryResolver = exports.ipQueryValidator = exports.ipQuerySchema = exports.ipQueryProperties = exports.ipPatchResolver = exports.ipPatchValidator = exports.ipPatchSchema = exports.ipDataResolver = exports.ipDataValidator = exports.ipDataSchema = exports.ipExternalResolver = exports.ipResolver = exports.ipValidator = exports.ipSchema = void 0;
// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const typebox_2 = require("@feathersjs/typebox");
const validators_1 = require("../../validators");
// Main data model schema
exports.ipSchema = typebox_1.Type.Object({
    _id: (0, typebox_2.ObjectIdSchema)(),
    text: typebox_1.Type.String(),
    ipAddress: typebox_1.Type.String()
}, { $id: 'Ip', additionalProperties: true });
exports.ipValidator = (0, typebox_1.getValidator)(exports.ipSchema, validators_1.dataValidator);
exports.ipResolver = (0, schema_1.resolve)({});
exports.ipExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new entries
exports.ipDataSchema = typebox_1.Type.Pick(exports.ipSchema, ['text'], {
    $id: 'IpData'
});
exports.ipDataValidator = (0, typebox_1.getValidator)(exports.ipDataSchema, validators_1.dataValidator);
exports.ipDataResolver = (0, schema_1.resolve)({});
// Schema for updating existing entries
exports.ipPatchSchema = typebox_1.Type.Partial(exports.ipSchema, {
    $id: 'IpPatch'
});
exports.ipPatchValidator = (0, typebox_1.getValidator)(exports.ipPatchSchema, validators_1.dataValidator);
exports.ipPatchResolver = (0, schema_1.resolve)({});
// Schema for allowed query properties
exports.ipQueryProperties = typebox_1.Type.Pick(exports.ipSchema, ['_id', 'text']);
exports.ipQuerySchema = typebox_1.Type.Intersect([
    (0, typebox_1.querySyntax)(exports.ipQueryProperties),
    // Add additional query properties here
    typebox_1.Type.Object({}, { additionalProperties: false })
], { additionalProperties: false });
exports.ipQueryValidator = (0, typebox_1.getValidator)(exports.ipQuerySchema, validators_1.queryValidator);
exports.ipQueryResolver = (0, schema_1.resolve)({});
//# sourceMappingURL=ip.schema.js.map