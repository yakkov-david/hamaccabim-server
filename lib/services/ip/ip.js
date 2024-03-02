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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ip = void 0;
const schema_1 = require("@feathersjs/schema");
const ip_schema_1 = require("./ip.schema");
const ip_class_1 = require("./ip.class");
const ip_shared_1 = require("./ip.shared");
__exportStar(require("./ip.class"), exports);
__exportStar(require("./ip.schema"), exports);
// Custom hook to log IP address and date
/*const logIpAndDate = async (context: MyContext) => {
  const { app, params, data } = context;

  // Extract the IP address
  const ip = params.connection.remoteAddress;

  // Access the MongoDB model for reports. Here we change 'mongodb' to 'ip'
  const ReportModel = (app.service('ip') as MongoDBService).Model;

  // Create a new report entry with the IP and current date
  const reportEntry = await ReportModel.create({ ip, date: new Date(), ...data });

  // Attach the report entry to the context for later use
  context.result = { message: 'Report received', reportEntry };

  return context;
};*/
// A configure function that registers the service and its hooks via app.configure
const ip = (app) => {
    // Register our service on the Feathers application
    app.use(ip_shared_1.ipPath, new ip_class_1.IpService((0, ip_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: [...ip_shared_1.ipMethods, 'getIpAddress'], // Add 'getIpAddress' here
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service(ip_shared_1.ipPath).hooks({
        around: {
            all: [schema_1.hooks.resolveExternal(ip_schema_1.ipExternalResolver), schema_1.hooks.resolveResult(ip_schema_1.ipResolver)]
        },
        before: {
            all: [schema_1.hooks.validateQuery(ip_schema_1.ipQueryValidator), schema_1.hooks.resolveQuery(ip_schema_1.ipQueryResolver)],
            find: [],
            get: [],
            getIpAddress: [async (context) => {
                    // Call the getIpAddress method and put the result in context.result
                    context.result = await context.service.getIpAddress(context.params);
                    return context;
                }],
            create: [schema_1.hooks.validateData(ip_schema_1.ipDataValidator), schema_1.hooks.resolveData(ip_schema_1.ipDataResolver), /* logIpAndDate*/],
            patch: [schema_1.hooks.validateData(ip_schema_1.ipPatchValidator), schema_1.hooks.resolveData(ip_schema_1.ipPatchResolver)],
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
exports.ip = ip;
//# sourceMappingURL=ip.js.map