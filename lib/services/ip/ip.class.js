"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.IpService = void 0;
const mongodb_1 = require("@feathersjs/mongodb");
// By default calls the standard MongoDB adapter service methods but can be customized with your own functionality.
class IpService extends mongodb_1.MongoDBService {
    async getIpAddress(params) {
        // Assuming that params is of a type that might have `connection` and `headers`
        // You might need to assert the type of params to match your server setup
        console.log("a");
        // Here we are using type assertion to ensure that TypeScript knows what type `params` is
        const connectionParams = params;
        const ip = connectionParams.connection?.remoteAddress || connectionParams.headers?.['x-forwarded-for']?.split(',').shift() || 'IP not found';
        return { ip };
    }
}
exports.IpService = IpService;
const getOptions = (app) => {
    return {
        paginate: app.get('paginate'),
        Model: app.get('mongodbClient').then((db) => db.collection('ip'))
    };
};
exports.getOptions = getOptions;
//# sourceMappingURL=ip.class.js.map