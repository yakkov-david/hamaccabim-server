// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type {
  UploadImage,
  UploadImageData,
  UploadImagePatch,
  UploadImageQuery,
  UploadImageService
} from './upload-image.class'

export type { UploadImage, UploadImageData, UploadImagePatch, UploadImageQuery }

export type UploadImageClientService = Pick<
  UploadImageService<Params<UploadImageQuery>>,
  (typeof uploadImageMethods)[number]
>

export const uploadImagePath = 'upload-image'

export const uploadImageMethods = ['find', 'get', 'create', 'patch', 'remove'] as const

export const uploadImageClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(uploadImagePath, connection.service(uploadImagePath), {
    methods: uploadImageMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [uploadImagePath]: UploadImageClientService
  }
}
