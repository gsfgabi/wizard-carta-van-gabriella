import React from 'react';
import Step1 from './steps/Step1'
import Stepper from '../components/Stepper/Stepper';
import Card  from '../components/Card/Card';

export default function Wizard() {
  const steps = ['Banco', 'Produto', 'Dados', 'Confirmação', 'Conclusão']
  const currentStep = 0

  return (
    <>
      <Stepper currentStep={currentStep} steps={steps} />
      <Card className="w-full max-w-3xl mt-12">
        <div className="px-8 py-8">
          <Step1 />
        </div>
      </Card>
    </>
  )
}
