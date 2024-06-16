interface IconProps {
  src: string
  alt: string
}

export default function Icon({ src, alt }: IconProps) {
  return <img src={src} alt={alt} />
}
