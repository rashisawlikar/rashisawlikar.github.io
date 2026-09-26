import Link from "next/link";

export default function Header(): React.JSX.Element {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#ead9df] bg-[#fffaf7]/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-10">
        <Link href="#home" className="whitespace-nowrap text-lg font-bold tracking-tight text-[#b76186] transition-colors hover:text-[#8f4d6d] sm:text-xl lg:text-3xl">
          Rashi <span>Rahul Sawlikar</span>
        </Link>
        <div className="flex items-center gap-2 text-xs text-[#76596a] sm:gap-5 sm:text-sm lg:gap-8">
          <Link href="#experience" className="hidden transition-colors hover:text-[#b76186] md:inline">Experience</Link>
          <Link href="#about" className="hidden transition-colors hover:text-[#b76186] md:inline">About</Link>
          <Link href="#projects" className="hidden transition-colors hover:text-[#b76186] md:inline">Projects</Link>
          <a href="https://presentingindianfoodingermany.wordpress.com/author/rashisawlikar/" target="_blank" rel="noreferrer" className="rounded-full bg-[#b76186] px-3 py-2 text-sm font-semibold !text-[#432d3b] shadow-lg shadow-[#b76186]/20 transition-transform hover:-translate-y-1 sm:px-6 sm:py-3 sm:text-base">
            Blog ↗
          </a>
        </div>
      </nav>
    </header>
  );
}

