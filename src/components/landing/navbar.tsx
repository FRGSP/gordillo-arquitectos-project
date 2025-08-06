'use client';
import { InstagramLogo, FacebookLogo, WhatsappLogo } from 'phosphor-react';

function Navbar() {

    const navItems = [
        { name: "Inicio", href: "/" },
        { name: "Servicios", href: "/services" },
        { name: "Proyectos", href: "/projects" },
        { name: "Inmobiliaria", href: "/inmobiliaria" },
    ]

    const socialLinks = [
        { name: "Facebook", href: "https://www.facebook.com/gordilloarquitectos", img: <FacebookLogo size={32} className='transition-transform hover:scale-110 text-black hover:text-blue-800 duration-300'/> },
        { name: "Instagram", href: "https://www.instagram.com/gordilloarquitectos", img: <InstagramLogo size={32} className='transition-transform hover:scale-110 text-black hover:text-pink-700 duration-300'/> },
        { name: "WhatsApp", href: "https://wa.me/1234567890", img: <WhatsappLogo size={32} className='transition-transform hover:scale-110 text-black hover:text-green-700 duration-300'/> },
    ];

    return (
        <nav className='fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border border-gray-200 shadow-sm'>
            <div className='container mx-auto '>
                <div className='flex items-center justify-between h-16'>
                    <div className='flex items-center'>
                        <img src="/assets/images/logo.png" alt="Gordillo Arquitectos" width={50}/>
                        <h1 className='text-2xl tracking-tight'><span className='font-semibold'>Gordillo</span> Arquitectos</h1>
                    </div>

                    {/* Desktop Navigation */}
                    <div className='hidden md:block'>
                        <div className='ml-10 flex items-center space-x-8'>
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className='text-black hover:text-blue-800 transition-colors duration-300 font-semibold'
                                >
                                    {item.name}
                                </a>
                            ))}

                            <span className='text-gray-800 font-semibold'>|</span>
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