import type { Resource } from "@/types";

type QuickViewModalProps = {
  resource: Resource;
  onClose: () => void;
};

export default function QuickViewModal({
  resource,
  onClose,
}: QuickViewModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-5"
      onClick={onClose}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="resource-title"
        className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-7 shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <span className="rounded-full bg-[#F5F0EB] px-3 py-1 text-xs font-semibold text-[#6F5140]">
            {resource.category}
          </span>

          <button
            onClick={onClose}
            aria-label="Close quick view"
            className="text-xl text-slate-500 transition hover:text-slate-900"
          >
            ×
          </button>
        </div>

        <h2
          id="resource-title"
          className="mt-5 text-2xl font-bold"
        >
          {resource.title}
        </h2>

        <p className="mt-3 leading-7 text-slate-600">
          {resource.description}
        </p>

        <div className="mt-4 space-y-3">
          <p>
            <strong>Pricing:</strong> {resource.pricing}
          </p>

          <a
            href={resource.docsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8B6F5C] underline"
          >
            Official Documentation
          </a>

          <div>
            <strong>Installation:</strong>
            <pre className="mt-2 overflow-x-auto rounded-lg bg-[#F5F0EB] p-3 text-sm text-slate-800">
              <code>{resource.installCommand}</code>
            </pre>
          </div>

          <div>
            <strong>Related Tools:</strong>
            <p className="mt-1 text-slate-600">
              {resource.relatedTools.join(", ")}
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {resource.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-slate-100 px-3 py-1 text-sm text-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-block rounded-lg bg-[#8B6F5C] px-5 py-3 font-semibold text-white transition hover:bg-[#6F5140]"
        >
          Open Official Website ↗
        </a>
      </section>
    </div>
  );
}