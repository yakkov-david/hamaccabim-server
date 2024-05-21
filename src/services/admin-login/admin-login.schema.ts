// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import { ObjectIdSchema } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { AdminLoginService } from './admin-login.class'

// Main data model schema
export const adminLoginSchema = Type.Object(
  {
    _id: ObjectIdSchema(),
    //text: Type.String()
  },
  { $id: 'AdminLogin', additionalProperties: true }
)
export type AdminLogin = Static<typeof adminLoginSchema>
export const adminLoginValidator = getValidator(adminLoginSchema, dataValidator)
export const adminLoginResolver = resolve<AdminLogin, HookContext<AdminLoginService>>({})

export const adminLoginExternalResolver = resolve<AdminLogin, HookContext<AdminLoginService>>({})

// Schema for creating new entries
export const adminLoginDataSchema = Type.Pick(adminLoginSchema, [], {
  $id: 'AdminLoginData'
})
export type AdminLoginData = Static<typeof adminLoginDataSchema>
export const adminLoginDataValidator = getValidator(adminLoginDataSchema, dataValidator)
export const adminLoginDataResolver = resolve<AdminLogin, HookContext<AdminLoginService>>({})

// Schema for updating existing entries
export const adminLoginPatchSchema = Type.Partial(adminLoginSchema, {
  $id: 'AdminLoginPatch'
})
export type AdminLoginPatch = Static<typeof adminLoginPatchSchema>
export const adminLoginPatchValidator = getValidator(adminLoginPatchSchema, dataValidator)
export const adminLoginPatchResolver = resolve<AdminLogin, HookContext<AdminLoginService>>({})

// Schema for allowed query properties
export const adminLoginQueryProperties = Type.Pick(adminLoginSchema, [])
export const adminLoginQuerySchema = Type.Intersect(
  [
    querySyntax(adminLoginQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: true })
  ],
  { additionalProperties: true }
)
export type AdminLoginQuery = Static<typeof adminLoginQuerySchema>
export const adminLoginQueryValidator = getValidator(adminLoginQuerySchema, queryValidator)
export const adminLoginQueryResolver = resolve<AdminLoginQuery, HookContext<AdminLoginService>>({})
