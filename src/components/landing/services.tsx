"use client"

import { useState } from "react"
import Image from "next/image"
import {
    Building,
    Construction,
    Sofa,
    Key,
    Settings,
    Users,
    Check,
    ArrowRight,
} from "lucide-react"

function ServicesGrid() {

    const [active, setActive] = useState(0)
    const whatsappBase = "https://wa.me/4454503606"

    const services = [
        {
            category: "Proyectos",
            icon: <Building className={`w-8 h-8 ${active === 0 ? 'text-white' : 'text-blue-800'}`} />,
            services: [
                "Diseño arquitectónico",
                "Interiores"
            ],
            description: "Diseños que combinan funcionalidad y estética creando espacios únicos.",
            gradient: "from-blue-600 to-blue-800"
        },
        {
            category: "Construcción",
            icon: <Construction className={`w-8 h-8 ${active === 1 ? 'text-white' : 'text-blue-800'}`} />,
            services: [
                "Construcción en general",
                "Nueva construcción",
                "Remodelaciones",
                "Talleres de vidrio, aluminio, herrería",
                "Construcción residencial"
            ],
            description: "Servicios integrales de construcción con los más altos estándares de calidad.",
            gradient: "from-blue-600 to-blue-800"
        },
        {
            category: "Urbanizaciones",
            icon: <Users className={`w-8 h-8 ${active === 2 ? 'text-white' : 'text-blue-800'}`} />,
            services: [
                "Diseño y construcción de fraccionamientos",
                "Planificación urbana",
                "Infraestructura"
            ],
            description: "Desarrollamos comunidades planificadas con visión moderna y sustentable.",
            gradient: "from-blue-600 to-blue-800"
        },
        {
            category: "Muebles a Medida",
            icon: <Sofa className={`w-8 h-8 ${active === 3 ? 'text-white' : 'text-blue-800'}`} />,
            services: [
                "Diseño personalizado",
                "Fabricación artesanal",
                "Instalación especializada"
            ],
            description: "Muebles únicos diseñados específicamente para cada espacio y necesidad.",
            gradient: "from-blue-600 to-blue-800"
        },
        {
            category: "Bienes Raíces",
            icon: <Key className={`w-8 h-8 ${active === 4 ? 'text-white' : 'text-blue-800'}`} />,
            services: [
                "Compra venta",
                "Administración de propiedades",
                "Asesoría inmobiliaria"
            ],
            description: "Servicios inmobiliarios completos con asesoría experta en el mercado.",
            gradient: "from-blue-600 to-blue-800"
        },
        {
            category: "Mantenimiento",
            icon: <Settings className={`w-8 h-8 ${active === 5 ? 'text-white' : 'text-blue-800'}`} />,
            services: [
                "Mantenimiento a edificios",
                "Programas mensuales de mantenimiento",
                "Plomería especializada",
                "Pintura e impermeabilización",
                "Herrería y vidrio",
                "Servicios de mantenimiento programada"
            ],
            description: "Mantenimiento preventivo y correctivo para preservar el valor de su propiedad.",
            gradient: "from-blue-600 to-blue-800"
        }
    ];

            // Background placeholders per service
            const backgrounds = [
                "/assets/images/proyectos.jpg",
                "/assets/images/Construccion.jpg",
                "/assets/images/urbanizacion.jpg",
                "/assets/images/muebles.jpg",
                "/assets/images/interiorPipila.jpg",
                "/assets/images/image.png",
            ]

            return (
                <section id="services" className='scroll-mt-20 bg-gray-50'>
                    {/* Header */}
                    <div className='container mx-auto px-4 sm:px-6 lg:px-8 pt-14 md:pt-20 pb-6 text-center'>
                        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">Servicios que impulsan tus proyectos</h2>
                        <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
                            Cambia entre categorías para ver una vista inmersiva de cada servicio.
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className='container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center'>
                        <div role="tablist" aria-label="Servicios" className='mb-6 md:mb-8 flex gap-2 overflow-x-auto no-scrollbar py-2 px-2'>
                            {services.map((s, i) => (
                                <button
                                    key={s.category}
                                    role="tab"
                                    aria-selected={active === i}
                                    aria-controls={`service-panel-${i}`}
                                    className={[
                                        'rounded-full px-4 py-2 text-sm font-semibold transition-all border border-gray-200',
                                        active === i
                                            ? 'bg-blue-800 text-white'
                                            : 'bg-white text-gray-700 hover:bg-gray-100 cursor-pointer'
                                    ].join(' ')}
                                    onClick={() => setActive(i)}
                                >
                                    <span className='inline-flex items-center gap-2'>
                                        <span className='hidden sm:inline-block'>
                                            {/* icon already colored */}
                                            {s.icon}
                                        </span>
                                        {s.category}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Stage */}
                    <div className='container mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24'>
                        <div className='relative h-[65vh] md:h-[60vh] rounded-2xl overflow-hidden ring-1 ring-gray-200 shadow-lg'>
                            {/* Backgrounds crossfade */}
                            {services.map((s, i) => (
                                <div
                                    key={i}
                                    aria-hidden={active !== i}
                                    className={[
                                        'absolute inset-0 transition-opacity duration-700',
                                        active === i ? 'opacity-100 z-10' : 'opacity-0'
                                    ].join(' ')}
                                >
                                    <Image
                                        src={backgrounds[i % backgrounds.length]}
                                        alt={`${s.category} - Gordillo Arquitectos`}
                                        fill
                                        priority={i === 0}
                                        sizes='100vw'
                                        className='object-cover'
                                    />
                                    <div className='absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10' />
                                </div>
                            ))}

                            {/* Content panels */}
                            {services.map((s, i) => {
                                const encoded = encodeURIComponent(`Hola, me interesa el servicio de ${s.category}.`)
                                const whatsappHref = `${whatsappBase}?text=${encoded}`
                                return (
                                    <div
                                        id={`service-panel-${i}`}
                                        key={`panel-${i}`}
                                        role="tabpanel"
                                        aria-labelledby={`service-tab-${i}`}
                                        className={[
                                            'absolute inset-0 transition-opacity duration-700',
                                            active === i ? 'opacity-100 z-20' : 'opacity-0'
                                        ].join(' ')}
                                    >
                                        <div className='relative h-full w-full flex items-end md:items-center'>
                                            <div className='w-full md:w-[60%] lg:w-[50%] px-5 sm:px-8 md:px-12 lg:px-16 py-8 md:py-0'>
                                                <div className='flex items-center gap-3 mb-3'>
                                                    <div className='h-10 w-10 rounded-lg bg-white/15 ring-1 ring-white/30 backdrop-blur flex items-center justify-center'>
                                                        {s.icon}
                                                    </div>
                                                    <h3 className='text-3xl md:text-4xl font-bold text-white'>{s.category}</h3>
                                                </div>
                                                <p className='text-white/90 text-lg md:text-xl'>
                                                    {s.description}
                                                </p>
                                                <ul className='mt-5 space-y-3'>
                                                    {s.services.slice(0, 3).map((item: string, idx: number) => (
                                                        <li key={idx} className='flex items-start gap-3 text-white'>
                                                            <span className='mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30'>
                                                                <Check className='h-4 w-4 text-white' />
                                                            </span>
                                                            <span className='font-medium'>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <div className='mt-7 flex flex-wrap gap-3'>
                                                    <a
                                                        href={whatsappHref}
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                        className='inline-flex items-center justify-center rounded-lg bg-blue-800 px-5 py-3 text-white font-semibold shadow-md hover:bg-blue-700 transition-colors'
                                                    >
                                                        Cotizar este servicio
                                                        <ArrowRight className='ml-2 h-5 w-5' />
                                                    </a>
                                                    <a
                                                        href='#projects'
                                                        className='inline-flex items-center justify-center rounded-lg px-5 py-3 font-semibold bg-white/15 text-white ring-1 ring-white/30 hover:bg-white/25 transition-colors backdrop-blur'
                                                    >
                                                        Ver proyectos
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            )
}

export default ServicesGrid
