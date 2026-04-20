import { Outlet } from 'react-router-dom'
import { useKYCStore } from '../store/kycStore'

const steps = [
  { number: 1, label: 'Personal Info' },
  { number: 2, label: 'Address' },
  { number: 3, label: 'Documents' },
  { number: 4, label: 'Review' },
]

export default function Layout() {
  const currentStep = useKYCStore((state) => state.currentStep)

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-xl">

        <h1 className="text-2xl font-bold text-slate-800 mb-8 text-center">
          KYC Onboarding
        </h1>

        {/* Progress bar */}
        <div className="flex items-center justify-between mb-10">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">

              {/* Circle + label */}
              <div className="flex flex-col items-center">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium
                  ${currentStep === step.number
                    ? 'bg-blue-600 text-white'
                    : currentStep > step.number
                    ? 'bg-green-500 text-white'
                    : 'bg-slate-200 text-slate-500'
                  }`}>
                  {currentStep > step.number ? '✓' : step.number}
                </div>
                <span className="text-xs text-slate-500 mt-1 w-16 text-center">
                  {step.label}
                </span>
              </div>

              {/* Line between circles — skip after last */}
              {index < steps.length - 1 && (
                <div className={`h-0.5 w-16 mx-1 mb-5
                  ${currentStep > step.number ? 'bg-green-500' : 'bg-slate-200'}`}
                />
              )}

            </div>
          ))}
        </div>

        {/* Step page renders here */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
          <Outlet />
        </div>

      </div>
    </div>
  )
}