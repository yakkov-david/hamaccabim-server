// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import { ObjectIdSchema } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { IpService } from './ip.class'

// Main data model schema
export const ipSchema = Type.Object(
  {
    _id: ObjectIdSchema(),
    text: Type.String(),
    ipAddress: Type.String()
  },
  { $id: 'Ip', additionalProperties: true }
)
export type Ip = Static<typeof ipSchema>
export const ipValidator = getValidator(ipSchema, dataValidator)
export const ipResolver = resolve<Ip, HookContext<IpService>>({})

export const ipExternalResolver = resolve<Ip, HookContext<IpService>>({})

// Schema for creating new entries
export const ipDataSchema = Type.Pick(ipSchema, ['text'], {
  $id: 'IpData'
})
export type IpData = Static<typeof ipDataSchema>
export const ipDataValidator = getValidator(ipDataSchema, dataValidator)
export const ipDataResolver = resolve<Ip, HookContext<IpService>>({})

// Schema for updating existing entries
export const ipPatchSchema = Type.Partial(ipSchema, {
  $id: 'IpPatch'
})
export type IpPatch = Static<typeof ipPatchSchema>
export const ipPatchValidator = getValidator(ipPatchSchema, dataValidator)
export const ipPatchResolver = resolve<Ip, HookContext<IpService>>({})

// Schema for allowed query properties
export const ipQueryProperties = Type.Pick(ipSchema, ['_id', 'text'])
export const ipQuerySchema = Type.Intersect(
  [
    querySyntax(ipQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type IpQuery = Static<typeof ipQuerySchema>
export const ipQueryValidator = getValidator(ipQuerySchema, queryValidator)
export const ipQueryResolver = resolve<IpQuery, HookContext<IpService>>({})
