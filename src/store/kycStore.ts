import { create } from 'zustand'

interface PersonalInfo {
    firstName: string
    lastName: string
    dateOfBirth: string
    nationality: string
}

interface Address {
    street: string
    city: string
    postalCode: string
    country: string
}

interface Document {
    documentType: string
    documentNumber: string
}

interface KYCState {
    currentStep: number
    personalInfo: PersonalInfo
    address: Address
    document: Document
    setPersonalInfo: (data: PersonalInfo) => void
    setAddress: (data: Address) => void
    setDocument: (data: Document) => void
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