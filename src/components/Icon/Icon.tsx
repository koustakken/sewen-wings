interface IconProps {
  src: string
  alt: string
  onClick?: () => void
}

export default function Icon({ src, alt, onClick }: IconProps) {
  return <img src={src} alt={alt} onClick={onClick} />
}
