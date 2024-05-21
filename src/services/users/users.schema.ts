// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import { ObjectIdSchema } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { UsersService } from './users.class'

// Main data model schema
export const usersSchema = Type.Object(
  {
    //_id: ObjectIdSchema(),
    //text: Type.String()
  },
  { $id: 'Users', additionalProperties: true }
)
export type Users = Static<typeof usersSchema>
export const usersValidator = getValidator(usersSchema, dataValidator)
export const usersResolver = resolve<Users, HookContext<UsersService>>({})

export const usersExternalResolver = resolve<Users, HookContext<UsersService>>({})

// Schema for creating new entries
export const usersDataSchema = Type.Pick(usersSchema, [/*'text'*/], {
  $id: 'UsersData'
})
export type UsersData = Static<typeof usersDataSchema>
export const usersDataValidator = getValidator(usersDataSchema, dataValidator)
export const usersDataResolver = resolve<Users, HookContext<UsersService>>({})

// Schema for updating existing entries
export const usersPatchSchema = Type.Partial(usersSchema, {
  $id: 'UsersPatch'
})
export type UsersPatch = Static<typeof usersPatchSchema>
export const usersPatchValidator = getValidator(usersPatchSchema, dataValidator)
export const usersPatchResolver = resolve<Users, HookContext<UsersService>>({})

// Schema for allowed query properties
export const usersQueryProperties = Type.Pick(usersSchema, [/*'_id', 'text'*/])
export const usersQuerySchema = Type.Intersect(
  [
    querySyntax(usersQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: true })
  ],
  { additionalProperties: true }
)
export type UsersQuery = Static<typeof usersQuerySchema>
export const usersQueryValidator = getValidator(usersQuerySchema, queryValidator)
export const usersQueryResolver = resolve<UsersQuery, HookContext<UsersService>>({})
