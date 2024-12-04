"use client"
import { faAngleRight, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function Sidebar({ stage, setStage }: {stage?: boolean, setStage?: React.Dispatch<React.SetStateAction<boolean>>}) {
  const pathname = usePathname();
  const [sidebarState, setSidebarState] = useState({config: false, plugins: false, extras: false});

  return (
    <aside className={"transition-transform lg:translate-x-0 index-40 bottom-0 top-0 fixed lg:top-[65px] lg:left-0 lg:h-[90vh] w-full max-w-[300px]  gap-1  font-medium text-zinc-500 border-r-2 z-40 lg:z-0 lg:flex lg:flex-col lg:sticky bg-white" + (stage ? " translate-x-0" : " -translate-x-full")}>
      <div className="flex justify-between items-center gap-4 py-[12px] px-3 border-b-[2px] lg:hidden h-[65.6px]">
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faBars} className="block lg:hidden"/>
          <Image 
            src={"https://www.lazyvim.org/img/icon.svg"}
            width={30}
            height={30}
            alt="Lazy logo"/>
          <p className="font-bold">LazyVim</p>
        </div>
        <FontAwesomeIcon icon={faXmark} className="text-2xl" onClick={() => {
          setStage(!stage);
        }}/>
      </div>
      <div className="p-3 flex flex-col gap-2 overflow-y-auto h-[calc(90vh-65px)]">
        <div className={"hover:bg-zinc-100 px-2 py-1 cursor-pointer rounded " + (pathname === "/" ? "bg-zinc-100 text-blue-500" : "")}>
          <p>🚀 Getting Started</p>
        </div>     
        <div className="hover:bg-zinc-100 px-2 py-1 cursor-pointer rounded">
          <p>🛠️ Installation</p>
        </div>     
        <div className="hover:bg-zinc-100 px-2 py-1 cursor-pointer rounded">
          <p>📰 What{"'"}s new?</p>
        </div>     
        <div className="hover:bg-zinc-100 px-2 py-1 cursor-pointer rounded">
          <p>⌨️ Keymaps</p>
        </div>     
        <div className="hover:bg-zinc-100 px-2 py-1 cursor-pointer rounded flex justify-between items-center relative">
          <p>⚙️ Configuration</p>
          <button className="hover:bg-zinc-200 px-4 absolute right-0 h-full rounded" onClick={() => {
            setSidebarState({config: !sidebarState.config, plugins: sidebarState.plugins, extras: sidebarState.extras});
          }}>
            <FontAwesomeIcon icon={faAngleRight} className={"transition-all w-3" + (sidebarState.config ? " rotate-90" : "")}/>
          </button>
        </div>     
        <ul className={"transition-all duration-300 grid pl-4 " + (sidebarState.config  ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
          <div className="overflow-hidden transition-all">
            <li className="hover:bg-zinc-100 rounded py-1 px-4 cursor-pointer">lazy.nvim</li>
            <li className="hover:bg-zinc-100 rounded py-1 px-4 cursor-pointer">General Setting</li>
            <li className="hover:bg-zinc-100 rounded py-1 px-4 cursor-pointer">Plugins</li>
            <li className="hover:bg-zinc-100 rounded py-1 px-4 cursor-pointer">Keymaps</li>
            <li className="hover:bg-zinc-100 rounded py-1 px-4 cursor-pointer">Recipes</li>
            <li className="hover:bg-zinc-100 rounded py-1 px-4 cursor-pointer">Tips</li>
          </div>
        </ul>
        <div className="hover:bg-zinc-100 px-2 py-1 cursor-pointer rounded relative flex items-center">
          <p>📦 Plugins</p>
          <button className="hover:bg-zinc-200 px-4 absolute right-0 h-full rounded" onClick={() => {
            setSidebarState({config: sidebarState.config, plugins: !sidebarState.plugins, extras: sidebarState.extras});
          }}>
            <FontAwesomeIcon icon={faAngleRight} className={"transition-all w-3" + (sidebarState.plugins ? " rotate-90" : "")}/>
          </button>
        </div>     
        <ul className={"transition-all duration-300 grid pl-4 " + (sidebarState.plugins ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
          <div className="overflow-hidden transition-all">
            <li className="hover:bg-zinc-100 rounded py-1 px-4 cursor-pointer">Coding</li>
            <li className="hover:bg-zinc-100 rounded py-1 px-4 cursor-pointer">Colorscheme</li>
            <li className="hover:bg-zinc-100 rounded py-1 px-4 cursor-pointer">Editor</li>
            <li className="hover:bg-zinc-100 rounded py-1 px-4 cursor-pointer">Formatting</li>
            <li className="hover:bg-zinc-100 rounded py-1 px-4 cursor-pointer">Linting</li>
            <li className="hover:bg-zinc-100 rounded py-1 px-4 cursor-pointer">LSP</li>
            <li className="hover:bg-zinc-100 rounded py-1 px-4 cursor-pointer">TreeSitter</li>
            <li className="hover:bg-zinc-100 rounded py-1 px-4 cursor-pointer">UI</li>
            <li className="hover:bg-zinc-100 rounded py-1 px-4 cursor-pointer">Util</li>
          </div>
        </ul>
        <div className="hover:bg-zinc-100 px-2 py-1 cursor-pointer rounded relative flex items-center">
          <p>⭐ Extras</p>
          <button className="hover:bg-zinc-200 px-4 absolute right-0 h-full rounded" onClick={() => {
            setSidebarState({config: sidebarState.config, plugins: sidebarState.plugins, extras: !sidebarState.extras});
          }}>
            <FontAwesomeIcon icon={faAngleRight} className={"transition-all w-3" + (sidebarState.extras ? " rotate-90" : "")}/>
          </button>
        </div>     
        <ul className={"transition-all duration-300 grid pl-4 " + (sidebarState.extras ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
          <div className="overflow-hidden transition-all">
            <li className="hover:bg-zinc-100 rounded py-1 px-4 cursor-pointer">ai</li>
            <li className="hover:bg-zinc-100 rounded py-1 px-4 cursor-pointer">coding</li>
            <li className="hover:bg-zinc-100 rounded py-1 px-4 cursor-pointer">dap</li>
            <li className="hover:bg-zinc-100 rounded py-1 px-4 cursor-pointer">editor</li>
            <li className="hover:bg-zinc-100 rounded py-1 px-4 cursor-pointer">formatting</li>
            <li className="hover:bg-zinc-100 rounded py-1 px-4 cursor-pointer">lang</li>
            <li className="hover:bg-zinc-100 rounded py-1 px-4 cursor-pointer">linting</li>
            <li className="hover:bg-zinc-100 rounded py-1 px-4 cursor-pointer">Isp</li>
            <li className="hover:bg-zinc-100 rounded py-1 px-4 cursor-pointer">test</li>
            <li className="hover:bg-zinc-100 rounded py-1 px-4 cursor-pointer">ui</li>
            <li className="hover:bg-zinc-100 rounded py-1 px-4 cursor-pointer">util</li>
            <li className="hover:bg-zinc-100 rounded py-1 px-4 cursor-pointer">VS Code</li>
          </div>
        </ul>
      </div>
    </aside>
  );
}
