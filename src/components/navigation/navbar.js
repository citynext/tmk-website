import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RxHamburgerMenu } from "react-icons/rx";
import Button from '../form/button';
import { motion } from "framer-motion";
import { IoMdLogIn } from "react-icons/io";
import logo from "@/../public/logo/transparent/white-title.png";


const navigation = [
    { name: 'Sous-location', href: '/sous-location' },
    { name: 'Conciergerie', href: '/conciergerie' },
    { name: 'Contact', href: process.env.NEXT_PUBLIC_CALENDLY_URL},
    // { name: 'A propos', href: '/a-propos' },
    // { name: 'FAQ', href: '/foire-aux-questions' },
    // { name: 'Parrainage', href: '/parrainage' },
    // { name: 'Bonus JO 2024', href: '/bonus-jo-2024' },
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
    let className = open ? 'bg-primary shadow-2xl': 'bg-transparent';
    if (scrollY > 200) {
        className = 'bg-primary shadow-2xl';
    }

    const initialState = {
        opacity: 0,
        y: 10,
      };
      const inView = {
        opacity: 1,
        y: 0,
      };
    
      const transit = {
        duration: 0.2,
        ease: "easeInOut",
      };
    return (
        <nav className={`flex flex-col min-h-24 w-full p-3 items-end justify-between lg:flex-row lg:justify-between lg:items-center absolute z-50 top-0 ${className} transition-colors duration-1000 ease-in-out`}>
            <button className='absolute right-5 top-5 lg:hidden' onClick={toggle}><RxHamburgerMenu size={48} color='white' /></button>
            <Link className='absolute left-5 top-5 lg:static' href="/">
                <Image src={logo} alt="take my keys logo" width={112} height={62.56} />
            </Link>
            <ul className={`${open ? 'absolute bg-primary shadow-2xl flex flex-col mt-20 rounded' : 'hidden'} text-white gap-10 text-lg lg:mt-0 lg:flex lg:flex-row lg:justify-end lg:items-center`}>
                {navigation.map((item, index) => (
                    <motion.li 
                    initial={initialState}
                    whileInView={inView}
                    transition={{ ...transit, delay:index/6 }}
                    viewport={{ once: true }}
                    key={item.name} className='hover:underline'>
                        <Link href={item.href} onClick={() => setOpen(false)}>
                            {item.name}
                        </Link>
                    </motion.li>
                ))}
            </ul>
            <div></div>
        </nav>
    );
}