"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.landingPagesQueryResolver = exports.landingPagesQueryValidator = exports.landingPagesQuerySchema = exports.landingPagesQueryProperties = exports.landingPagesPatchResolver = exports.landingPagesPatchValidator = exports.landingPagesPatchSchema = exports.landingPagesDataResolver = exports.landingPagesDataValidator = exports.landingPagesDataSchema = exports.landingPagesExternalResolver = exports.landingPagesResolver = exports.landingPagesValidator = exports.landingPagesSchema = void 0;
// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const typebox_2 = require("@feathersjs/typebox");
const validators_1 = require("../../validators");
// Main data model schema
exports.landingPagesSchema = typebox_1.Type.Object({
    _id: (0, typebox_2.ObjectIdSchema)(),
    //text: Type.String()
    // Define other expected properties here
}, { $id: 'LandingPages', additionalProperties: true } // Set to true to allow additional properties
);
exports.landingPagesValidator = (0, typebox_1.getValidator)(exports.landingPagesSchema, validators_1.dataValidator);
exports.landingPagesResolver = (0, schema_1.resolve)({});
exports.landingPagesExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new entries
exports.landingPagesDataSchema = typebox_1.Type.Pick(exports.landingPagesSchema, [], {
    $id: 'LandingPagesData'
});
exports.landingPagesDataValidator = (0, typebox_1.getValidator)(exports.landingPagesDataSchema, validators_1.dataValidator);
exports.landingPagesDataResolver = (0, schema_1.resolve)({});
// Schema for updating existing entries
exports.landingPagesPatchSchema = typebox_1.Type.Partial(exports.landingPagesSchema, {
    $id: 'LandingPagesPatch'
});
exports.landingPagesPatchValidator = (0, typebox_1.getValidator)(exports.landingPagesPatchSchema, validators_1.dataValidator);
exports.landingPagesPatchResolver = (0, schema_1.resolve)({});
// Schema for allowed query properties
exports.landingPagesQueryProperties = typebox_1.Type.Pick(exports.landingPagesSchema, []);
exports.landingPagesQuerySchema = typebox_1.Type.Intersect([
    (0, typebox_1.querySyntax)(exports.landingPagesQueryProperties),
    // Add additional query properties here
    typebox_1.Type.Object({}, { additionalProperties: false })
], { additionalProperties: false });
exports.landingPagesQueryValidator = (0, typebox_1.getValidator)(exports.landingPagesQuerySchema, validators_1.queryValidator);
exports.landingPagesQueryResolver = (0, schema_1.resolve)({});
//# sourceMappingURL=landing-pages.schema.js.map