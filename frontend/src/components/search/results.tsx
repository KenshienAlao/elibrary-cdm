import { ScholarPaper } from "@/model/paper.model";
import PaperRow from "../home/paper-row";

interface ResultsProps {
  papers: ScholarPaper[];
}

export default function Results({ papers }: ResultsProps) {
  if (papers.length === 0) {
    return (
      <p className="py-8 text-center text-muted-foreground">No papers found.</p>
    );
  }

  return (
    <div className="space-y-6">
      {papers.map((paper) => (
        <PaperRow key={paper.id} paper={paper} />
      ))}
    </div>
  );
}
