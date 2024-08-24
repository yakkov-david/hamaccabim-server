"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.landingPagesClient = exports.landingPagesMethods = exports.landingPagesPath = void 0;
exports.landingPagesPath = 'landing-pages';
exports.landingPagesMethods = ['find', 'get', 'create', 'patch', 'remove', 'update'];
const landingPagesClient = (client) => {
    const connection = client.get('connection');
    client.use(exports.landingPagesPath, connection.service(exports.landingPagesPath), {
        methods: exports.landingPagesMethods
    });
};
exports.landingPagesClient = landingPagesClient;
//# sourceMappingURL=landing-pages.shared.js.map