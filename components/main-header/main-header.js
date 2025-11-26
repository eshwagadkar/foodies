import Link from 'next/link'
import Image from 'next/image'

import logoImg from '@/assets/logo.png'
import MainHeaderBackground from './main-header-background'
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
                    <li><Link href='/meals'>Browse Meals</Link></li>
                    <li><Link href='/community'>Community</Link></li>
                </ul>
            </nav>

        </header>
    </>
}