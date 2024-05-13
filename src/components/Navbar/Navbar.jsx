'use client'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Home } from 'lucide-react'
import { Users } from 'lucide-react'
import { NotebookPen } from 'lucide-react'
import { Contact } from 'lucide-react'
import { BadgeCheck } from 'lucide-react'
import { ChevronDown } from 'lucide-react'
import { ChevronUp } from 'lucide-react'
import Image from 'next/image'

export default function NavBar() {
  const [open, setOpen] = useState('')
  const [ourTeam, setOurTeam] = useState('')
  const [ourPub, setOurPub] = useState('')

  const sidebarRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])

  const navItems = [
    {
      name: 'Home',
      link: '/',
      icon: <Home />,
    },
    {
      name: 'Our Team',
      icon: <Users />,
      open: ourTeam,
      setOpen: setOurTeam,
      subItems: [
        {
          name: 'Executive Committee',
          link: '/executive-committee',
        },
        {
          name: 'Advisory Board',
          link: '/advisory-board',
        },
        {
          name: 'Community Coordinators',
          link: '/community-coordinators',
        },
        // {
        //   name: 'Documentation Team',
        //   link: '/documentation-teams',
        // },
      ],
    },
    {
      name: 'Publications',
      open: ourPub,
      setOpen: setOurPub,
      icon: <NotebookPen />,
      subItems: [
        {
          name: 'IT Express',
          link: '/it-express',
        },
        // {
        //   name: 'Student Blogs',
        //   link: '/blogs',
        // },
      ],
    },
    // {
    //   name: 'News and Notices',
    //   icon: <Newspaper />,
    //   link: '/news-and-notices',
    // },
    // {
    //   name: 'Events',
    //   icon: <CalendarSearch />,
    //   link: '/events',
    // },
    {
      name: 'Contact',
      icon: <Contact />,
      link: '/contact',
    },
    {
      name: 'Apply to be a Member',
      icon: <BadgeCheck />,
      link: 'https://forms.gle/Y5vHobrCDVx2fPMaA',
      useExternal: true,
    },
  ]

  return (
<<<<<<< HEAD:src/components/Header/Header.jsx
    <div className="flex w-full p-4 h-16 md:p-10 justify-between items-center bg-lightBlue z-50">
=======
    <div className="flex w-full p-4 h-16 md:p-10 justify-between items-center bg-baseBackground z-50">
>>>>>>> upstream/main:src/components/Navbar/Navbar.jsx
      {/* logo */}
      <div>
        <Link href="/" className="cursor-pointer">
          <Image
            src={'/kucc-logo.png'}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 object-cover"
            alt="logo"
            height={100}
            width={100}
          />
        </Link>
      </div>

      {/* mobile view */}
      <div className="flex items-center lg:hidden" ref={sidebarRef}>
        {/* hambuger menu */}
        <button
<<<<<<< HEAD:src/components/Header/Header.jsx
          className="flex z-50 justify-center relative cursor-pointer items-center p-2 flex-col space-y-1 aspect-square hover:bg-lightGray rounded transition-all"
          onClick={() => setOpen(!open)}
        >
          <div
            className={`w-6 h-[2px] text-darkBlue rounded block transition-all ease-out duration-300 ${
=======
          className="flex z-50 justify-center relative cursor-pointer items-center p-2 flex-col space-y-1 aspect-square hover:bg-hoverBgColor rounded transition-all"
          onClick={() => setOpen(!open)}
        >
          <div
            className={`w-6 h-[2px] bg-titleColor rounded block transition-all ease-out duration-300 ${
>>>>>>> upstream/main:src/components/Navbar/Navbar.jsx
              open ? 'rotate-45 translate-y-0.5' : '-translate-y-0.5'
            }`}
          ></div>
          <div
<<<<<<< HEAD:src/components/Header/Header.jsx
            className={`w-6 h-[2px] text-darkBlue rounded block transition-all ease-out duration-300 ${
=======
            className={`w-6 h-[2px] bg-titleColor rounded block transition-all ease-out duration-300 ${
>>>>>>> upstream/main:src/components/Navbar/Navbar.jsx
              open ? 'hidden' : 'flex'
            }`}
          ></div>
          <div
<<<<<<< HEAD:src/components/Header/Header.jsx
            className={`w-6 h-[2px] text-darkBlue rounded block transition-all ease-out duration-300 ${
=======
            className={`w-6 h-[2px] bg-titleColor rounded block transition-all ease-out duration-300 ${
>>>>>>> upstream/main:src/components/Navbar/Navbar.jsx
              open ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
            }`}
          ></div>
        </button>

        <div
          className={`flex space-y-8 transition origin-right z-40 h-screen bg-white fixed top-0 right-0 w-2/3 sm:w-1/3 md:w-2/4 shadow-xl ${
            open ? 'scale-x-100' : 'scale-x-0'
          }`}
        >
          <div className="flex-col mt-28 px-8 space-y-8 font-sans list-none">
            {navItems.map((item, index) => {
              return (
                <div key={index}>
                  {item.subItems ? (
                    // if item has subItems
                    <li>
<<<<<<< HEAD:src/components/Header/Header.jsx
                      <div className="text-darkBlue font-semibold transition-all cursor-pointer relative md:group border-b-2 flex gap-4 hover:text-hoverColor">
=======
                      <div className="text-titleColor font-semibold transition-all cursor-pointer relative md:group border-b-2 flex gap-4 hover:text-hoverTextColor">
>>>>>>> upstream/main:src/components/Navbar/Navbar.jsx
                        {item.icon}
                        {item.name}
                        <button
                          className="flex rounded-full"
                          onClick={() => item.setOpen(!item.open)}
                        >
                          {!item.open ? (
<<<<<<< HEAD:src/components/Header/Header.jsx
                            <ChevronDown className="bg-mediumLightBlue rounded-md" />
                          ) : (
                            <ChevronUp className="bg-mediumLightBlue rounded-md" />
=======
                            <ChevronDown className="bg-secondBackground rounded-md" />
                          ) : (
                            <ChevronUp className="bg-secondBackground rounded-md" />
>>>>>>> upstream/main:src/components/Navbar/Navbar.jsx
                          )}
                        </button>
                      </div>
                      <ul
                        className={`space-y-2 z-10 origin-top list-none transition ${
                          item.open ? 'scale-y-100 p-[20px]' : 'scale-y-0 h-0 p-0 duration-0'
                        }`}
                      >
                        {item.subItems.map((subItem, index) => {
                          return (
                            <li
                              key={index}
<<<<<<< HEAD:src/components/Header/Header.jsx
                              className="cursor-pointer border-b border-gray-500 text-base hover:text-darkSky"
=======
                              className="cursor-pointer border-b border-navSubitemBorder text-base hover:text-counterBackground"
>>>>>>> upstream/main:src/components/Navbar/Navbar.jsx
                            >
                              <Link href={subItem.link} onClick={() => setOpen(false)}>
                                {subItem.name}
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </li>
                  ) : (
<<<<<<< HEAD:src/components/Header/Header.jsx
                    <li className="text-darkBlue font-semibold transition cursor-pointer border-b-2 items-center hover:text-hoverColor">
=======
                    <li className="text-titleColor font-semibold transition cursor-pointer border-b-2 items-center hover:text-hoverTextColor">
>>>>>>> upstream/main:src/components/Navbar/Navbar.jsx
                      {/* if item has no subItems */}
                      {item.useExternal ? (
                        <a href={item.link} target="_blank" rel="noreferrer" className="flex gap-4">
                          {item.icon}
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          href={item.link}
                          className="flex gap-4"
                          onClick={() => setOpen(false)}
                        >
                          {item.icon}
                          {item.name}
                        </Link>
                      )}
                    </li>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* desktop view */}
      <div className="hidden lg:flex items-center text-sm xl:text-lg space-x-3 lg:space-x-10 list-none">
        {navItems.map((item, index) => {
          return (
            <>
              {item.subItems ? (
                <li
<<<<<<< HEAD:src/components/Header/Header.jsx
                  className="text-darkBlue font-semibold transition-all cursor-pointer relative group hover:text-hoverColor"
                  key={index}
                >
                  <div className="flex items-center gap-2">
                    {item.name} <ChevronDown className="bg-blue-100 rounded-md" />
=======
                  className="text-titleColor font-semibold transition-all cursor-pointer relative group hover:text-hoverTextColor"
                  key={index}
                >
                  <div className="flex items-center gap-2">
                    {item.name} <ChevronDown className="bg-secondBackground rounded-md" />
>>>>>>> upstream/main:src/components/Navbar/Navbar.jsx
                  </div>
                  <ul className="hidden space-y-3 w-56 absolute z-10 p-[20px] list-none bg-navSubitemsBg text-textOnDarkBg group-hover:block transform duration-700">
                    {item.subItems.map((subItem, index) => {
                      return (
                        <li
<<<<<<< HEAD:src/components/Header/Header.jsx
                          className="cursor-pointer border-b border-gray-500 text-base hover:text-darkSky"
=======
                          className="cursor-pointer border-b border-navSubitemBorder text-base hover:text-counterBackground"
>>>>>>> upstream/main:src/components/Navbar/Navbar.jsx
                          key={index}
                        >
                          <Link href={subItem.link}>{subItem.name}</Link>
                        </li>
                      )
                    })}
                  </ul>
                </li>
              ) : (
                <li
                  key={index}
<<<<<<< HEAD:src/components/Header/Header.jsx
                  className="text-darkBlue font-semibold transition cursor-pointer hover:text-hoverColor"
=======
                  className="text-titleColor font-semibold transition cursor-pointer hover:text-hoverTextColor"
>>>>>>> upstream/main:src/components/Navbar/Navbar.jsx
                >
                  {item.useExternal ? (
                    <a href={item.link} target="_blank" rel="noreferrer" className="flex gap-2">
                      {item.name}
                    </a>
                  ) : (
                    <Link href={item.link} className="flex gap-2" onClick={() => setOpen(false)}>
                      {item.name}
                    </Link>
                  )}
                </li>
              )}
            </>
          )
        })}
      </div>
    </div>
  )
}

