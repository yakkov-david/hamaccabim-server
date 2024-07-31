// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type {
  LandingPages,
  LandingPagesData,
  LandingPagesPatch,
  LandingPagesQuery,
  LandingPagesService
} from './landing-pages.class'

export type { LandingPages, LandingPagesData, LandingPagesPatch, LandingPagesQuery }

export type LandingPagesClientService = Pick<
  LandingPagesService<Params<LandingPagesQuery>>,
  (typeof landingPagesMethods)[number]
>

export const landingPagesPath = 'landing-pages'

export const landingPagesMethods = ['find', 'get', 'create', 'patch', 'remove', 'update'] as const

export const landingPagesClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(landingPagesPath, connection.service(landingPagesPath), {
    methods: landingPagesMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [landingPagesPath]: LandingPagesClientService
  }
}
