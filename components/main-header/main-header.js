import Image from 'next/image'
import Link from 'next/link'

import logoImg from '@/assets/logo.png'
import MainHeaderBackground from './main-header-background'
import NavLink from './nav-link'
import classes from './main-header.module.css'

export default function MainHeader() {

    return <>
        <MainHeaderBackground />
        <header className={classes.header}>
            {/* Logo */}
            <Link className={classes.logo} href='/'>
                <Image src={logoImg} priority
                    alt='header-logo'
                />Foodies
            </Link>

            {/* Navbar */}
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink href='/meals'>Browse meals</NavLink>
                    </li>

                    <li>
                         <NavLink href='/community' >Community</NavLink>
                    </li>
                </ul>
            </nav>

        </header>
    </>
}