"use strict";
// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.AdminLoginService = void 0;
const mongodb_1 = require("@feathersjs/mongodb");
// By default calls the standard MongoDB adapter service methods but can be customized with your own functionality.
class AdminLoginService extends mongodb_1.MongoDBService {
}
exports.AdminLoginService = AdminLoginService;
const getOptions = (app) => {
    return {
        paginate: app.get('paginate'),
        Model: app.get('mongodbClient').then((db) => db.collection('admin-login'))
    };
};
exports.getOptions = getOptions;
//# sourceMappingURL=admin-login.class.js.map