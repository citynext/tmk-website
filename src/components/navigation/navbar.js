import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RxHamburgerMenu } from "react-icons/rx";


const navigation = [
    { name: 'Sous-location', href: '/sous-location' },
    { name: 'Conciergerie', href: '/conciergerie' },
    { name: 'A propos de nous', href: '/a-propos-de-nous' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog'},
    { name: 'FAQ', href: '/foire-aux-questions' },

]

const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Clean up the event listener
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollY;
};


export default function Navbar() {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    }

    const scrollY = useScrollPosition();
    let className = open ? 'bg-primary': 'bg-transparent';
    if (scrollY > 200) {
        className = 'bg-primary';
    }
    return (
        <nav className={`flex flex-col min-h-24 w-full p-3 items-end justify-between lg:flex-row lg:justify-around lg:items-center fixed z-50 top-0 ${className} transition-colors duration-1000 ease-in-out `}>
            <button className='absolute right-5 top-5 lg:hidden' onClick={toggle}><RxHamburgerMenu size={48} color='white' /></button>
            <Link className='absolute left-5 top-5 lg:static' href="/">
                <Image src="/logo/transparent/white-title.png" alt="take my keys logo" width={112} height={62.56} />
            </Link>
            <ul className={`${open ? 'flex flex-col mt-20 text-center' : 'hidden'} text-white text-lg lg:mt-0 lg:flex lg:flex-row lg:justify-end lg:items-center`}>
                {navigation.map((item) => (
                    <li key={item.name} className='m-4'>
                        <Link href={item.href}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <Link href="/dashboard" className='md-4'>
                <button className={`lg:block bg-secondary text-white text-lg rounded-3xl p-2 px-6 whitespace-nowrap ${open ? '' : 'hidden'}`}>
                    Se connecter
                </button>
            </Link>
        </nav>
    );
}