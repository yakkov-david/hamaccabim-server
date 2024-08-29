"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.AnalyticsService = void 0;
const mongodb_1 = require("@feathersjs/mongodb");
// By default calls the standard MongoDB adapter service methods but can be customized with your own functionality.
class AnalyticsService extends mongodb_1.MongoDBService {
}
exports.AnalyticsService = AnalyticsService;
const getOptions = (app) => {
    return {
        paginate: app.get('paginate'),
        Model: app.get('mongodbClient').then((db) => db.collection('analytics'))
    };
};
exports.getOptions = getOptions;
//# sourceMappingURL=analytics.class.js.map