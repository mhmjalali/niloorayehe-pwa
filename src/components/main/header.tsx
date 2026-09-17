import Image from "next/image";
import { BagIcon, BellIcon } from "@/assets/icons";
import logo from "../../../public/logo/niloorayehe.png";
import { SearchBar } from "@/components/main/search-bar";

export function Header() {
  return (
    <>
      <div
        dir="ltr"
        className="flex items-center justify-between bg-white/50 px-4 py-3 backdrop-blur-md"
      >
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

      <div className="sticky top-0 z-50 border-white border-b bg-white/50 backdrop-blur-md">
        <SearchBar />
      </div>
    </>
  );
}
