import Image from "next/image";
import VideoIntro from "./VideoIntro";
import { ShineBorder } from "@/components/ui/shine-border";

export default function Banner(): React.JSX.Element {
  return (
    <section id="home" className="relative overflow-hidden bg-[#fffaf7] px-4 pb-32 pt-24 sm:px-6 sm:pt-28 lg:px-10 lg:pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <h1 className="relative top-0 max-w-4xl text-4xl font-bold leading-[1.02] tracking-tight text-[#432d3b] sm:-top-3 sm:text-7xl sm:leading-[.98] lg:text-[5.5rem]">
            Building clarity across <span className="text-[#b76186]">people, projects &amp; change.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#76596a] sm:mt-8 sm:text-xl sm:leading-8">
            <strong className="font-[var(--font-great-vibes)] text-[#b76186]">𝐻𝒾, 𝐼’𝓂 𝑅𝒶𝓈𝒽𝒾 💗</strong> I like people, projects, good ideas, and very good food. Professionally, I&apos;ve worked across change management, transformation, customer experience, quality, business analysis, and strategy. <strong className="font-semibold">What I enjoy most is working with different people, bringing structure to projects, and helping ideas move from discussion to execution.</strong>
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#experience" className="rounded-full bg-[#b76186] px-6 py-3 text-base font-semibold !text-[#432d3b] shadow-lg shadow-[#b76186]/20 transition-transform hover:-translate-y-1">Explore my experience</a>
            <a href="/Rashi_Rahul_Sawlikar_Resume.pdf" download="Rashi_Rahul_Sawlikar_CV.pdf" className="rounded-full bg-[#432d3b] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-[#432d3b]/20 transition-transform hover:-translate-y-1" style={{ color: "#fffaf7" }}>Download CV ↓</a>
          </div>
          <div className="contact-card relative mt-14 overflow-hidden rounded-3xl bg-[#fffaf7] px-6 pb-6 pt-7 text-base text-[#76596a] shadow-[0_18px_42px_rgba(183,97,134,0.2)]">
            <div className="relative z-10 grid gap-4 sm:grid-cols-2">
              <a href="mailto:rashirahulsawlikar@gmail.com" className="transition-colors hover:text-[#b76186]"><span className="mr-2 text-[#b76186]" aria-hidden="true">@</span>rashirahulsawlikar@gmail.com</a>
              <a href="tel:+4915211069292" className="transition-colors hover:text-[#b76186]"><span className="mr-2 text-[#b76186]" aria-hidden="true">☎</span>(+49) 15211069292</a>
              <a href="https://www.linkedin.com/in/rashi-rahul-sawlikar-b6a330152" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#b76186]"><span className="mr-2 inline-flex h-4 w-4 items-center justify-center rounded-sm bg-[#b76186] text-[10px] font-bold text-white" aria-hidden="true">in</span>LinkedIn</a>
            </div>
            <ShineBorder shineColor={["#e7b7c8", "#b76186", "#c9829e"]} duration={14} borderWidth={1} />
          </div>
        </div>
        <div className="relative isolate mx-auto w-96 max-w-full">
          <div className="pointer-events-none absolute -inset-4 z-0 rounded-[2rem] bg-[#e7b7c8]/35 blur-2xl" />
          <div className="relative z-10 overflow-hidden rounded-[2rem] border border-[#e2c3ce] bg-white p-3 shadow-2xl shadow-[#b76186]/15">
            <Image src="/profile.JPG" alt="Portrait of Rashi Rahul Sawlikar" width={720} height={900} priority className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-[50%_28%]" />
            <div className="absolute bottom-7 left-7 max-w-[230px] rounded-2xl border border-white/50 bg-[#fffaf7]/90 px-4 py-3 text-left shadow-lg backdrop-blur-md">
              <p className="text-xs uppercase tracking-[.18em] text-[#b76186]">Life motto</p>
              <p className="mt-1 font-serif text-sm italic text-[#432d3b]">You can return to a place, but never to a moment.</p>
            </div>
          </div>
          <div className="relative z-10 mt-6 overflow-hidden rounded-2xl border border-[#e2c3ce] bg-[#f5e8ed] shadow-xl shadow-[#b76186]/10">
            <VideoIntro />
            <p className="px-4 py-3 text-xs uppercase tracking-[.18em] text-[#76596a]">Video introduction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
