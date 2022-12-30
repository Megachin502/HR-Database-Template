import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark mb-5">
      <div className="container justify-content-center">
        <div id="navbarNav">
          <ul className="navbar-nav text-center fw-bold">
            <li className="nav-item mx-2 px-2 mb-1">
              <Link href="/" className="nav-link">
                Submission Form
              </Link>
            </li>
            <li className="nav-item mx-2 px-2 mb-1">
              <Link href="/lookup" className="nav-link">
                Submission Lookup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
