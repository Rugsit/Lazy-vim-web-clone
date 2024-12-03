"use client"
import Contentbar from "@/components/contentbar";
import ContentDropDown from "@/components/contentdropdown";
import Lazyvimlogo from "@/components/lazyvimlogo";
import { faAngleRight, faHouse } from "@fortawesome/free-solid-svg-icons";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons/faAnglesRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [refFeature, inViewFeature, featureEntry] = useInView({
    threshold: [0, 0.1, 0.25, 0.5, 0.75, 1]
  });
  const [refRequire, inViewRequire, requireEntry] = useInView({
    threshold: [0, 0.1, 0.25, 0.5, 0.75, 1]
  });
  const [refLearn, inViewLearn, learnEntry] = useInView({
    threshold: [0, 0.1, 0.25, 0.5, 0.75, 1]
  });
  const [prominentSection, setProminentSection] = useState<string>("");
  const allSections = [
    {title: "feature", entry: featureEntry?.intersectionRatio},
    {title: "require", entry: requireEntry?.intersectionRatio},
    {title: "learn", entry: learnEntry?.intersectionRatio},
  ]

  useEffect(() => {
    let max: number = 0;
    let targetSection = {title: "", entry:featureEntry?.intersectionRatio};
    allSections.forEach((item) => {
      if (item.entry != null && item.entry > max) {
        max = item.entry;
        targetSection = item;
      }
    })
    setProminentSection(targetSection.title);
  }, [featureEntry, requireEntry, learnEntry, inViewLearn, inViewRequire, inViewFeature]);

  return (
    <main className="mx-auto w-full max-w-[1320px] py-5 px-3 flex ">
      <article className=" w-full max-w-[958px]">
        <div className="flex gap-3 items-center">
          <div className="hover:text-blue-400 hover:bg-zinc-100 cursor-pointer py-1 px-2 rounded-full transition-all">
              <FontAwesomeIcon icon={faHouse} className="w-[15px]" />
          </div>
            <FontAwesomeIcon icon={faAngleRight} className="w-[12px] h-[12px] text-zinc-600"/>
          <button className="text-[13px] text-blue-400 bg-zinc-100 rounded-full py-1 px-3 cursor-text">
            🚀 Getting Started
          </button>
        </div>      
        <ContentDropDown target={prominentSection}/>
        <p className="text-5xl font-bold my-5">🚀 Getting Started</p>
        <Lazyvimlogo />
        <p className="mb-[20px] mt-[20px]">LazyVim is a Neovim setup powered by 💤 lazy.nvim to make it easy to customize and extend your config.</p>
        <Image 
          src={"https://user-images.githubusercontent.com/292349/213447056-92290767-ea16-430c-8727-ce994c93e9cc.png"}
          width={958}
          height={600}
          alt="Code image"
        />
        <div ref={refFeature}>
          <p className="font-bold text-3xl mt-[40px] mb-[20px] scroll-mt-[80px]" id="feature">✨ Features</p>
          <ul role="list" className="pl-5 list-inside marker:text-black list-disc mb-[20px]">
            <li className="mt-[4px]">🔥 Transform your Neovim into a full-fledged IDE</li>
            <li className="mt-[4px]">💤 Easily customize and extend your config with <a className="link">lazy.nvim</a></li>
            <li className="mt-[4px]">🚀 Blazingly fast</li>
            <li className="mt-[4px]">🧹 Sane default settings for options, autocmds, and keymaps</li>
            <li className="mt-[4px]">📦 Comes with a wealth of plugins pre-configured and ready to use</li>
          </ul>
        </div>
        <div ref={refRequire}>
          <p className="font-bold text-3xl mt-[40px] mb-[20px] scroll-mt-[80px]" id="require">⚡️ Requirements</p>
          <ul role="list" className="pl-5 list-inside marker:text-black list-disc mb-[20px]">
            <li className="mt-[4px]">Neovim >= <strong>0.9.0</strong> (needs to be built with <strong>LuaJIT</strong>)</li>
            <li className="mt-[4px]">Git >= <strong>2.19.0</strong> (for partial clones support)</li>
            <li className="mt-[4px]">a <a href="https://www.nerdfonts.com/" className="link">Nerd Font</a> (v3.0 or greater) (optional, but needed to display some icons)</li>
            <li className="mt-[4px]"><a href="https://www.nerdfonts.com/" className="link">lazygit</a> <strong>(optional)</strong></li>
            <li className="mt-[4px]">a <strong>C</strong> compiler for <code>nvim-treesitter</code>. See<a href="https://www.nerdfonts.com/" className="link"> here</a></li>
            <li className="mt-[4px]">for <a href="https://www.nerdfonts.com/" className="link"> telescope.nvim</a><strong> (optional)</strong></li>
            <ul  className="mt-[4px] pl-5 list-inside  marker:text-zinc-300  list-disc mb-[20px]">
              <li className="mt-[4px]"><strong>live grep</strong>: <a className="link">ripgrep</a></li>
              <li className="mt-[4px]"><strong>find files</strong>: <a className="link">fd</a></li>
            </ul>
            <li className="mt-[4px]">a terminal that support true color and undercurl:</li>
            <ul  className="mt-[4px] pl-5 list-inside  marker:text-zinc-300  list-disc mb-[20px]">
              <li className="mt-[4px]"><a className="link">kitty</a> <strong className="italic">(Linux & Macos)</strong></li>
              <li className="mt-[4px]"><a className="link">wezterm </a><strong className="italic">(Linux, Macos & Windows)</strong></li>
              <li className="mt-[4px]"><a className="link">alacritty </a><strong className="italic">(Linux, Macos & Windows)</strong></li>
              <li className="mt-[4px]"><a className="link">iterm2 </a><strong className="italic">(Macos)</strong></li>
            </ul>
          </ul>
        </div>
        <div ref={refLearn}>
          <p className="font-bold text-3xl mt-[40px] mb-[20px] scroll-mt-[80px]" id="learn">🎓 Learn</p>
          <p className="mb-[20px]">There's a great video created by <a className="link">@elijahmanor </a>with a walkthrough to get started.</p>
          <Link href={"https://www.youtube.com/watch?v=N93cTbtLCIM"} target="_blank">
            <Image 
              src={"https://img.youtube.com/vi/N93cTbtLCIM/hqdefault.jpg"}
              width={480}
              height={360}
              alt="Lazyvim tutorial video"
              className="mb-[20px]"
            />
          </Link>
          <p><a className="link">@dusty-phillips</a> is working on a book called <a className="link">LazyVim for Ambitious Developers</a> available for free online.</p>
        </div>
        <a className="flex text-blue-500 items-center mt-[48px] gap-2 cursor-pointer">
          <svg fill="currentColor" height="20" width="20" viewBox="0 0 40 40" className="iconEdit_Z9Sw" aria-hidden="true"><g><path d="m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"></path></g></svg>
          <p>Edit this page</p>
        </a>
        <nav className="grid grid-cols-2">
          <a className="col-start-2 p-4 border-[1px] rounded cursor-pointer hover:border-blue-500">
            <p className="text-end text-zinc-700 font-medium">Next</p>
            <div className="flex justify-end items-center gap-2">
              <p className="text-blue-500 font-bold">🛠️ Installation</p>
              <FontAwesomeIcon icon={faAnglesRight} className="w-[10px] text-blue-500"/>
            </div>
          </a>
        </nav>
      </article>
      <Contentbar target={prominentSection}/>
    </main>
  );
}
