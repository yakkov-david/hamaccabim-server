// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type {
  Analytics,
  AnalyticsData,
  AnalyticsPatch,
  AnalyticsQuery,
  AnalyticsService
} from './analytics.class'

export type { Analytics, AnalyticsData, AnalyticsPatch, AnalyticsQuery }

export type AnalyticsClientService = Pick<
  AnalyticsService<Params<AnalyticsQuery>>,
  (typeof analyticsMethods)[number]
>

export const analyticsPath = 'analytics'

export const analyticsMethods = ['find', 'get', 'create', 'patch', 'remove'] as const

export const analyticsClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(analyticsPath, connection.service(analyticsPath), {
    methods: analyticsMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [analyticsPath]: AnalyticsClientService
  }
}
