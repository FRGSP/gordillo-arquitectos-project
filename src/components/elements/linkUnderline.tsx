// components/LinkUnderline.tsx
import React, { ReactNode } from "react"

interface LinkUnderlineProps {
  href: string
  children: ReactNode
  className?: string
  scrolledProp?: boolean
}

const LinkUnderline: React.FC<LinkUnderlineProps> = ({
  href,
  children,
  className = "",
  scrolledProp = false,
}) => {
  return (
    <a
      href={href}
      className={`
        ${scrolledProp ? 'text-black after:bg-black' : 'text-white after:bg-white'}
        relative inline-block cursor-pointer font-semibold
        after:content-[''] after:absolute after:bottom-0
        after:h-[2px] 
        after:transition-all after:duration-300
        after:left-0 after:w-0 hover:after:w-full
        ${className}
      `}
    >
      {children}
    </a>
  )
}

export default LinkUnderline