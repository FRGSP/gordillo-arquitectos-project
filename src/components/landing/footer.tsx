'use client';
import { InstagramLogo, FacebookLogo, WhatsappLogo } from 'phosphor-react';

function Footer() {

    const socialLinks = [
        { name: "Facebook", href: "https://www.facebook.com/gordilloarquitectos", img: <FacebookLogo size={32} className='transition-transform hover:scale-110 text-black hover:text-blue-800 duration-300'/> },
        { name: "Instagram", href: "https://www.instagram.com/gordilloarquitectos", img: <InstagramLogo size={32} className='transition-transform hover:scale-110 text-black hover:text-pink-700 duration-300'/> },
        { name: "WhatsApp", href: "https://wa.me/1234567890", img: <WhatsappLogo size={32} className='transition-transform hover:scale-110 text-black hover:text-[#25D366] duration-300'/> },
    ];

  return (
    <footer className='border-t py-6 md:py-3 border-gray-200 px-4 sm:px-6 lg:px-8'>
     <div className=' container mx-auto'>
       <div className='grid justify-center md:justify-between items-center md:flex'>
           <div className='flex flex-col items-center md:items-start text-center md:text-left mb-4 md:mb-0'>
                <div className='flex flex-col md:flex-row md:space-x-2'>
                    <p>© 2025 Gordillo Arquitectos.</p>
                    <p className=''>Sitio desarrollado por <a href="https://blackwaves.tech" target="_blank" rel="noopener noreferrer" className='text-blue-600 hover:underline'>Blackwaves.</a></p>
                </div>
           </div>
           <div className='flex justify-center md:justify-end space-x-4'>
               {socialLinks.map((link) => (
                   <a key={link.name} href={link.href} className='hover:underline'>
                       {link.img}
                   </a>
               ))}
           </div>
       </div>
     </div>
    </footer>
  )
}

export default Footer