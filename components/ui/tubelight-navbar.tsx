"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-12 left-1/2 -translate-x-1/2 z-50 mb-6 sm:mb-0",
        className,
      )}
    >
      <div className="flex items-center gap-2 sm:gap-3 bg-[#0C0C0E]/80 border border-[rgba(255,255,255,0.1)] backdrop-blur-lg py-1 px-1 sm:pl-5 rounded-full shadow-lg">
        <Link href="/" className="flex-shrink-0 mr-2 hidden md:block">
          <img
            src="https://mysportsinjury.co.uk/wp-content/uploads/2024/06/65f8e0fe405ebd03bea9b940_MSI__1_-removebg-preview-p-500-1.png"
            alt="MY Sports Injury"
            className="h-5 w-auto brightness-0 invert hover:brightness-110 transition-all duration-200"
          />
        </Link>
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-syne font-semibold px-6 py-2 rounded-full transition-colors duration-300",
                "text-[#7A7A8A] hover:text-[#C8F04B]",
                isActive && "bg-[rgba(200,240,75,0.05)] text-[#C8F04B]",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-[#C8F04B]/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#C8F04B] rounded-t-full">
                    <div className="absolute w-12 h-6 bg-[#C8F04B]/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-[#C8F04B]/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-[#C8F04B]/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
