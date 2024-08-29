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
exports.landingPages = void 0;
const schema_1 = require("@feathersjs/schema");
const landing_pages_schema_1 = require("./landing-pages.schema");
const landing_pages_class_1 = require("./landing-pages.class");
const landing_pages_shared_1 = require("./landing-pages.shared");
__exportStar(require("./landing-pages.class"), exports);
__exportStar(require("./landing-pages.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const landingPages = (app) => {
    // Register our service on the Feathers application
    app.use(landing_pages_shared_1.landingPagesPath, new landing_pages_class_1.LandingPagesService((0, landing_pages_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: landing_pages_shared_1.landingPagesMethods,
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service(landing_pages_shared_1.landingPagesPath).hooks({
        around: {
            all: [
                schema_1.hooks.resolveExternal(landing_pages_schema_1.landingPagesExternalResolver),
                schema_1.hooks.resolveResult(landing_pages_schema_1.landingPagesResolver)
            ]
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(landing_pages_schema_1.landingPagesQueryValidator),
                schema_1.hooks.resolveQuery(landing_pages_schema_1.landingPagesQueryResolver)
            ],
            find: [],
            get: [],
            create: [
                schema_1.hooks.validateData(landing_pages_schema_1.landingPagesDataValidator),
                schema_1.hooks.resolveData(landing_pages_schema_1.landingPagesDataResolver)
            ],
            patch: [
                schema_1.hooks.validateData(landing_pages_schema_1.landingPagesPatchValidator),
                schema_1.hooks.resolveData(landing_pages_schema_1.landingPagesPatchResolver)
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
exports.landingPages = landingPages;
//# sourceMappingURL=landing-pages.js.map