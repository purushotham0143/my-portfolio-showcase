import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

const VisitorCounter = () => {
  const [visits, setVisits] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://api.countapi.xyz/hit/ragalapurushotham.netlify.app/visits")
      .then((res) => res.json())
      .then((data) => setVisits(data.value))
      .catch(() => setVisits(null));
  }, []);

  return (
    <div className="flex items-center gap-1 px-3 py-1 bg-surface border border-border text-sm rounded-lg">
      <Eye size={16} className="text-primary" />
      <span className="font-medium text-muted-foreground">Visitors:</span>
      <span className="font-bold text-foreground">{visits ?? "..."}</span>
    </div>
  );
};

export default VisitorCounter;
