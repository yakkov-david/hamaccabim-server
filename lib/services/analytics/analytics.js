"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.analytics = exports.filterByLandingPageId = exports.logIpAndDate = void 0;
const schema_1 = require("@feathersjs/schema");
const axios_1 = __importDefault(require("axios"));
const analytics_schema_1 = require("./analytics.schema");
const analytics_class_1 = require("./analytics.class");
const analytics_shared_1 = require("./analytics.shared");
__exportStar(require("./analytics.class"), exports);
__exportStar(require("./analytics.schema"), exports);
async function getExternalIP() {
    try {
        const response = await axios_1.default.get('https://api.ipify.org?format=json');
        return response.data.ip;
    }
    catch (error) {
        console.error('Error fetching external IP:', error);
        return null;
    }
}
const logIpAndDate = async (context) => {
    const { data } = context;
    // Extract the IP address
    data.ipAddress = await getExternalIP();
    // Add the current date
    data.createdAt = new Date();
    return context;
};
exports.logIpAndDate = logIpAndDate;
// Custom hook to filter analytics by landingPageId
const filterByLandingPageId = async (context) => {
    const { params } = context;
    // Check if 'landingPageId' is provided in the query
    if (params.query && params.query.landingPageId) {
        const landingPageId = params.query.landingPageId;
        // Add the landingPageId filter to the query
        context.params.query = {
            ...context.params.query,
            landingPageId
        };
    }
    else {
        // If no landingPageId is provided, return an empty result
        context.result = [];
    }
    return context;
};
exports.filterByLandingPageId = filterByLandingPageId;
// A configure function that registers the service and its hooks via `app.configure`
const analytics = (app) => {
    // Register our service on the Feathers application
    app.use(analytics_shared_1.analyticsPath, new analytics_class_1.AnalyticsService((0, analytics_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: analytics_shared_1.analyticsMethods,
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service(analytics_shared_1.analyticsPath).hooks({
        around: {
            all: [
                //authenticate('jwt'),
                schema_1.hooks.resolveExternal(analytics_schema_1.analyticsExternalResolver),
                schema_1.hooks.resolveResult(analytics_schema_1.analyticsResolver)
            ]
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(analytics_schema_1.analyticsQueryValidator),
                schema_1.hooks.resolveQuery(analytics_schema_1.analyticsQueryResolver)
            ],
            find: [exports.filterByLandingPageId],
            get: [],
            create: [
                schema_1.hooks.validateData(analytics_schema_1.analyticsDataValidator),
                schema_1.hooks.resolveData(analytics_schema_1.analyticsDataResolver),
                exports.logIpAndDate
            ],
            patch: [
                schema_1.hooks.validateData(analytics_schema_1.analyticsPatchValidator),
                schema_1.hooks.resolveData(analytics_schema_1.analyticsPatchResolver)
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
exports.analytics = analytics;
//# sourceMappingURL=analytics.js.map