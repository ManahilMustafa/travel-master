import Link from 'next/link'

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  className = '',
  ...props
}) {
  const baseClass = 'inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-colors'

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    secondary: 'bg-secondary text-white hover:bg-secondary/90',
    outline: 'text-primary border-2 border-primary hover:bg-primary/5',
    ghost: 'text-foreground hover:bg-gray-100',
  }

  const buttonClass = `${baseClass} ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={buttonClass} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={buttonClass} {...props}>
      {children}
    </button>
  )
}
