"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminLoginClient = exports.adminLoginMethods = exports.adminLoginPath = void 0;
exports.adminLoginPath = 'admin-login';
exports.adminLoginMethods = ['find', 'get', 'create', 'patch', 'remove'];
const adminLoginClient = (client) => {
    const connection = client.get('connection');
    client.use(exports.adminLoginPath, connection.service(exports.adminLoginPath), {
        methods: exports.adminLoginMethods
    });
};
exports.adminLoginClient = adminLoginClient;
//# sourceMappingURL=admin-login.shared.js.map