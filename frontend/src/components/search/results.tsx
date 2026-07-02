// results.tsx
import { ScholarPaper } from "@/model/paper.model";
import PaperRow from "../home/paper-row";
import { FiSearch } from "react-icons/fi";

interface ResultsProps {
  papers: ScholarPaper[];
}

export default function Results({ papers }: ResultsProps) {
  if (papers.length === 0) {
    return (
      <div className="flex flex-col items-center gap-3 py-16 text-center">
        <div className="rounded-full bg-muted p-3">
          <FiSearch className="text-xl text-muted-foreground" />
        </div>
        <p className="text-sm text-muted-foreground">
          No papers found. Try a different keyword.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {papers.map((paper) => (
        <PaperRow key={paper.id} paper={paper} />
      ))}
    </div>
  );
}
