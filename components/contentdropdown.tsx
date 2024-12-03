"use client"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

export default function ContentDropDown({ target } : {target: string}) {
  const [toggleClick, setToggleClick] = useState(false);
  return (
    <div className="lg:hidden block">
      <button className="w-full px-5 flex justify-between bg-zinc-100 py-2 rounded mt-[16px] items-center border-b-[2px]" onClick={() => {
          setToggleClick(!toggleClick);
        }}>
        <p>On this page</p>
        <FontAwesomeIcon icon={faAngleRight} className={"transition-all w-3" + (toggleClick ? " rotate-90" : "")} />
      </button>
      <ul className={"transition-all grid  overflow-hidden bg-zinc-100 rounded-br rounded-bl " + (toggleClick ? " grid-rows-[1fr]" : " grid-rows-[0fr]")}>
        <div className={"flex flex-col   rounded-bl rounded-br overflow-hidden"}>
            <Link href="#feature" className="m-2"> ✨ Features</Link>
            <Link href="#require" className="m-2"> ⚡️ Requirements </Link>
            <Link href="#learn" className="m-2"> 🎓 Learn</Link>
        </div>
      </ul>
    </div>
  );
}
