//disablePagination.ts

import { HookContext } from "@feathersjs/feathers";

export const disablePagination  = (context: HookContext) => {

  if (context.params.query?.$paginate === 'false') {
      context.params.paginate = false;
  }
  delete context.params.query?.$paginate;
  return context;
};
