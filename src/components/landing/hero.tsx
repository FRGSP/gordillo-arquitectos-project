"use client"

import { useEffect, useState } from "react"
import { DollarSign, ArrowRight, ChevronLeft } from "lucide-react"

function Hero() {

    const [currentImage, setCurrentImage] = useState(0);

    const prevImage = () => {
        setCurrentImage((prev) => prev === 0 ? images.length - 1 : prev - 1);
    }

    const nextImage = () => {
        setCurrentImage((prev) => prev === images.length - 1 ? 0 : prev + 1);
    }

    const images = [
        "/assets/images/pipila.webp",
        "/assets/images/casa.jpg",
        "/assets/images/interiorPipila.jpg",
    ]

    // Auto-play carousel
    useEffect(() => {
        const interval = setInterval(nextImage, 5000); // Change image every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section className='min-h-screen flex items-center px-4 sm:px-6 lg:px-8'>
            <div className='container mx-auto py-20'>
                <div className='grid lg:grid-cols-2 gap-12 items-center'>
                    {/* Content Section */}
                    <div className='space-y-8'>
                        <div className='space-y-6'>
                            <div className="flex justify-center lg:justify-start">
                                <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full">
                                    <DollarSign className="w-5 h-5 text-blue-900 mr-1" strokeWidth={2} />
                                    <span className="text-sm font-semibold text-blue-900">Cotizamos al mejor precio</span>
                                </div>
                            </div>

                            <p className="text-5xl text-center lg:text-left sm:text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-blue-900  to-blue-700 bg-clip-text text-transparent">
                                Diseñamos
                                <span className="block">Construimos</span>
                                <span className="block">Administramos</span>
                            </p>

                            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg text-center sm:text-left">
                                Proyectos arquitectónicos, construcción residencial, bienes raíces, muebles a medida, vidrio, aluminio y mantenimiento especializado: todo en un solo lugar.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="text-md text-balance inline-flex gap-2 items-center bg-gradient-to-r from-blue-800 to-blue-500 hover:from-blue-800 hover:to-blue-700 group text-white cursor-pointer font-bold py-2 px-4 rounded-md transition duration-200 ease-in-out hover:scale-105 justify-center text-center">Ver proyectos
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="text-md text-balance inline-flex gap-2 items-center bg-white hover:bg-black group text-black hover:text-white cursor-pointer font-bold py-2 px-4 rounded-md transition duration-200 ease-in-out hover:scale-105 justify-center text-center border border-gray-400">Contáctanos</button>
                        </div>

                    </div>

                    <div className="relative overflow-hidden rounded-lg shadow-sm">
                        {/* Carousel Images with Crossfade */}
                        <div className="relative w-full h-auto aspect-square">
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt="Arquitectura moderna minimalista"
                                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                                        index === currentImage ? 'opacity-100' : 'opacity-0'
                                    }`}
                                />
                            ))}
                        </div>

                        {/* <button
                            onClick={prevImage}
                            className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black transition-all duration-200"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        <button
                            onClick={nextImage}
                            className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black transition-all duration-200"
                        >
                            <ChevronLeft className="w-5 h-5 transform rotate-180" />
                        </button> */}

                        {/* Dots Indicator */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImage(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                        index === currentImage 
                                            ? 'bg-white' 
                                            : 'bg-white/50 hover:bg-white/75'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Hero