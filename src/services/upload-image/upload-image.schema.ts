// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import { ObjectIdSchema } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { UploadImageService } from './upload-image.class'

// Main data model schema
export const uploadImageSchema = Type.Object(
  {
    _id: ObjectIdSchema(),
    //text: Type.String()
  },
  { $id: 'UploadImage', additionalProperties: false }
)
export type UploadImage = Static<typeof uploadImageSchema>
export const uploadImageValidator = getValidator(uploadImageSchema, dataValidator)
export const uploadImageResolver = resolve<UploadImage, HookContext<UploadImageService>>({})

export const uploadImageExternalResolver = resolve<UploadImage, HookContext<UploadImageService>>({})

// Schema for creating new entries
export const uploadImageDataSchema = Type.Pick(uploadImageSchema, [], {
  $id: 'UploadImageData'
})
export type UploadImageData = Static<typeof uploadImageDataSchema>
export const uploadImageDataValidator = getValidator(uploadImageDataSchema, dataValidator)
export const uploadImageDataResolver = resolve<UploadImage, HookContext<UploadImageService>>({})

// Schema for updating existing entries
export const uploadImagePatchSchema = Type.Partial(uploadImageSchema, {
  $id: 'UploadImagePatch'
})
export type UploadImagePatch = Static<typeof uploadImagePatchSchema>
export const uploadImagePatchValidator = getValidator(uploadImagePatchSchema, dataValidator)
export const uploadImagePatchResolver = resolve<UploadImage, HookContext<UploadImageService>>({})

// Schema for allowed query properties
export const uploadImageQueryProperties = Type.Pick(uploadImageSchema, [])
export const uploadImageQuerySchema = Type.Intersect(
  [
    querySyntax(uploadImageQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type UploadImageQuery = Static<typeof uploadImageQuerySchema>
export const uploadImageQueryValidator = getValidator(uploadImageQuerySchema, queryValidator)
export const uploadImageQueryResolver = resolve<UploadImageQuery, HookContext<UploadImageService>>({})
