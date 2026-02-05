import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-inter font-normal transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-deep-reef focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5'

  const variantStyles = {
    primary: 'bg-soft-clay text-white-coral shadow-md hover:bg-soft-clay/90 hover:shadow-lg',
    secondary: 'bg-deep-reef text-white-coral shadow-md hover:bg-deep-reef/90 hover:shadow-lg',
    outline: 'border border-soft-clay text-soft-clay hover:bg-soft-clay hover:text-white-coral hover:shadow-md',
  }

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm rounded-full',
    md: 'px-6 py-3 text-base rounded-full',
    lg: 'px-8 py-4 text-lg rounded-full',
  }

  const widthStyle = fullWidth ? 'w-full' : ''

  const className = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle}`

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {children}
    </button>
  )
}
