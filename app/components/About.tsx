const groups = [
  { title: "Project & coordination", items: ["Documentation", "Cross-functional collaboration", "Scrum & Kanban"] },
  { title: "Business & strategy", items: ["Marketing & business model canvas", "Go-to-market strategy", "Digital transformation", "Support business & data analysis"] },
  { title: "Tools & technologies", items: ["JIRA, Confluence", "Microsoft Office (Excel, PowerPoint, Word)", "DocuSign", "Google Looker Studio, Canva", "Microsoft Teams, Slack, Zoom", "CRM Tools: Salesforce, HubSpot, Zendesk"] },
];

const hobbies = ["Traveling", "Fashion", "Gardening", "Cooking", "Yoga", "DIY"];

export default function About(): React.JSX.Element {
  return (
    <section id="about" className="border-y border-[#ead9df] bg-[#f8eef1] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 border-b border-[#ead9df] pb-5">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[.25em] text-[#b76186]">03 / About</p>
          <h2 className="text-4xl font-bold text-[#432d3b] sm:text-5xl">The details behind the work</h2>
        </div>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <h3 className="text-2xl font-semibold text-[#432d3b]">Education</h3>
            <div className="mt-6 space-y-7 border-l border-[#c9829e] pl-6">
              <div><p className="text-sm text-[#b76186]">31/07/2022 - 31/07/2025</p><h4 className="mt-1 text-lg font-semibold text-[#432d3b]">CBS International Business School</h4><p className="text-sm text-[#76596a]">Master of Arts in International Business (Core) · Köln, Germany</p></div>
              <div><p className="text-sm text-[#b76186]">02/2019 - 07/2022</p><h4 className="mt-1 text-lg font-semibold text-[#432d3b]">Sardar Patel Mahavidyalaya</h4><p className="text-sm text-[#76596a]">Bachelor of Commerce in Computer Application · Chandrapur, India</p></div>
            </div>
            <div className="mt-10"><p className="text-sm uppercase tracking-[.2em] text-[#b76186]">Certification</p><p className="mt-3 font-semibold text-[#432d3b]">McKinsey Forward Program</p><p className="text-sm text-[#76596a]">McKinsey &amp; Company · 10/12/2025</p></div>
            <div className="mt-10">
              <h3 className="text-2xl font-semibold text-[#432d3b]">Languages</h3>
              <ul className="mt-4 space-y-2 text-sm text-[#76596a]">
                <li className="flex items-center justify-between gap-4"><span>English</span><span className="font-semibold text-[#b76186]">C2</span></li>
                <li className="flex items-center justify-between gap-4"><span>German</span><span className="text-right font-semibold text-[#b76186]">A2 (progressing toward B1)</span></li>
                <li className="flex items-center justify-between gap-4"><span>Marathi</span><span className="font-semibold text-[#b76186]">Native</span></li>
                <li className="flex items-center justify-between gap-4"><span>Hindi</span><span className="font-semibold text-[#b76186]">Native</span></li>
              </ul>
            </div>
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            <div><h3 className="text-2xl font-semibold text-[#432d3b]">Skills</h3><div className="mt-6 space-y-8">{groups.map((group) => <div key={group.title}><h4 className="text-sm font-semibold uppercase tracking-[.12em] text-[#8b6577]">{group.title}</h4><ul className="mt-3 space-y-2 text-[#76596a]">{group.items.map((item) => <li key={item} className="flex gap-3"><span className="text-[#b76186]">↳</span>{item}</li>)}</ul></div>)}</div></div>
            <div><h3 className="text-2xl font-semibold text-[#432d3b]">Outside work</h3><ul className="mt-6 grid grid-cols-2 gap-x-5 gap-y-4 text-[#76596a]">{hobbies.map((hobby) => <li key={hobby} className="flex items-center gap-3"><span className="text-[#b76186]">↳</span>{hobby}</li>)}</ul></div>
          </div>
        </div>
      </div>
    </section>
  );
}
