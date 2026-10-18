import Image from "next/image";
import Link from "next/link";
import { bookVisitLink } from "@/lib/site";
import { MenuDialog } from "./MenuDialog";

export function Masthead() {
  return (
    <header className="masthead">
      <div className="wrap masthead__row">
        <Link href="/" className="masthead__logo" aria-label="Mankrruuti Design Studio, home">
          <Image src="/brand/logo-horizontal.png" alt="Mankrruuti Design Studio" width={880} height={216} preload />
        </Link>
        <div className="masthead__actions">
          <a className="link masthead__book" href={bookVisitLink} target="_blank" rel="noopener">
            Book a home visit
          </a>
          <MenuDialog />
        </div>
      </div>
    </header>
  );
}
