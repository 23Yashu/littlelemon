import { Link } from 'react-router-dom'
import logo from '../img/Logo.svg';
import homeicon from '../icons/homeicon.svg';
import basket from '../icons/basket.svg';

function SecondaryHeader() {
    return (
        <header className='secondary-header'>
            <Link to='/'>
                <img src={homeicon} alt='Little Lemon Home Icon' className='secondary-header-home'></img>
            </Link>
            <img src={logo} alt="Little Lemon" className='secondary-header-logo'></img>
            <Link to=''>
                <img src={basket} alt='Basket Icon' className='secondary-header-basket'></img>
            </Link>
        </header>
    )
}

export default SecondaryHeader
