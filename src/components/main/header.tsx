import Image from "next/image";
import { BagIcon, BellIcon } from "@/assets/icons";
import logo from "../../../public/logo/niloorayehe.png";
import { SearchBar } from "@/components/main/search-bar";

export function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div
        aria-hidden="true"
        className="absolute inset-0 border-white border-b bg-white/50 backdrop-blur-md"
      />

      <div className="relative">
        <div dir="ltr" className="flex items-center justify-between px-4 py-3">
          <button
            type="button"
            aria-label="اعلان‌ها"
            className="relative text-primary"
          >
            <BellIcon className="h-6 w-6" />
          </button>

          <Image
            src={logo}
            alt="نیلو رایحه ایرانیان"
            priority
            className="h-11 w-auto"
          />

          <button type="button" aria-label="سبد خرید" className="text-primary">
            <BagIcon className="h-6 w-6" />
          </button>
        </div>

        <SearchBar />
      </div>
    </header>
  );
}
