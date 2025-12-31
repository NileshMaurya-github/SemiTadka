import { moods, Mood, MoodInfo } from "@/data/types";
import { cn } from "@/lib/utils";

interface MoodFilterProps {
  selectedMood: Mood | null;
  onMoodChange: (mood: Mood | null) => void;
}

const MoodFilter = ({ selectedMood, onMoodChange }: MoodFilterProps) => {
  return (
    <div className="sticky top-16 z-40 bg-background/95 backdrop-blur border-b border-border py-4">
      <div className="container">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <button
            onClick={() => onMoodChange(null)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all",
              selectedMood === null
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            )}
          >
            All Recipes
          </button>
          {moods.map((mood: MoodInfo) => (
            <button
              key={mood.id}
              onClick={() => onMoodChange(mood.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all",
                selectedMood === mood.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              <span>{mood.emoji}</span>
              <span>{mood.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoodFilter;
