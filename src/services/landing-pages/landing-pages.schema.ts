// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import { ObjectIdSchema } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { LandingPagesService } from './landing-pages.class'

// Main data model schema
export const landingPagesSchema = Type.Object(
  {
    _id: ObjectIdSchema(),
    //text: Type.String()
    // Define other expected properties here
  },
  { $id: 'LandingPages', additionalProperties: true } // Set to true to allow additional properties
)

export type LandingPages = Static<typeof landingPagesSchema>
export const landingPagesValidator = getValidator(landingPagesSchema, dataValidator)
export const landingPagesResolver = resolve<LandingPages, HookContext<LandingPagesService>>({})

export const landingPagesExternalResolver = resolve<LandingPages, HookContext<LandingPagesService>>({})

// Schema for creating new entries
export const landingPagesDataSchema = Type.Pick(landingPagesSchema, [], {
  $id: 'LandingPagesData'
})
export type LandingPagesData = Static<typeof landingPagesDataSchema>
export const landingPagesDataValidator = getValidator(landingPagesDataSchema, dataValidator)
export const landingPagesDataResolver = resolve<LandingPages, HookContext<LandingPagesService>>({})

// Schema for updating existing entries
export const landingPagesPatchSchema = Type.Partial(landingPagesSchema, {
  $id: 'LandingPagesPatch'
})
export type LandingPagesPatch = Static<typeof landingPagesPatchSchema>
export const landingPagesPatchValidator = getValidator(landingPagesPatchSchema, dataValidator)
export const landingPagesPatchResolver = resolve<LandingPages, HookContext<LandingPagesService>>({})

// Schema for allowed query properties
export const landingPagesQueryProperties = Type.Pick(landingPagesSchema, [])
export const landingPagesQuerySchema = Type.Intersect(
  [
    querySyntax(landingPagesQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type LandingPagesQuery = Static<typeof landingPagesQuerySchema>
export const landingPagesQueryValidator = getValidator(landingPagesQuerySchema, queryValidator)
export const landingPagesQueryResolver = resolve<LandingPagesQuery, HookContext<LandingPagesService>>({})