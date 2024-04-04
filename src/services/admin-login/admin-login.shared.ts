// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type {
  AdminLogin,
  AdminLoginData,
  AdminLoginPatch,
  AdminLoginQuery,
  AdminLoginService
} from './admin-login.class'

export type { AdminLogin, AdminLoginData, AdminLoginPatch, AdminLoginQuery }

export type AdminLoginClientService = Pick<
  AdminLoginService<Params<AdminLoginQuery>>,
  (typeof adminLoginMethods)[number]
>

export const adminLoginPath = 'admin-login'

export const adminLoginMethods = ['find', 'get', 'create', 'patch', 'remove'] as const

export const adminLoginClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(adminLoginPath, connection.service(adminLoginPath), {
    methods: adminLoginMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [adminLoginPath]: AdminLoginClientService
  }
}
