import logo from '../img/Logo.svg';
import restaurant from '../img/restaurant.jpg';
import Nav from './Nav';
function Header() {
    return (
        <header>
            <img src={logo} alt="Little Lemon"></img>
            <button className='hamburger-button'>
                &#9776;
            </button>
            <meta charSet='UTF-8' />
            <meta httpEquiv='X-UA-Compatible' content='IE-edge' />
            <meta name='viewport' content='width=device-width, initial-scale=1.0' /> 
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