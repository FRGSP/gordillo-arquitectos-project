"use client"

import { 
    Building, 
    Construction, 
    Sofa, 
    Key, 
    Settings,
    Users,
} from "lucide-react"

function ServicesGrid() {
    const services = [
        {
            category: "Proyectos",
            icon: <Building className="w-8 h-8 text-blue-800" />,
            services: [
                "Diseño arquitectónico",
                "Interiores"
            ],
            description: "Diseños que combinan funcionalidad y estética creando espacios únicos.",
            gradient: "from-blue-600 to-blue-800"
        },
        {
            category: "Construcción",
            icon: <Construction className="w-8 h-8 text-blue-800" />,
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
            icon: <Users className="w-8 h-8 text-blue-800" />,
            services: [
                "Desarrollo de proyectos urbanísticos",
                "Planificación urbana",
                "Infraestructura"
            ],
            description: "Desarrollamos comunidades planificadas con visión moderna y sustentable.",
            gradient: "from-blue-600 to-blue-800"
        },
        {
            category: "Muebles a Medida",
            icon: <Sofa className="w-8 h-8 text-blue-800" />,
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
            icon: <Key className="w-8 h-8 text-blue-800" />,
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
            icon: <Settings className="w-8 h-8 text-blue-800" />,
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

    return (
        <section className='py-20 px-4 sm:px-6 lg:px-8 bg-gray-50'>
            <div className='container mx-auto'>
                {/* Section Header */}
                <div className='text-center mb-16'>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Nuestros Servicios
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Descubre nuestra amplia gama de servicios profesionales diseñados para cubrir 
                        todas sus necesidades de construcción y diseño.
                    </p>
                </div>

                {/* Services Grid */}
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group'
                        >
                            {/* Card Header */}
                            <div className={`p-6 border-b border-gray-200 `}>
                                <div className='flex items-center space-x-3 mb-3'>
                                    {service.icon}
                                    <h3 className='text-xl font-bold text-blue-800'>{service.category}</h3>
                                </div>
                                <p className=''>{service.description}</p>
                            </div>

                            {/* Card Body */}
                            <div className='p-6 flex flex-col justify-between'>
                                <ul className='space-y-3'>
                                    {service.services.map((item, itemIndex) => (
                                        <li key={itemIndex} className='flex items-start space-x-3'>
                                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mt-2 flex-shrink-0`}></div>
                                            <span className='text-gray-700 font-medium'>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Call to Action */}
                                {/* <div className='mt-6 pt-6 border-t border-gray-100'>
                                    <button className={`w-full bg-gradient-to-r ${service.gradient} text-white font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity duration-200`}>
                                        Solicitar información
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Section */}
                
            </div>
        </section>
    )
}

export default ServicesGrid
