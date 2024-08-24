"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateUsers = void 0;
const paginateUsers = async (context) => {
    const { query } = context.params;
    const { page = 0, size = 10 } = query;
    const skip = page * size;
    const limit = size;
    const [users, total] = await Promise.all([
        context.service.find({
            query: {
                $skip: skip,
                $limit: limit,
            },
            paginate: false,
        }),
        context.service.find({
            query: {},
            paginate: false,
        }),
    ]);
    context.result = {
        total: total.length,
        limit,
        skip,
        data: users,
    };
    return context;
};
exports.paginateUsers = paginateUsers;
//export default paginateUsers;
//# sourceMappingURL=paginateUsers.js.map