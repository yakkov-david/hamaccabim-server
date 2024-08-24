"use strict";
//disablePagination.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.disablePagination = void 0;
const disablePagination = (context) => {
    if (context.params.query?.$paginate === 'false') {
        context.params.paginate = false;
    }
    delete context.params.query?.$paginate;
    return context;
};
exports.disablePagination = disablePagination;
//# sourceMappingURL=disablePagination.js.map