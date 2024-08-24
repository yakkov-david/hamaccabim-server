"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminLoginQueryResolver = exports.adminLoginQueryValidator = exports.adminLoginQuerySchema = exports.adminLoginQueryProperties = exports.adminLoginPatchResolver = exports.adminLoginPatchValidator = exports.adminLoginPatchSchema = exports.adminLoginDataResolver = exports.adminLoginDataValidator = exports.adminLoginDataSchema = exports.adminLoginExternalResolver = exports.adminLoginResolver = exports.adminLoginValidator = exports.adminLoginSchema = void 0;
// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const typebox_2 = require("@feathersjs/typebox");
const validators_1 = require("../../validators");
// Main data model schema
exports.adminLoginSchema = typebox_1.Type.Object({
    _id: (0, typebox_2.ObjectIdSchema)(),
    //text: Type.String()
}, { $id: 'AdminLogin', additionalProperties: true });
exports.adminLoginValidator = (0, typebox_1.getValidator)(exports.adminLoginSchema, validators_1.dataValidator);
exports.adminLoginResolver = (0, schema_1.resolve)({});
exports.adminLoginExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new entries
exports.adminLoginDataSchema = typebox_1.Type.Pick(exports.adminLoginSchema, [], {
    $id: 'AdminLoginData'
});
exports.adminLoginDataValidator = (0, typebox_1.getValidator)(exports.adminLoginDataSchema, validators_1.dataValidator);
exports.adminLoginDataResolver = (0, schema_1.resolve)({});
// Schema for updating existing entries
exports.adminLoginPatchSchema = typebox_1.Type.Partial(exports.adminLoginSchema, {
    $id: 'AdminLoginPatch'
});
exports.adminLoginPatchValidator = (0, typebox_1.getValidator)(exports.adminLoginPatchSchema, validators_1.dataValidator);
exports.adminLoginPatchResolver = (0, schema_1.resolve)({});
// Schema for allowed query properties
exports.adminLoginQueryProperties = typebox_1.Type.Pick(exports.adminLoginSchema, []);
exports.adminLoginQuerySchema = typebox_1.Type.Intersect([
    (0, typebox_1.querySyntax)(exports.adminLoginQueryProperties),
    // Add additional query properties here
    typebox_1.Type.Object({}, { additionalProperties: true })
], { additionalProperties: true });
exports.adminLoginQueryValidator = (0, typebox_1.getValidator)(exports.adminLoginQuerySchema, validators_1.queryValidator);
exports.adminLoginQueryResolver = (0, schema_1.resolve)({});
//# sourceMappingURL=admin-login.schema.js.map