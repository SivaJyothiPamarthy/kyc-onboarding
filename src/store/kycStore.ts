import { create } from 'zustand'

import type { PersonalInfoForm, AddressForm, DocumentForm } from '../types/kyc'

interface KYCState {
    currentStep: number
    personalInfo: PersonalInfoForm
    address: AddressForm
    document: DocumentForm
    setPersonalInfo: (data: PersonalInfoForm) => void
    setAddress: (data: AddressForm) => void
    setDocument: (data: DocumentForm) => void
    setCurrentStep: (step: number) => void
}

export const useKYCStore = create<KYCState>((set) => ({
    currentStep: 1,
    personalInfo: {
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        nationality: ''
    },
    address: {
        street: '',
        city: '',
        postalCode: '',
        country: ''
    },
    document: {
        documentType: '',
        documentNumber: ''
    },
    setPersonalInfo: (data) => set({personalInfo: data}),
    setAddress: (data) => set({address: data}),
    setDocument: (data) => set({document: data}),
    setCurrentStep: (step) => set({currentStep: step})
}))