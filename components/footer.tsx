export default function Footer() {
  return (
    <footer className=" bg-slate-700 text-white p-[32px]">
      <div className="grid grid-cols-3 mx-auto w-full max-w-[1320px] mb-[16px]">
        <div>
          <p className="font-bold mb-[16px]">Docs</p>
          <p>Getting Started</p>
        </div>
        <div>
          <p className="font-bold mb-[16px]">Community</p>
          <a className="flex items-center gap-2">
            <p>Discussions</p>
            <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" className="iconExternalLink_nPIU"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
          </a>
          <a className="flex items-center gap-2 mt-3">
            <p>Twitter</p>
            <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" className="iconExternalLink_nPIU"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
          </a>
        </div>
        <div>
          <p className="font-bold mb-[16px] ">More</p>
          <a className="flex items-center gap-2">
            <p>Github</p>
            <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" className="iconExternalLink_nPIU"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
          </a>
        </div>
      </div>
      <p className="text-center w-full">Copyright © 2024 LazyVim, Inc. Built with Docusaurus.</p>
    </footer>
  );
}
