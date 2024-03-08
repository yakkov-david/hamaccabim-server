// For more information about this file see https://dove.feathersjs.com/guides/cli/client.html
import { feathers } from '@feathersjs/feathers'
import type { TransportConnection, Application } from '@feathersjs/feathers'
import authenticationClient from '@feathersjs/authentication-client'
import type { AuthenticationClientOptions } from '@feathersjs/authentication-client'

import { landingPagesClient } from './services/landing-pages/landing-pages.shared'
export type {
  LandingPages,
  LandingPagesData,
  LandingPagesQuery,
  LandingPagesPatch
} from './services/landing-pages/landing-pages.shared'

import { landingPagesClient } from './services/landing-pages/landing-pages.shared'
export type {
  LandingPages,
  LandingPagesData,
  LandingPagesQuery,
  LandingPagesPatch
} from './services/landing-pages/landing-pages.shared'

import { landingPagesClient } from './services/landing-pages/landing-pages.shared'
export type {
  LandingPages,
  LandingPagesData,
  LandingPagesQuery,
  LandingPagesPatch
} from './services/landing-pages/landing-pages.shared'

import { ipClient } from './services/ip/ip.shared'
export type { Ip, IpData, IpQuery, IpPatch } from './services/ip/ip.shared'

export interface Configuration {
  connection: TransportConnection<ServiceTypes>
}

export interface ServiceTypes {}

export type ClientApplication = Application<ServiceTypes, Configuration>

/**
 * Returns a typed client for the hamaccabim app.
 *
 * @param connection The REST or Socket.io Feathers client connection
 * @param authenticationOptions Additional settings for the authentication client
 * @see https://dove.feathersjs.com/api/client.html
 * @returns The Feathers client application
 */
export const createClient = <Configuration = any,>(
  connection: TransportConnection<ServiceTypes>,
  authenticationOptions: Partial<AuthenticationClientOptions> = {}
) => {
  const client: ClientApplication = feathers()

  client.configure(connection)
  client.configure(authenticationClient(authenticationOptions))
  client.set('connection', connection)

  client.configure(ipClient)
  client.configure(landingPagesClient)
  client.configure(landingPagesClient)
  client.configure(landingPagesClient)
  return client
}
