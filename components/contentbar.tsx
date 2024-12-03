import Link from "next/link";

export default function Contentbar({ target }: {target: string}) {
  return (
    <aside className="hidden px-[16px] w-full max-w-[298px] text-[13px] shrink-[3] lg:flex lg:flex-col">
      <ul className="border-l-[2px] border-zinc-300 pl-3 flex flex-col gap-3 py-3 sticky top-[85px] ">
        <Link href="#feature"  className={"cursor-pointer " + (target === "feature" ? "text-blue-400" : "")}>✨ Features</Link>
        <Link href="#require" className={"cursor-pointer " + (target === "require" ? "text-blue-400" : "")}>⚡️ Requirements </Link>
        <Link href="#learn" className={"cursor-pointer " + (target === "learn" ? "text-blue-400" : "")}>🎓 Learn</Link>
      </ul> 
    </aside>
  );
}
