import { z } from 'zod'

export const personalInfoSchema = z.object({
    firstName: z.string().min(2, 'First name must be at least 2 characters'),
    lastName: z.string().min(2, 'Last name must be at least 2 characters'),
    dateOfBirth: z.string().min(1, 'Date of birth is required'),
    nationality: z.string().min(1, 'Nationality is required')
})

export const addressSchema = z.object({
    street: z.string().min(3, 'Street must be at least 3 characters'),
    city: z.string().min(2, 'City must be at least 2 characters'),
    postalCode: z.string().min(3, 'Postal code must be at least 3 characters'),
    country: z.string().min(1, 'Country is required')
})

export const documentSchema = z.object({
    documentType: z.string().min(1, 'Document type is required'),
    documentNumber: z.string().min(3, 'Document number must be at least 3 characters')
})

export type PersonalInfoForm = z.infer<typeof personalInfoSchema>
export type AddressForm = z.infer<typeof addressSchema>
export type DocumentForm = z.infer<typeof documentSchema>