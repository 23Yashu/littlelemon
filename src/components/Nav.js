import { Link } from 'react-router-dom'
function Nav() {
    return (
        <div className="nav">
            <section className="navigation">
                <nav>
                    <ul>
                        <li><a href="/#home">Home</a></li>
                        <li><a href="/#about">About</a></li>
                        <li><a href="/#menu">Menu</a></li>
                        <li><Link to="/booking">Reservation</Link></li>
                        <li><a href="/">Order Online</a></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </nav>
            </section>
            <section className='mobile-navigation hidden' aria-label="mobile">
                <nav>
                    <a href="/#home">Home</a>
                    <a href="/#about">About</a>
                    <a href="/#menu">Menu</a>
                    <Link to="/booking">Reservations</Link>
                    <a href="/">Order Online</a>
                    <Link to="/login">Login</Link>
                </nav>
            </section>
        </div>
    )
}

export default Nav;