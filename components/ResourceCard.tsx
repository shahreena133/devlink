import type { Resource } from "@/types";

type ResourceCardProps = {
  resource: Resource;
  isSaved: boolean;
  onToggleBookmark: (id: number) => void;
  onQuickView: (resource: Resource) => void;
};

export default function ResourceCard({
  resource,
  isSaved,
  onToggleBookmark,
  onQuickView,
}: ResourceCardProps) {
  return (
    <article className="rounded-2xl border-2 border-[#C4A995] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="rounded-full bg-[#F5F0EB] px-3 py-1 text-xs font-semibold text-[#6F5140]">
          {resource.category}
        </span>

        <button
          onClick={() => onToggleBookmark(resource.id)}
          aria-label={
            isSaved
              ? `Remove ${resource.title} bookmark`
              : `Bookmark ${resource.title}`
          }
          aria-pressed={isSaved}
          className={`text-xl transition ${
            isSaved
              ? "text-[#8B6F5C]"
              : "text-slate-400 hover:text-[#8B6F5C]"
          }`}
        >
          {isSaved ? "♥" : "♡"}
        </button>
      </div>

      <h3 className="text-xl font-bold">{resource.title}</h3>

      <p className="mt-3 min-h-12 text-sm leading-6 text-slate-600">
        {resource.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {resource.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          onClick={() => onQuickView(resource)}
          className="rounded-lg bg-[#8B6F5C] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#6F5140]"
        >
          Quick View
        </button>

        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-[#C4A995] px-4 py-2 text-sm font-semibold text-[#6F5140] transition hover:bg-[#F5F0EB]"
        >
          Visit Website
        </a>
      </div>
    </article>
  );
}