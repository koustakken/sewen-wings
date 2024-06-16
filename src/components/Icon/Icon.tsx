interface IconProps {
  src: string
  alt: string
  onClick?: () => void
  className?: string
}

export default function Icon({ src, alt, onClick, className }: IconProps) {
  return <img src={src} alt={alt} onClick={onClick} className={className} />
}
