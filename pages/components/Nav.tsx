"use client";

import Link from "next/link";
import {
  ArrowLeft,
  BarChart3,
  Edit3,
  Globe,
  Layout,
  LayoutDashboard,
  Megaphone,
  Menu,
  Newspaper,
  Settings,
  FileCode,
  Github,
} from "lucide-react";
import {
  useParams,
  usePathname,
  useSelectedLayoutSegments,
} from "next/navigation";
import { ReactNode, useEffect, useMemo, useState } from "react";
import Image from "next/image";

// const externalLinks = [
//   {
//     name: "Read announcement",
//     href: "https://vercel.com/blog/platforms-starter-kit",
//     icon: <Megaphone width={18} />,
//   },
//   {
//     name: "Star on GitHub",
//     href: "https://github.com/vercel/platforms",
//     icon: <Github width={18} />,
//   },
//   {
//     name: "Read the guide",
//     href: "https://vercel.com/guides/nextjs-multi-tenant-application",
//     icon: <FileCode width={18} />,
//   },
//   {
//     name: "View demo site",
//     href: "https://demo.vercel.pub",
//     icon: <Layout width={18} />,
//   },
//   {
//     name: "Deploy your own",
//     href: "https://vercel.com/templates/next.js/platforms-starter-kit",
//     icon: (
//       <svg
//         width={18}
//         viewBox="0 0 76 76"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         className="py-1 text-black dark:text-white"
//       >
//         <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="currentColor" />
//       </svg>
//     ),
//   },
// ];

export default function Nav() {
  const [siteId, setSiteId] = useState<string | null>();

  const tabs =  [
    {
      name: "Posts",
      href: `#`,
      icon: <Newspaper width={18} />,
    },
    {
      name: "Analytics",
      href: `#`,
      icon: <BarChart3 width={18} />,
    },
    {
      name: "Settings",
      href: `#`,
      icon: <Settings width={18} />,
    },
  ];

  const [showSidebar, setShowSidebar] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    // hide sidebar on path change
    setShowSidebar(false);
  }, [pathname]);

  return (
    <>
      <div
        className={`transform ${
          showSidebar ? "w-full translate-x-0" : "-translate-x-full"
        } fixed z-10 flex h-full flex-col justify-between border-r border-stone-200 bg-stone-100 p-4 transition-all dark:border-stone-700 dark:bg-stone-900 sm:w-60 sm:translate-x-0`}
      >
        <div className="grid gap-2">
          <div className="flex items-center space-x-2 rounded-lg px-2 py-1.5">

            <Link
              href="/"
              className="rounded-lg p-2 hover:bg-stone-200 flex gap-2 items-center dark:hover:bg-stone-700"
            >
              <Image
                src="/assistme.svg"
                width={36}
                height={36}
                alt="Logo"
                className="dark:scale-110 dark:rounded-full dark:border dark:border-stone-400"
              />

              <h2 className="text-sm font-semibold">AssistMe</h2>
            </Link>
          </div>
          <div className="grid gap-1">
            {tabs.map(({ name, href, icon }) => (
              <Link
                key={name}
                href={href}
                className={`flex items-center space-x-3 rounded-lg px-2 py-1.5 transition-all duration-150 ease-in-out hover:bg-stone-200 active:bg-stone-300 dark:text-white dark:hover:bg-stone-700 dark:active:bg-stone-800`}
              >
                {icon}
                <span className="text-sm font-medium">{name}</span>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="grid gap-1">
            {/* {externalLinks.map(({ name, href, icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg px-2 py-1.5 transition-all duration-150 ease-in-out hover:bg-stone-200 active:bg-stone-300 dark:text-white dark:hover:bg-stone-700 dark:active:bg-stone-800"
              >
                <div className="flex items-center space-x-3">
                  {icon}
                  <span className="text-sm font-medium">{name}</span>
                </div>
                <p>↗</p>
              </a>
            ))} */}
          </div>
          <div className="my-2 border-t border-stone-200 dark:border-stone-700" />
        </div>
      </div>
    </>
  );
}