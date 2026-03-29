import { useState } from 'react';
import restaurant from '../img/restaurant.jpg';
import { FaFacebook, FaInstagram, FaTwitter, FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Footer() {
    const [isMobile, setIsMobile] = useState(false);
    const [openSection, setOpenSection] = useState(null);
    const date = new Date();
    const year = date.getFullYear();
    const author = "Yashasvi Vashistha";

    const toggleSection = (section) => {
        setOpenSection(prev => prev === section ? null : section);
    }
    return (
        <footer className='secondary-footer'>
            <div className='links'>
                <div className='footer-logo'>
                    <img src={restaurant} alt="Little Lemon Restaurant" />
                </div>

                {/* Website Links */}
                <div className='secondary-footer-website-links'>
                    <h3>Little Lemon</h3>
                    <ul className='footer-links'>
                        <li><Link to="/#about">About</Link></li>
                        <li><Link to="/#menu">Menu</Link></li>
                        <li><Link to="/#testimonials">Testimonials</Link></li>
                        <li><Link to="/#contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className='secondary-footer-contact-info'>
                            <h3>Contact</h3>
                            <ul className='footer-links'>
                                <li><p>You may also want to visit us:</p>
                                    <span>Little Lemon<br />
                                        331 E Chicago<br />
                                        LaSalle Street Chicago,<br />
                                        Illinois 60602<br />
                                        USA</span>
                                </li>
                                <li><p>jim@rock.com</p></li>
                                <li><p>(311) 555-2368</p></li>
                                <li><p>littlemon@bookings.com</p></li>
                            </ul>
                </div>

                {/* Social Media */}
                <div className='secondary-footer-social-media'>
                    {isMobile ? (
                        <>
                            <div className="footer-toggle" onClick={() => toggleSection("social")}>
                                <h3>Social Media</h3>
                                <FaChevronDown className={openSection === "social" ? "rotated" : ""} />
                            </div>
                            <ul className={`footer-links ${openSection === "social" ? "open" : ""}`}>
                                <li><a href="https://www.facebook.com"><FaFacebook className='social-icons' /></a></li>
                                <li><a href="https://www.instagram.com"><FaInstagram className='social-icons' /></a></li>
                                <li><a href="https://www.twitter.com"><FaTwitter className='social-icons' /></a></li>
                            </ul>
                        </>
                    ) : (
                        <>
                            <h3>Social Media</h3>
                            <ul className='footer-links'>
                                <li><a href="https://www.facebook.com"><FaFacebook className='secondary-footer-social-icons' /></a></li>
                                <li><a href="https://www.instagram.com"><FaInstagram className='secondary-footer-social-icons' /></a></li>
                                <li><a href="https://www.twitter.com"><FaTwitter className='secondary-footer-social-icons' /></a></li>
                            </ul>
                        </>
                    )}
                </div>
            </div>
            <div className='secondary-footer-copyright'>
                <p>&copy; {year} Little Lemon by
                    <a href='https://www.linkedin.com/in/yashasvi-vashistha'> {author}.</a>
                    &nbsp;All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}
export default Footer;