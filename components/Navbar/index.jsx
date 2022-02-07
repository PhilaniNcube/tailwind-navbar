import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [show, setShow] = useState(false)

  return (
    <nav className="bg-gray-200">
      {/*Desktop Nav */}
      <div className="mx-auto max-w-6xl px-8 lg:px-0">
        <div className="flex justify-between">
          <div className="flex space-x-6">
            <div>
              <Link href="/">
                <a className="flex cursor-pointer items-center space-x-2 py-4 px-3 text-gray-700 hover:text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                  <span className="font-bold">Navbar</span>
                </a>
              </Link>
            </div>
            <div className="hidden items-center space-x-2 md:flex">
              <Link href="/">
                <a className="py-4 px-3 text-gray-700 hover:text-gray-900">
                  Home
                </a>
              </Link>
              <Link href="/contact">
                <a className="py-4 px-3 text-gray-700 hover:text-gray-900">
                  Contact
                </a>
              </Link>
            </div>
          </div>

          {/*Menu Button Goes Here */}
          <button
            onClick={() => setShow(!show)}
            className="flex items-center md:hidden"
          >
            {!show ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>

          {/**USER NAVIGATION STARTS**/}
          <div className="hidden items-center space-x-2 md:flex">
            <Link href="#">
              <a className="rounded bg-sky-600 py-2 px-3 text-white shadow hover:bg-sky-800">
                Register
              </a>
            </Link>
            <Link href="#">
              <a className="py-4 px-3">Sign In</a>
            </Link>
          </div>
        </div>
      </div>
      {/**USER NAVIGATION ENDS**/}

      {/* Mobile Menu */}
      <div>
        {/*MOBILE USER MENU STARTS */}

        {show && (
          <div className="absolute top-16 left-4 flex w-1/2 min-w-[150px] max-w-[300px] flex-col space-y-2 rounded-sm bg-gray-300 px-4 py-4 shadow-lg md:hidden">
            <Link href="#">
              <a className="block rounded-lg py-2 px-4 text-sm hover:bg-gray-400">
                Home
              </a>
            </Link>
            <Link href="#">
              <a className="block rounded-lg py-2 px-4 text-sm hover:bg-gray-400">
                Contact
              </a>
            </Link>
            <Link href="#">
              <a className="block rounded-lg py-2 px-4 text-sm hover:bg-gray-400">
                Sign In
              </a>
            </Link>
            <Link href="#">
              <a className="block rounded-lg bg-sky-600 py-2 px-4 text-sm text-white hover:bg-gray-400">
                Register
              </a>
            </Link>
          </div>
        )}

        {/*MOBILE USER MENU ENDS */}
      </div>
    </nav>
  )
}

export default Navbar
