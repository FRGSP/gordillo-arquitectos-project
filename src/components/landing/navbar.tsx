'use client';
import { useEffect, useState } from 'react';
import { InstagramLogo, FacebookLogo, WhatsappLogo } from 'phosphor-react';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll(); // set initial state in case user reloads scrolled
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const navItems = [
        { name: "Inicio", href: "/" },
        { name: "Servicios", href: "/services" },
        { name: "Proyectos", href: "/projects" },
        { name: "Inmobiliaria", href: "/inmobiliaria" },
    ]

    const socialLinks = [
        { name: "Facebook", href: "https://www.facebook.com/gordilloarquitectos", img: <FacebookLogo size={32} className={`transition-transform hover:scale-110 ${scrolled ? 'text-black' : 'text-white'} hover:text-[#1877f2] duration-300`} /> },
        { name: "Instagram", href: "https://www.instagram.com/gordilloarquitectos", img: <InstagramLogo size={32} className={`transition-transform hover:scale-110 ${scrolled ? 'text-black' : 'text-white'} hover:text-[#D43089] duration-300`} /> },
        { name: "WhatsApp", href: "https://wa.me/1234567890", img: <WhatsappLogo size={32} className={`transition-transform hover:scale-110 ${scrolled ? 'text-black' : 'text-white'} hover:text-[#25D366] duration-300`} /> },
    ];

    return (
        <nav
            className={[
                'fixed top-0 left-0 right-0 z-50 transition-colors duration-300',
                scrolled
                    ? 'bg-white/95 backdrop-blur-sm border border-gray-200 shadow-sm'
                    : 'bg-transparent border-transparent'
            ].join(' ')}
        >
            <div className='container mx-auto '>
                <div className='flex items-center justify-between h-16'>
                    <div className='flex items-center'>
                        <img src="/assets/images/logo.png" alt="Gordillo Arquitectos" width={50}/>
                        <h1 className={`text-2xl tracking-tight ${scrolled ? 'text-black' : 'text-white'}`}><span className='font-semibold'>Gordillo</span> Arquitectos</h1>
                    </div>

                    {/* Desktop Navigation */}
                    <div className='hidden md:block'>
                        <div className='ml-10 flex items-center space-x-8'>
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={`${scrolled ? 'text-black' : 'text-white'} hover:text-blue-800 transition-colors duration-300 font-semibold`}
                                >
                                    {item.name}
                                </a>
                            ))}

                            <span className={`${scrolled ? 'text-black' : 'text-white'} font-semibold`}>|</span>
                            <div className='flex items-center space-x-4'>

                                {socialLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {link.img}
                                    </a>
                                ))}

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar