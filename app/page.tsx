"use client";

import { useState, useEffect } from "react";
import { useRouter} from "next/navigation";
import resources from "@/data/resources";
import ResourceCard from "@/components/ResourceCard";
import QuickViewModal from "@/components/QuickViewModal";
import type { Resource } from "@/types";

const categories = [
  "All",
  "UI Component Libraries",
  "Backend / APIs",
  "Icons & Assets",
  "AI Tools",
];

export default function Home() {
  const router = useRouter();

const [search, setSearch] = useState("");
const [category, setCategory] = useState("All");
const [urlLoaded, setUrlLoaded] = useState(false);
const [toast, setToast] = useState("");

useEffect(() => {
  if (!toast) return;

  const timer = setTimeout(() => {
    setToast("");
  }, 3000);

  return () => clearTimeout(timer);
}, [toast]);

useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const savedSearch = params.get("search") || "";
  const savedCategory = params.get("category") || "All";

  if (savedSearch) {
  // eslint-disable-next-line react-hooks/set-state-in-effect
  setSearch(savedSearch);
}

  if (categories.includes(savedCategory)) {
  setCategory(savedCategory);
}

  setUrlLoaded(true);
}, []);

  const [saved, setSaved] = useState<number[]>([]);
  const [bookmarksLoaded, setBookmarksLoaded] = useState(false);

useEffect(() => {
  const storedBookmarks = localStorage.getItem("devlink-bookmarks");

  if (storedBookmarks) {
    try {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSaved(JSON.parse(storedBookmarks));
    } catch {
      localStorage.removeItem("devlink-bookmarks");
    }
  }

  setBookmarksLoaded(true);
}, []);

useEffect(() => {
  if (bookmarksLoaded) {
    localStorage.setItem("devlink-bookmarks", JSON.stringify(saved));
  }
}, [saved, bookmarksLoaded]);

  const [showSavedOnly, setShowSavedOnly] = useState(false);
  const [selectedResource, setSelectedResource] =
    useState<Resource | null>(null);

  const filteredResources = (urlLoaded ? resources : []).filter((resource) => {
    const query = search.toLowerCase();
    
    const matchesSearch =
  query === "" ||
  resource.title.toLowerCase().includes(query) ||
  resource.description.toLowerCase().includes(query) ||
  resource.tags.some((tag) =>
    tag.toLowerCase().includes(query)
  );

    const matchesCategory =
      category === "All" || resource.category === category;

    const matchesSaved =
      !showSavedOnly || saved.includes(resource.id);

    return matchesSearch && matchesCategory && matchesSaved;
  });

  function toggleBookmark(id: number) {
  const resource = resources.find((item) => item.id === id);

  if (!resource) return;

  const isSaved = saved.includes(id);

  setSaved((previous) =>
    previous.includes(id)
      ? previous.filter((savedId) => savedId !== id)
      : [...previous, id]
  );

  setToast(
    isSaved
      ? `${resource.title} removed from saved resources`
      : `${resource.title} added to saved resources`
  );
}

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <header className="border-b border-[#E7DDD5] bg-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-end gap-4 px-6 py-2">
         
          <button
            onClick={() =>
              setShowSavedOnly((previous) => !previous)
            }
            className="mt-3 inline-flex items-center gap-3 rounded-xl bg-[#8B6F5C] px-5 py-2 text-base font-semibold text-white shadow-md transition hover:bg-[#755B4A]"
          >
      <span className="flex items-center gap-4">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 4.75A1.75 1.75 0 0 1 7.75 3h8.5A1.75 1.75 0 0 1 18 4.75V21l-6-4-6 4z" />
  </svg>

  <span>
    {showSavedOnly ? "Show All Resources" : "Saved Resources"} ({saved.length})
  </span>
</span>
          </button>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-6 pt-2 pb-12">
        <div className="mb-10 text-center">
         
          <h2 className="text-6xl font-bold tracking-tight text-[#8B6F5C] sm:text-6xl">
  DevLink
</h2>

 <p className="mt-5 text-sm font-semibold uppercase tracking-widest text-[#8B6F5C]">
            Your Developer Toolkit
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Search, explore, and bookmark tools that make development easier.
          </p>
        </div>

        <input
          type="search"
          value={search}
          onChange={(event) => {
  const value = event.target.value;
  setSearch(value);

  const params = new URLSearchParams(window.location.search);

  if (value) {
    params.set("search", value);
  } else {
    params.delete("search");
  }

  const query = params.toString();
  router.replace(query ? `?${query}` : "/", { scroll: false });
}}
          placeholder="Search resources, tags, or descriptions..."
          aria-label="Search developer resources"
          className="mb-6 w-full rounded-xl border-2 border-[#C4A995] bg-white px-5 py-4 outline-none transition placeholder:text-slate-500 focus:border-[#8B6F5C] focus:ring-2 focus:ring-[#8B6F5C]/20"
        />

        <div className="mb-6 flex flex-wrap gap-3">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => {
  setCategory(item);

  const params = new URLSearchParams(window.location.search);

  if (item === "All") {
    params.delete("category");
  } else {
    params.set("category", item);
  }

  const query = params.toString();
  router.replace(query ? `?${query}` : "/", { scroll: false });
}}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                category === item
                  ? "bg-[#8B6F5C] text-white"
                  : "border border-[#E7DDD5] bg-white text-slate-700 hover:border-[#8B6F5C] hover:bg-[#F5F0EB]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <p className="mb-5 text-sm text-slate-600">
          Showing {filteredResources.length} resources
        </p>

        {filteredResources.length === 0 ? (
          <div className="rounded-2xl border border-[#E7DDD5] bg-white px-6 py-16 text-center">
            <h3 className="text-xl font-semibold">
              No resources found
            </h3>
            <p className="mt-2 text-slate-600">
              Try another search or choose a different category.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredResources.map((resource) => (

              <ResourceCard
  key={resource.id}
  resource={resource}
  isSaved={saved.includes(resource.id)}
  onToggleBookmark={toggleBookmark}
  onQuickView={setSelectedResource}
/>

            ))}
          </div>
        )}
      </section>

     {selectedResource && (
  <QuickViewModal
    resource={selectedResource}
    onClose={() => setSelectedResource(null)}
  />
)}

{toast && (
  <div
    role="status"
    className="fixed bottom-5 right-5 z-100 flex items-center gap-3 rounded-xl border border-[#C4A995] bg-white px-5 py-4 text-sm font-medium text-[#6F5140] shadow-lg"
  >
    <span className="text-lg text-green-700">✓</span>
    <span>{toast}</span>
    <button
      onClick={() => setToast("")}
      aria-label="Dismiss notification"
      className="ml-2 text-slate-500 hover:text-slate-900"
    >
      ×
    </button>
  </div>
)}

    </main>
  );
}