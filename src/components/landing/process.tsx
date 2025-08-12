"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import Image from "next/image"
import { FileText, Ruler, Hammer, CheckCircle2, Wrench } from "lucide-react"

type Step = {
  title: string
  description: string
  points: string[]
  image: string
  icon: ReactNode
}

function Process() {
  const steps: Step[] = [
    {
      title: "Brief y diagnóstico",
      description: "Entendemos objetivos, presupuesto y contexto para definir el alcance correcto.",
      points: ["Visita al sitio", "Requisitos y timings", "Viabilidad inicial"],
      image: "/assets/images/Casa.jpg",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      title: "Diseño y planeación",
      description: "Propuesta arquitectónica con funcionalidad, estética y normativas en mente.",
      points: ["Anteproyecto y renders", "Planos ejecutivos", "Trámites y permisos"],
      image: "/assets/images/interiorPipila.jpg",
      icon: <Ruler className="h-5 w-5" />,
    },
    {
      title: "Construcción",
      description: "Ejecución con control de calidad, costos y seguridad en obra.",
      points: ["Programa de obra", "Supervisión y control", "Reportes de avance"],
      image: "/assets/images/construccion.jpg",
      icon: <Hammer className="h-5 w-5" />,
    },
    {
      title: "Entrega",
      description: "Puesta a punto y entrega con checklist y garantías.",
      points: ["Punch list", "Pruebas y ajustes", "Documentación final"],
      image: "/assets/images/Casa.jpg",
      icon: <CheckCircle2 className="h-5 w-5" />,
    },
    {
      title: "Mantenimiento",
      description: "Programas de mantenimiento preventivo y correctivo para preservar el valor.",
      points: ["Calendario programado", "Atención de incidencias", "Optimización continua"],
      image: "/assets/images/interiorPipila.jpg",
      icon: <Wrench className="h-5 w-5" />,
    },
  ]

  const [active, setActive] = useState(0)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            setActive(idx)
          }
        })
      },
      { root: null, rootMargin: "0px", threshold: [0.6] }
    )

    stepRefs.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  const whatsappBase = "https://wa.me/4454503606"

  return (
    <section id="process" className="scroll-mt-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 pb-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-800 ring-1 ring-blue-200 px-3 py-1 text-xs font-semibold">
            Nuestro método
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">Proceso 360°</h2>
          <p className="mt-3 text-lg text-gray-600">
            De la idea a la entrega y más allá. Transparente, controlado y orientado a resultados.
          </p>
        </div>
      </div>

      {/* Scrollytelling layout */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Sticky visual */}
          <div className="h-[40vh] lg:h-[75vh] sticky top-20 lg:top-24 rounded-2xl overflow-hidden ring-1 ring-gray-200 shadow-lg">
            {steps.map((s, i) => (
              <div
                key={i}
                className={[
                  "absolute inset-0 transition-opacity duration-700",
                  active === i ? "opacity-100 z-10" : "opacity-0",
                ].join(" ")}
                aria-hidden={active !== i}
              >
                <Image
                  src={s.image}
                  alt={`${s.title} - Gordillo Arquitectos`}
                  fill
                  priority={i === 0}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />

                {/* Overlayed label */}
                <div className="absolute left-0 right-0 bottom-0 p-5 sm:p-6 md:p-8 text-white">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/15 ring-1 ring-white/30 px-3 py-1 backdrop-blur">
                    {steps[i].icon}
                    <span className="text-sm font-semibold">{steps[i].title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Steps list */}
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-gray-200 to-transparent hidden md:block" />
            <div className="space-y-10 md:space-y-16">
              {steps.map((s, i) => {
                const encoded = encodeURIComponent(`Hola, me interesa conocer más sobre: ${s.title}.`)
                const href = `${whatsappBase}?text=${encoded}`
                const activeItem = active === i
                return (
                  <div
                    key={i}
                    ref={(el) => { stepRefs.current[i] = el }}
                    data-index={i}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <div className="hidden md:block absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full bg-white ring-2 ring-blue-300" />

                    <div
                      className={[
                        "rounded-2xl border bg-white p-5 sm:p-6 md:p-7 transition-all duration-300",
                        activeItem ? "border-blue-200 shadow-lg" : "border-gray-200 shadow-sm",
                      ].join(" ")}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="h-10 w-10 rounded-lg bg-blue-50 ring-1 ring-blue-200 flex items-center justify-center">
                          {s.icon}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900">{s.title}</h3>
                      </div>
                      <p className="text-gray-700 text-base md:text-lg">{s.description}</p>

                      <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {s.points.map((p, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-800">
                            <span className="h-2 w-2 rounded-full bg-blue-700" />
                            <span className="font-medium">{p}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5 flex flex-wrap gap-3">
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-lg bg-blue-800 px-4 py-2.5 text-white font-semibold shadow-md hover:bg-blue-700 transition-colors"
                        >
                          Quiero esta etapa
                        </a>
                        {i === steps.length - 1 ? (
                          <a
                            href="#services"
                            className="inline-flex items-center justify-center rounded-lg px-4 py-2.5 font-semibold bg-gray-100 text-gray-900 ring-1 ring-gray-200 hover:bg-gray-200 transition-colors"
                          >
                            Volver a servicios
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
