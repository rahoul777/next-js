import Link from 'next/link';
export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg 
                            navbar-light bg-dark 
                            bg-opacity-75 text-light">
                <div className="container">
                    <Link className="navbar-brand 
                                    text-light font-bold"
                        href="/">
                        Home
                    </Link>
                    <div className="collapse navbar-collapse"
                        id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link href="/about"
                                    className="nav-item nav-link 
                                                 text-light">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/contact"
                                    className="nav-item nav-link 
                                                 text-light">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};