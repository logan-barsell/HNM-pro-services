import ProcessStepsSection from "@/components/shared/ProcessStepsSection";
import { consultationProcess } from "@/content/consultation";

export default function ConsultationProcess() {
  return (
    <ProcessStepsSection
      headingId="consultation-process-heading"
      title={consultationProcess.title}
      supporting={consultationProcess.supporting}
      steps={consultationProcess.steps}
      tone="green"
    />
  );
}
