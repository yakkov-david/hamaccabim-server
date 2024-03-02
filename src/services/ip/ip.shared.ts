// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type { Ip, IpData, IpPatch, IpQuery, IpService } from './ip.class'

export type { Ip, IpData, IpPatch, IpQuery }

export type IpClientService = Pick<IpService<Params<IpQuery>>, (typeof ipMethods)[number]>

export const ipPath = 'ip'

export const ipMethods = ['find', 'get', 'create', 'patch', 'remove'] as const

export const ipClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(ipPath, connection.service(ipPath), {
    methods: ipMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [ipPath]: IpClientService
  }
}
