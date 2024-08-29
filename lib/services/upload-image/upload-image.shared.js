"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImageClient = exports.uploadImageMethods = exports.uploadImagePath = void 0;
exports.uploadImagePath = 'upload-image';
exports.uploadImageMethods = ['find', 'get', 'create', 'patch', 'remove'];
const uploadImageClient = (client) => {
    const connection = client.get('connection');
    client.use(exports.uploadImagePath, connection.service(exports.uploadImagePath), {
        methods: exports.uploadImageMethods
    });
};
exports.uploadImageClient = uploadImageClient;
//# sourceMappingURL=upload-image.shared.js.map