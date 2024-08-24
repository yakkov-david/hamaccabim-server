"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyticsQueryResolver = exports.analyticsQueryValidator = exports.analyticsQuerySchema = exports.analyticsQueryProperties = exports.analyticsPatchResolver = exports.analyticsPatchValidator = exports.analyticsPatchSchema = exports.analyticsDataResolver = exports.analyticsDataValidator = exports.analyticsDataSchema = exports.analyticsExternalResolver = exports.analyticsResolver = exports.analyticsValidator = exports.analyticsSchema = void 0;
// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../validators");
// Main data model schema
exports.analyticsSchema = typebox_1.Type.Object({
//_id: ObjectIdSchema(),
//text: Type.String()
}, { $id: 'Analytics', additionalProperties: true });
exports.analyticsValidator = (0, typebox_1.getValidator)(exports.analyticsSchema, validators_1.dataValidator);
exports.analyticsResolver = (0, schema_1.resolve)({});
exports.analyticsExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new entries
exports.analyticsDataSchema = typebox_1.Type.Pick(exports.analyticsSchema, [ /*'text'*/], {
    $id: 'AnalyticsData'
});
exports.analyticsDataValidator = (0, typebox_1.getValidator)(exports.analyticsDataSchema, validators_1.dataValidator);
exports.analyticsDataResolver = (0, schema_1.resolve)({});
// Schema for updating existing entries
exports.analyticsPatchSchema = typebox_1.Type.Partial(exports.analyticsSchema, {
    $id: 'AnalyticsPatch'
});
exports.analyticsPatchValidator = (0, typebox_1.getValidator)(exports.analyticsPatchSchema, validators_1.dataValidator);
exports.analyticsPatchResolver = (0, schema_1.resolve)({});
// Schema for allowed query properties
exports.analyticsQueryProperties = typebox_1.Type.Pick(exports.analyticsSchema, [ /*'_id', 'text'*/]);
exports.analyticsQuerySchema = typebox_1.Type.Intersect([
    (0, typebox_1.querySyntax)(exports.analyticsQueryProperties),
    // Add additional query properties here
    typebox_1.Type.Object({}, { additionalProperties: true })
], { additionalProperties: true });
exports.analyticsQueryValidator = (0, typebox_1.getValidator)(exports.analyticsQuerySchema, validators_1.queryValidator);
exports.analyticsQueryResolver = (0, schema_1.resolve)({});
//# sourceMappingURL=analytics.schema.js.map