import { Link } from "@/i18n/navigation";
import {
  AcademyIcon,
  BagFillIcon,
  HomeIcon,
  StoreIcon,
  UserIcon,
} from "@/assets/icons";

const BAR_WIDTH = 390;
const BAR_HEIGHT = 80;
const TOP_RADIUS = 28;
const NOTCH_RADIUS = 38;
const CENTER_X = BAR_WIDTH / 2;

// Rounded-top bar with a semicircular notch cut into the top-center, so the
// raised center button nests into it instead of floating on a flat edge.
const BAR_PATH = `
  M${TOP_RADIUS},0
  L${CENTER_X - NOTCH_RADIUS},0
  A${NOTCH_RADIUS},${NOTCH_RADIUS} 0 0 0 ${CENTER_X + NOTCH_RADIUS},0
  L${BAR_WIDTH - TOP_RADIUS},0
  A${TOP_RADIUS},${TOP_RADIUS} 0 0 1 ${BAR_WIDTH},${TOP_RADIUS}
  L${BAR_WIDTH},${BAR_HEIGHT}
  L0,${BAR_HEIGHT}
  L0,${TOP_RADIUS}
  A${TOP_RADIUS},${TOP_RADIUS} 0 0 1 ${TOP_RADIUS},0
  Z
`;

// DOM order is right-to-left visually under dir="rtl": first item renders
// rightmost. This matches the design (Home right ... Profile left) with no
// manual reversing.
const NAV_ITEMS = [
  { href: "/", label: "خانه", Icon: HomeIcon },
  { href: "/store", label: "فروشگاه", Icon: StoreIcon },
  { href: "/academy", label: "آکادمی", Icon: AcademyIcon },
  { href: "/profile", label: "پروفایل", Icon: UserIcon },
] as const;

export function BottomNav() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 mx-auto w-full max-w-md"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="relative" style={{ height: BAR_HEIGHT }}>
        <svg
          viewBox={`0 0 ${BAR_WIDTH} ${BAR_HEIGHT}`}
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full text-background"
          aria-hidden="true"
        >
          <path d={BAR_PATH} fill="currentColor" />
        </svg>

        <ul className="relative grid h-full grid-cols-5 items-end pb-3">
          {NAV_ITEMS.slice(0, 2).map(({ href, label, Icon }) => (
            <li key={href} className="flex justify-center">
              <Link
                href={href}
                className="flex flex-col items-center gap-1 text-text"
              >
                <Icon className="h-5 w-5" />
                <span className="text-[11px] font-medium">{label}</span>
              </Link>
            </li>
          ))}

          <li aria-hidden="true" />

          {NAV_ITEMS.slice(2).map(({ href, label, Icon }) => (
            <li key={href} className="flex justify-center">
              <Link
                href={href}
                className="flex flex-col items-center gap-1 text-text"
              >
                <Icon className="h-5 w-5" />
                <span className="text-[11px] font-medium">{label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/bag"
          aria-label="سبد خرید"
          className="-translate-x-1/2 -translate-y-1/2 absolute top-0 left-1/2 flex h-16 w-16 items-center justify-center rounded-full shadow-lg"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 30%, var(--color-secondary), var(--color-primary))",
          }}
        >
          <BagFillIcon className="h-6 w-6 text-white" />
        </Link>
      </div>
    </nav>
  );
}
