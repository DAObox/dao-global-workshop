import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  DocumentDuplicateIcon,
  HomeIcon,
  XMarkIcon,
  UserGroupIcon,
  ClipboardDocumentCheckIcon,
  WalletIcon,
  CogIcon
} from '@heroicons/react/24/outline'
import Logo from '../components/Logo'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import Image from 'next/legacy/image'
import Main from '../components/Main'
import Head from 'next/head'
import Home from '../components/Home'
import Members from '../components/Members'
import Finances from '../components/Finance'
import Documents from '../components/Documents'
import Settings from '../components/Settings'
import Link from 'next/link'

const navigation = [
  { name: 'Home', href: '?', icon: HomeIcon, current: false },
  { name: 'Members', href: '?segment=members', icon: UserGroupIcon, current: false },
  { name: 'Proposals', href: '?segment=proposals', icon: ClipboardDocumentCheckIcon, current: true },
  { name: 'Finances', href: '?segment=finance', icon: WalletIcon, current: false },
  { name: 'Documents', href: '?segment=documents', icon: DocumentDuplicateIcon, current: false },
  { name: 'Settings', href: '?segment=settings', icon: CogIcon, current: false },
]
const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}


let searchParams: any;
if (typeof document != "undefined") {
    searchParams = new URLSearchParams(window.document.location.search)
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <Head>
        <title>The DAO Box Proposals</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex flex-1 w-full max-w-xs mr-16">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 flex justify-center w-16 pt-5 left-full">
                      <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="w-6 h-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex flex-col px-6 pb-2 overflow-y-auto bg-white grow gap-y-5">
                    <div className="flex items-center h-16 shrink-0">
                      <img
                        className="w-auto h-8"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                      />
                    </div>
                    <nav className="flex flex-col flex-1">
                      <ul role="list" className="flex flex-col flex-1 gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <Link href={item.href} legacyBehavior={true}>
                                  <a
                                    className={classNames(
                                      item.current
                                        ? 'bg-black text-white'
                                        : 'text-gray-700 hover:text-white hover:bg-black',
                                      'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                    )}
                                  >
                                    <item.icon
                                      className={classNames(
                                        item.current ? 'text-white' : 'text-gray-400 group-hover:text-white',
                                        'h-6 w-6 shrink-0'
                                      )}
                                      aria-hidden="true"
                                    />
                                    {item.name}
                                  </a>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col px-6 overflow-y-auto border-r border-gray-200 grow gap-y-5 bg-ash/40">
            <div className="flex items-center h-16 shrink-0">
              <Logo />
            </div>
            <nav className="flex flex-col flex-1">
              <ul role="list" className="flex flex-col flex-1 gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <Link href={item.href} legacyBehavior={true}>
                          <a
                            className={classNames(
                              item.current
                                ? 'bg-black text-white'
                                : 'text-gray-700 hover:text-white hover:bg-black',
                              'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                            )}
                          >
                            <item.icon
                              className={classNames(
                                item.current ? 'text-white' : 'text-gray-400 group-hover:text-white',
                                'h-6 w-6 shrink-0'
                              )}
                              aria-hidden="true"
                            />
                            {item.name}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center px-4 py-4 bg-white shadow-sm gap-x-6 sm:px-6 lg:hidden">
          <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="w-6 h-6" aria-hidden="true" />
          </button>
          <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">Dashboard</div>
          <a href="#">
            <span className="sr-only">Your profile</span>
            <img
              className="w-8 h-8 rounded-full bg-gray-50"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </a>
        </div>

        {/** Middle segment with list of proposals */}
        {
          searchParams?.get("segment") == "" ? <Home /> : searchParams?.get("segment") == "members" ? <Members /> : searchParams?.get("segment") == "proposals" ? <Main />
          : searchParams?.get("segment") == "finances" ? <Finances /> : searchParams?.get("segment") == "documents" ? <Documents /> 
          : searchParams?.get("segment") == "settings" && <Settings />
        }
        <Main />

        <aside className="fixed inset-y-0 right-0 hidden w-[320px] overflow-y-auto border-l border-gray-200 xl:block">
          {/* Second Static component for desktop */}
          <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-[320px] lg:flex-col">
            <div className="flex flex-col px-6 overflow-y-auto bg-white border-r border-gray-200 grow gap-y-5">
              <div className="flex items-center h-16 shrink-0">
                <ConnectButton />
              </div>
              <div className="w-full flex flex-col items-center space-y-2.5">
                <div>
                  <div className='relative w-[84px] h-[84px]'>
                    <Image src={"/tbx.png"} layout='fill' />
                  </div>
                </div>
                <div className='flex flex-col items-center space-y-1'>
                  <h2 className='font-bold text-black text-[24px]'>XXXXDAO</h2>
                  <h6 className='text-[18px] font-semibold'>100K Members</h6>
                  <button className="py-1.5 px-3 border-2 border-black rounded-md">Join Dao</button>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}
