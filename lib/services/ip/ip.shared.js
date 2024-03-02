"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ipClient = exports.ipMethods = exports.ipPath = void 0;
exports.ipPath = 'ip';
exports.ipMethods = ['find', 'get', 'create', 'patch', 'remove'];
const ipClient = (client) => {
    const connection = client.get('connection');
    client.use(exports.ipPath, connection.service(exports.ipPath), {
        methods: exports.ipMethods
    });
};
exports.ipClient = ipClient;
//# sourceMappingURL=ip.shared.js.map