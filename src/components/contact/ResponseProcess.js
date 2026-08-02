import ProcessStepsSection from "@/components/shared/ProcessStepsSection";
import { responseProcess } from "@/content/contact";

export default function ResponseProcess() {
  return (
    <ProcessStepsSection
      headingId="response-process-heading"
      title={responseProcess.title}
      supporting={responseProcess.supporting}
      steps={responseProcess.steps}
    />
  );
}
