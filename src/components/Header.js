import logo from '../img/Logo.svg';
import restaurant from '../img/restaurant.jpg';
import Nav from './Nav';
function Header() {
    return (
        <header>
            <img src={logo} alt="Little Lemon"></img>
            <meta name="description" content="We are a family owned
Mediterranean restaurant, focused on traditional recipes served with a modern twist. "/>
            <meta name="og:title" content="Little Lemon"/>
            <meta name="og:description" content="We are a family owned
Mediterranean restaurant, focused on traditional recipes served with a modern twist. "/>
            <meta name="og:image" content={restaurant}/>
            <Nav />
        </header>
    )
}
export default Header;