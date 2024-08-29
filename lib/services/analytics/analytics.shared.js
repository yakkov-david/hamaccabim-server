"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyticsClient = exports.analyticsMethods = exports.analyticsPath = void 0;
exports.analyticsPath = 'analytics';
exports.analyticsMethods = ['find', 'get', 'create', 'patch', 'remove'];
const analyticsClient = (client) => {
    const connection = client.get('connection');
    client.use(exports.analyticsPath, connection.service(exports.analyticsPath), {
        methods: exports.analyticsMethods
    });
};
exports.analyticsClient = analyticsClient;
//# sourceMappingURL=analytics.shared.js.map