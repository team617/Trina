export interface ProcessStep {
  title: string
  description: string
}

export default function ProcessSteps({ steps }: { steps: ReadonlyArray<ProcessStep> }) {
  return (
    <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {steps.map((step, index) => (
        <li key={step.title} className="bg-white/70 rounded-lg p-6 md:p-8 shadow-sm border border-warm-sand/20">
          <p className="font-inter text-sm uppercase tracking-widest text-soft-clay mb-3">
            Step {index + 1}
          </p>
          <h3 className="font-rustique text-2xl text-dark-kakao mb-3">
            {step.title}
          </h3>
          <p className="font-inter text-dark-kakao/80 leading-relaxed">
            {step.description}
          </p>
        </li>
      ))}
    </ol>
  )
}
