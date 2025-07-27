import logo from '../img/Logo.svg';
import restaurant from '../img/restaurant.jpg';
import Nav from './Nav';
import { useEffect, useRef } from 'react';

function Header() {
    const lastScrollY = useRef(0); // just stores scroll position
    const headerRef = useRef(null); // ref for header element

    // Toggle hamburger menu
    useEffect(() => {
        const hamburgerBtn = document.querySelector('.hamburger-button');
        const mobileMenu = document.querySelector('.mobile-navigation');

        const toggleMenu = () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
            hamburgerBtn.classList.toggle('toggle-btn');
        };

        hamburgerBtn?.addEventListener('click', toggleMenu);
        mobileMenu?.addEventListener('click', toggleMenu);

        return () => {
            hamburgerBtn?.removeEventListener('click', toggleMenu);
            mobileMenu?.removeEventListener('click', toggleMenu);
        };
    }, []);

    // Handle scroll hide/show
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth < 1024) return; // disable for mobile

            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                // scrolling down → show header
                headerRef.current.style.transform = 'translateY(-100%)';
            } else {
                // scrolling up → hide header
                headerRef.current.style.transform = 'translateY(0)';
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header ref={headerRef} className="main-header">
            <section className='header-section'>
                <img src={logo} alt="Little Lemon"></img>
                <button className='hamburger-button' aria-label='Toggle Menu'>
                    <div className='hamburger-icon'></div>
                </button>
                <meta charSet='UTF-8' />
                <meta httpEquiv='X-UA-Compatible' content='IE-edge' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <meta name="description" content="We are a family owned
                Mediterranean restaurant, focused on traditional recipes served with a modern twist." />
                <meta name="og:title" content="Little Lemon" />
                <meta name="og:description" content="We are a family owned
                Mediterranean restaurant, focused on traditional recipes served with a modern twist." />
                <meta name="og:image" content={restaurant} />
                <Nav />
            </section>
        </header>
    );
}

export default Header;
