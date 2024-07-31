import { HookContext } from '@feathersjs/feathers';

export const paginateUsers = async (context: HookContext) => {
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

//export default paginateUsers;
