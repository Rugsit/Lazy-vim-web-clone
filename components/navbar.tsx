"use client"
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Sidebar from "./sidebar";

export default function Navbar() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const buttonSearchRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (toggleSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [toggleSidebar])

  useEffect(() => {
    if (toggleSearch) {
      searchRef.current?.focus();
    }
    const haddleClickOutside = (event: MouseEvent) => {
      if (!buttonSearchRef.current?.contains(event.target as Node)) {
        setToggleSearch(false);
      }
    }

    window.addEventListener("click", haddleClickOutside);
  }, [toggleSearch])

  return (
    <div>
      <nav className=" border-b-2 py-3 px-4 shadow-sm fixed left-0 right-0 top-0 flex justify-between z-10 bg-white">
        <div className="flex items-center gap-4">
          <FontAwesomeIcon icon={faBars} className="block lg:hidden" onClick={() => {
            setToggleSidebar(!toggleSidebar);
          }}/>
          <Image 
            src={"https://www.lazyvim.org/img/icon.svg"}
            width={30}
            height={30}
            alt="Lazy logo"/>
          <p className="font-bold">LazyVim</p>
        </div>
        <div className="flex gap-12 w-full max-w-[500px] justify-end">
          <div className="hidden gap-6 items-center lg:flex">
            <a href="https://x.com/folke" target="_blank">
              <svg width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.643 4.93695C22.808 5.30695 21.911 5.55696 20.968 5.66996C21.941 5.08775 22.669 4.17142 23.016 3.09195C22.1019 3.63494 21.1014 4.01715 20.058 4.22196C19.3564 3.47282 18.4271 2.97628 17.4143 2.80943C16.4016 2.64258 15.3621 2.81475 14.4572 3.29921C13.5524 3.78367 12.8328 4.55332 12.4102 5.48866C11.9875 6.424 11.8855 7.4727 12.12 8.47195C10.2677 8.37895 8.45564 7.8975 6.80144 7.05886C5.14723 6.22022 3.68785 5.04312 2.51801 3.60396C2.11801 4.29396 1.88801 5.09396 1.88801 5.94596C1.88757 6.71295 2.07644 7.4682 2.43789 8.14469C2.79934 8.82118 3.32217 9.39799 3.96001 9.82396C3.22029 9.80042 2.49688 9.60054 1.85001 9.24095V9.30095C1.84994 10.3767 2.22204 11.4193 2.90319 12.252C3.58434 13.0846 4.53258 13.6559 5.58701 13.869C4.9008 14.0547 4.18135 14.082 3.48301 13.949C3.78051 14.8746 4.36001 15.684 5.14038 16.2639C5.92075 16.8438 6.86293 17.1651 7.83501 17.183C6.18485 18.4784 4.1469 19.181 2.04901 19.178C1.67739 19.1781 1.30609 19.1564 0.937012 19.113C3.06649 20.4821 5.54535 21.2088 8.07701 21.206C16.647 21.206 21.332 14.108 21.332 7.95195C21.332 7.75195 21.327 7.54995 21.318 7.34995C22.2293 6.69093 23.0159 5.87485 23.641 4.93995L23.643 4.93695V4.93695Z" fill="black"></path></svg>
            </a>
            <a href="https://x.com/folke" target="_blank">
              <svg width="1.5rem" height="1.5rem" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_602_4)"><path d="M0.844 0.735023V31.266H3.041V32.001H0V0.00102344H3.041V0.736023L0.844 0.735023ZM10.235 10.412V11.959H10.276C10.6603 11.3936 11.1698 10.9244 11.765 10.588C12.344 10.265 13.016 10.104 13.765 10.104C14.484 10.104 15.145 10.245 15.74 10.521C16.339 10.802 16.787 11.297 17.099 12C17.438 11.5 17.902 11.057 18.479 10.677C19.058 10.297 19.746 10.104 20.542 10.104C21.1088 10.0983 21.6736 10.1737 22.219 10.328C22.74 10.473 23.178 10.708 23.547 11.031C23.912 11.36 24.198 11.782 24.407 12.303C24.61 12.823 24.714 13.454 24.714 14.194V21.829H21.585V15.361C21.5859 14.9991 21.5699 14.6374 21.537 14.277C21.518 13.9705 21.4366 13.6711 21.298 13.397C21.1674 13.1451 20.9639 12.9384 20.714 12.804C20.459 12.652 20.105 12.58 19.667 12.58C19.224 12.58 18.87 12.663 18.599 12.829C18.3333 12.9945 18.1133 13.2238 17.959 13.496C17.7987 13.7828 17.6942 14.0974 17.651 14.423C17.6005 14.7702 17.5728 15.1203 17.568 15.471V21.83H14.437V15.429C14.437 15.09 14.432 14.757 14.412 14.429C14.4029 14.1146 14.3375 13.8044 14.219 13.513C14.1146 13.234 13.9204 12.9976 13.667 12.841C13.412 12.674 13.031 12.586 12.531 12.586C12.38 12.586 12.183 12.617 11.943 12.685C11.703 12.752 11.464 12.877 11.24 13.06C10.9866 13.2784 10.7854 13.5507 10.651 13.857C10.49 14.2 10.412 14.653 10.412 15.216V21.836H7.281V10.415L10.235 10.412ZM31.156 31.265V0.734023H28.959V-0.000976562H32V31.999H28.959V31.264L31.156 31.265Z" fill="black"></path></g><defs><clipPath id="clip0_602_4"><rect width="32" height="32" fill="black"></rect></clipPath></defs></svg>
            </a>
            <a href="https://x.com/folke" target="_blank">
              <svg width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_602_8)"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z" fill="black"></path></g><defs><clipPath id="clip0_602_8"><rect width="24" height="24" fill="black"></rect></clipPath></defs></svg>
            </a>
            <a href="https://x.com/folke" target="_blank" >
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-comment-discussion UnderlineNav-octicon d-none d-sm-inline"><path fillRule="evenodd" d="M1.5 2.75a.25.25 0 01.25-.25h8.5a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25h-3.5a.75.75 0 00-.53.22L3.5 11.44V9.25a.75.75 0 00-.75-.75h-1a.25.25 0 01-.25-.25v-5.5zM1.75 1A1.75 1.75 0 000 2.75v5.5C0 9.216.784 10 1.75 10H2v1.543a1.457 1.457 0 002.487 1.03L7.061 10h3.189A1.75 1.75 0 0012 8.25v-5.5A1.75 1.75 0 0010.25 1h-8.5zM14.5 4.75a.25.25 0 00-.25-.25h-.5a.75.75 0 110-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0114.25 12H14v1.543a1.457 1.457 0 01-2.487 1.03L9.22 12.28a.75.75 0 111.06-1.06l2.22 2.22v-2.19a.75.75 0 01.75-.75h1a.25.25 0 00.25-.25v-5.5z"></path></svg>
            </a>
            <a href="https://x.com/folke" target="_blank">
              <svg viewBox="0 0 24 24" width="24" height="24" className="lightToggleIcon_pyhR"><path fill="currentColor" d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"></path></svg>
            </a>
          </div>
          <button ref={buttonSearchRef} className={"h-[40px] flex relative items-center w-full  md:max-w-[200px] lg:max-w-[300px] bg-zinc-100 rounded-full" + (toggleSearch ? " max-w-[200px]" : " max-w-[45px]")} onClick={() => {
            setToggleSearch(true);
          }}>
            <FontAwesomeIcon icon={faMagnifyingGlass} size="xs" className="w-5 absolute left-3"/>
            <input ref={searchRef} placeholder="Search" className={" pl-10 py-2 rounded-full bg-zinc-100 w-full md:block" + (toggleSearch ? " block" : " hidden")}/>
          </button>
        </div>
      </nav>
      <div className="lg:hidden">
        <Sidebar stage={toggleSidebar} setStage={setToggleSidebar}/>
        <div className={"transition-opacity  top-0 left-0 right-0 bottom-0 fixed bg-black z-10 " + (toggleSidebar ? " opacity-30" : " invisible opacity-0")}></div>
      </div>
    </div>

  );
}
