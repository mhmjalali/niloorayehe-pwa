import { FilterIcon, SearchIcon } from "@/assets/icons";

export function SearchBar() {
  return (
    <div dir="ltr" className="flex items-center gap-3 px-4 pb-4 pt-2">
      <button
        type="button"
        aria-label="فیلترها"
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white bg-white/50 text-secondary backdrop-blur-md"
      >
        <FilterIcon className="h-5 w-5" />
      </button>

      <div className="relative flex-1">
        <SearchIcon className="-translate-y-1/2 absolute top-1/2 left-4 h-5 w-5 text-muted" />
        <input
          type="search"
          dir="rtl"
          placeholder="جستجو در همه کالا ها"
          className="h-12 w-full rounded-full border border-white bg-white/50 pr-4 pl-11 text-sm text-text placeholder:text-muted backdrop-blur-md"
        />
      </div>
    </div>
  );
}
