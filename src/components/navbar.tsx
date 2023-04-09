import Link from 'next/link'
import { GiAutoRepair } from 'react-icons/gi'


export default function Navbar() {
  return (
    <div className="flex bg-primary justify-center">
      <div className='navbar max-w-screen-xl'>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a className='font-medium tracking-wider'>Home</a></li>
              <li><a className='font-medium tracking-wider'>Workshops</a></li>
              <li><a className='font-medium tracking-wider'>About</a></li>
              <li><a className='font-medium tracking-wider'>Team</a></li>
              <li><a className='font-medium tracking-wider'>Contact</a></li>

            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-4xl flex justify-center items-center">
            <GiAutoRepair />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link href={'/'} className='font-medium tracking-wider'>Home</Link></li>
            <li><a className='font-medium tracking-wider'>Workshops</a></li>
            <li><a className='font-medium tracking-wider'>About</a></li>
            <li><a className='font-medium tracking-wider'>Team</a></li>
            <li><a className='font-medium tracking-wider'>Contact</a></li>

          </ul>
        </div>
        <div className="navbar-end">
          <Link href="/sign" className="btn btn-secondary">Login</Link>
        </div>
      </div>
    </div>
  )
}
