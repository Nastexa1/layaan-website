import { useState } from 'react'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { openCart, totalItems } = useCart()

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Service', href: '#service' },
    { name: 'Shop', href: '#shop' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-[#0A192F] text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex shrink-0 items-center">
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Layaan — Softness and Elegance"
            className="h-12 w-auto object-contain md:h-14"
          />
        </a>

        <nav className="hidden items-center space-x-8 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/80 transition-colors duration-200 hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={openCart}
            aria-label="Fur dambiisha"
            className="relative rounded-lg p-2 text-white transition hover:bg-white/10"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 text-[11px] font-bold text-[#0A192F]">
                {totalItems > 99 ? '99+' : totalItems}
              </span>
            )}
          </button>

          <a
            href="#shop"
            className="hidden rounded-lg border border-white px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#0A192F] md:inline-block"
          >
            Iibso Hadda
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
            className="text-white focus:outline-none md:hidden"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="space-y-3 border-t border-white/10 bg-[#172A45] px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-white/90 transition-all duration-150 hover:pl-2 hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
