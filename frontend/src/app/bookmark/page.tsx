"use client";

import { useEffect, useState } from "react";
import { Structure } from "@/components/structure";
import PaperRow from "@/components/home/paper-row";
import { ScholarPaper } from "@/model/paper.model";
import { FiBookmark } from "react-icons/fi";

export default function BookmarkPage() {
  const [papers, setPapers] = useState<ScholarPaper[]>([]);

  return (
    <Structure>
      <div className="mx-auto w-full max-w-4xl px-6 pb-24 pt-6 md:pb-8 md:pt-8 lg:px-12">
        <h1 className="mb-6 text-2xl font-bold">Bookmarks</h1>

        {papers.length === 0 ? (
          <div className="flex flex-col items-center gap-3 py-16 text-center">
            <div className="rounded-full bg-muted p-3">
              <FiBookmark className="text-xl text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground">
              No saved papers yet. Bookmark a paper to see it here.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {papers.map((paper) => (
              <PaperRow key={paper.id} paper={paper} />
            ))}
          </div>
        )}
      </div>
    </Structure>
  );
}
