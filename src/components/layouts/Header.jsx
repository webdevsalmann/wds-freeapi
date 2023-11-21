import { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { Ilogo } from '../svgs/logo';
import { navLinks } from '../../data/const';


export default function Header() {
    const location = useLocation();
    const path = location.pathname;
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    return (
        <header className='w-full set-bg'>
            <nav className="py-2 px-[5%] grid grid-cols-2 justify-center items-center">

                <Link to="/" className="icon-box w-12 h-12 clr-p"><Ilogo /></Link>

                <div className="icon-box w-8 md:hidden justify-self-end"
                    onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
                    {isNavbarOpen ? <RxCross2 /> : <RxHamburgerMenu />}
                </div>

                <ul className={`link-box relative py-4 flex-center items-start flex-col gap-4 justify-self-start  md:justify-self-end md:items-center md:flex-row md:flex ${isNavbarOpen ? 'flex' : 'hidden'}`}>
                    {navLinks.map(item => {
                        return (
                            <Link key={item.label} to={item.href} className={`btn-ghost-link text-sm ${path === item.href && "bg-slate-800"}`}>{item.label}</Link>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}
