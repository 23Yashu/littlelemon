function Nav() {
    return (
        <div className="nav">
            <section className="navigation">
                <nav>
                    <ul>
                        <li><a href="/#home">Home</a></li>
                        <li><a href="/#about">About</a></li>
                        <li><a href="/#menu">Menu</a></li>
                        <li><a href="/reservations">Reservations</a></li>
                        <li><a href="/order-online">Order Online</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </nav>
            </section>
            <section className='mobile-navigation hidden' aria-label="mobile">
                <nav>
                    <a href="/#home">Home</a>
                    <a href="/#about">About</a>
                    <a href="/#menu">Menu</a>
                    <a href="/reservations">Reservations</a>
                    <a href="/order-online">Order Online</a>
                    <a href="/login">Login</a>
                </nav>
            </section>
        </div>
    )
}

export default Nav;