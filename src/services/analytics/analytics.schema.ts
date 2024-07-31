// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import { ObjectIdSchema } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { AnalyticsService } from './analytics.class'

// Main data model schema
export const analyticsSchema = Type.Object(
  {
    //_id: ObjectIdSchema(),
    //text: Type.String()
  },
  { $id: 'Analytics', additionalProperties: true }
)
export type Analytics = Static<typeof analyticsSchema>
export const analyticsValidator = getValidator(analyticsSchema, dataValidator)
export const analyticsResolver = resolve<Analytics, HookContext<AnalyticsService>>({})

export const analyticsExternalResolver = resolve<Analytics, HookContext<AnalyticsService>>({})

// Schema for creating new entries
export const analyticsDataSchema = Type.Pick(analyticsSchema, [/*'text'*/], {
  $id: 'AnalyticsData'
})
export type AnalyticsData = Static<typeof analyticsDataSchema>
export const analyticsDataValidator = getValidator(analyticsDataSchema, dataValidator)
export const analyticsDataResolver = resolve<Analytics, HookContext<AnalyticsService>>({})

// Schema for updating existing entries
export const analyticsPatchSchema = Type.Partial(analyticsSchema, {
  $id: 'AnalyticsPatch'
})
export type AnalyticsPatch = Static<typeof analyticsPatchSchema>
export const analyticsPatchValidator = getValidator(analyticsPatchSchema, dataValidator)
export const analyticsPatchResolver = resolve<Analytics, HookContext<AnalyticsService>>({})

// Schema for allowed query properties
export const analyticsQueryProperties = Type.Pick(analyticsSchema, [/*'_id', 'text'*/])
export const analyticsQuerySchema = Type.Intersect(
  [
    querySyntax(analyticsQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: true })
  ],
  { additionalProperties: true }
)
export type AnalyticsQuery = Static<typeof analyticsQuerySchema>
export const analyticsQueryValidator = getValidator(analyticsQuerySchema, queryValidator)
export const analyticsQueryResolver = resolve<AnalyticsQuery, HookContext<AnalyticsService>>({})
