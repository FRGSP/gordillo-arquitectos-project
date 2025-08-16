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
    type LucideIcon,
} from "lucide-react"

function Services() {

    const [serviceSelected, setServiceSelected] = useState(0);

    type Service = {
        index: number
        category: string
        Icon: LucideIcon
        items: string[]
        description: string
        CTA: string
        gradient?: string
        bg: string
    }

    const services: Service[] = [
        {
            index: 0,
            category: "Proyectos",
            Icon: Building,
            items: [
                "Diseño arquitectónico integral",
                "Planos y renders profesionales",
                "Asesoría técnica durante todo el proceso",
            ],
            description:
                "Planificamos y desarrollamos proyectos arquitectónicos adaptados a tus necesidades, garantizando diseño, funcionalidad y estética en cada detalle.",
            CTA: "Cotizar tu proyecto",
            gradient: "from-blue-600 to-blue-800",
            bg: "/assets/images/proyectos.jpg",
        },
        {
            index: 1,
            category: "Construcción",
            Icon: Construction,
            items: [
                "Construcción en general",
                "Nueva construcción",
                "Remodelaciones",
                "Talleres de vidrio, aluminio, herrería",
                "Construcción residencial",
            ],
            description:
                "Ejecutamos obras con los más altos estándares, cuidando cada detalle desde la cimentación hasta la entrega final.",
            CTA: "Solicitar cotización",
            gradient: "from-blue-600 to-blue-800",
            bg: "/assets/images/Construccion.jpg",
        },
        {
            index: 2,
            category: "Urbanizaciones",
            Icon: Users,
            items: [
                "Diseño y construcción de fraccionamientos",
                "Planificación urbana",
                "Infraestructura",
            ],
            description:
                "Diseñamos y ejecutamos obras de urbanización que mejoran la conectividad y calidad de vida en cada comunidad.",
            CTA: "Cotizar desarrollo",
            gradient: "from-blue-600 to-blue-800",
            bg: "/assets/images/urbanizacion.jpg",
        },
        {
            index: 3,
            category: "Muebles a Medida",
            Icon: Sofa,
            items: [
                "Muebles personalizados para hogar y oficina",
                "Diseño personalizado",
                "Instalación especializada",
            ],
            description:
                "Creamos muebles personalizados que combinan estética, funcionalidad y durabilidad, adaptados a tu estilo de vida.",
            CTA: "Solicitar cotización",
            gradient: "from-blue-600 to-blue-800",
            bg: "/assets/images/muebles.jpg",
        },
        {
            index: 4,
            category: "Bienes Raíces",
            Icon: Key,
            items: [
                "Compra-venta",
                "Administración de propiedades",
                "Asesoría inmobiliaria",
            ],
            description:
                "Asesoría y acompañamiento para comprar, vender o rentar inmuebles con total seguridad y transparencia.",
            CTA: "Más información",
            gradient: "from-blue-600 to-blue-800",
            bg: "/assets/images/interiorPipila.jpg",
        },
        {
            index: 5,
            category: "Mantenimiento",
            Icon: Settings,
            items: [
                "Reparaciones generales",
                "Programas de mantenimiento",
                "Plomería, pintura e impermeabilización",
            ],
            description:
                "Mantenimiento preventivo y correctivo para prolongar la vida útil de tus construcciones.",
            CTA: "Solicitar servicio",
            gradient: "from-blue-600 to-blue-800",
            bg: "/assets/images/image.png",
        },
    ]

    const handleServiceClick = (index: number) => {
        setServiceSelected(index);
    }

    return (
        <section className='py-24 px-4 sm-px-6 lg:px-8 bg-gray-50'>
            <div className='max-w-7xl mx-auto'>
                <div className='w-full grid md:grid-cols-3 gap-6'>
                    {/* Left Section */}
                    <div className='md:col-span-1'>
                        <div className="text-center md:text-start mb-5">
                            <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
                                Nuestros Servicios
                            </h2>
                            <p>
                                Ofrecemos servicios integrales de arquitectura y diseño de alta calidad, adaptados a cada proyecto para transformar sus ideas en espacios únicos y funcionales.
                            </p>
                        </div>
                        <ul className="hidden md:block">
                            {services.map((service) => (
                                <li key={service.index} className={`py-4 border-b ${serviceSelected === service.index ? 'border-gray-400' : 'border-gray-300 cursor-pointer'} group`} onClick={() => handleServiceClick(service.index)}>
                                    <div className='flex items-center space-x-3'>
                                        <service.Icon className={`text-lg ${serviceSelected === service.index ? 'text-blue-800' : 'text-gray-400 group-hover:text-black'}`} />
                                        <h3 className={`text-lg font-semibold ${serviceSelected === service.index ? 'text-blue' : 'text-gray-400 group-hover:text-black'}`}>{service.category}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Section */}
                    <div className="md:col-span-2 md:flex flex-col space-y-6 hidden">
                        <div className="w-full aspect-[16/6] relative rounded-lg overflow-hidden">
                            <Image
                                src={services[serviceSelected].bg}
                                alt={services[serviceSelected].category}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">{services[serviceSelected].category}</h3>

                        <p className="text-lg text-gray-700 leading-relaxed">{services[serviceSelected].description}</p>

                        <ul className="mt-2 space-y-2">
                            {services[serviceSelected].items.slice(0, 3).map((item, idx) => (
                                <li key={idx} className="flex items-start space-x-3 text-gray-700">
                                    <Check className="mt-1 text-blue-800 flex-shrink-0" size={16} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-4">
                            <a
                                href="#contact"
                                className={`inline-flex items-center px-5 py-3 rounded-md text-white font-semibold shadow-sm transition duration-200 hover:scale-105 ${services[serviceSelected].gradient ? `bg-gradient-to-r ${services[serviceSelected].gradient}` : 'bg-blue-600'} hover:opacity-95`}
                                aria-label={`${services[serviceSelected].CTA} - ${services[serviceSelected].category}`}>
                                <span>{services[serviceSelected].CTA}</span>
                                <ArrowRight className="ml-3" size={16} />
                            </a>
                        </div>
                    </div>
                </div>
                {/* Mobile Service Cards */}
                
            </div>
        </section>
    )
}

export default Services