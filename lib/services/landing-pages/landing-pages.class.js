"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.LandingPagesService = void 0;
const mongodb_1 = require("@feathersjs/mongodb");
// By default calls the standard MongoDB adapter service methods but can be customized with your own functionality.
class LandingPagesService extends mongodb_1.MongoDBService {
}
exports.LandingPagesService = LandingPagesService;
const getOptions = (app) => {
    return {
        paginate: app.get('paginate'),
        Model: app.get('mongodbClient').then((db) => db.collection('landing-pages'))
    };
};
exports.getOptions = getOptions;
//# sourceMappingURL=landing-pages.class.js.map