import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';


const navigation = [
    { name: 'Sous-location', href: '/sous-location' },
    { name: 'Conciergerie', href: '/concergerie' },
    { name: 'A propos', href: '/about' },
    { name: 'Contact', href: '/about' },
    { name: 'Blog', href: '/blog'},
    { name: 'FAQ', href: '/faq' },

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
    const scrollY = useScrollPosition();
    let className = 'bg-transparent';
    if (scrollY > 200) {
        className = 'bg-primary';
    }
    return (
        <nav className={`flex w-full p-3 items-center justify-around fixed z-50 top-0 ${className} transition-colors duration-1000 ease-in-out `}>
            <Link href="/">
                <Image src="/logo/transparent/white-title.png" alt="take my keys logo" width={112} height={62.56} />
            </Link>
            <ul className="flex justify-end items-center text-white text-lg">
                {navigation.map((item) => (
                    <li key={item.name} className='m-4'>
                        <Link href={item.href}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <Link href="/" className='md-4'>
                <button className='bg-secondary text-white text-lg rounded-3xl p-2 px-6 whitespace-nowrap'>
                    Se connecter
                </button>
            </Link>
        </nav>
    );
}