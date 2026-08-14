interface PlaceholderProps {
  label: string
  variant?: 'product' | 'gallery' | 'hero'
  seed?: number
}

const palettes: Record<string, [string, string]> = {
  product: ['#2A9D8F', '#F4E9D8'],
  gallery: ['#1f7a6f', '#F4A33A'],
  hero: ['#2A9D8F', '#F4E9D8'],
}

export function Placeholder({ label, variant = 'product', seed = 1 }: PlaceholderProps) {
  const [bg, fg] = palettes[variant] ?? palettes.product
  const id = `ph-${label.replace(/\W/g, '')}-${seed}`
  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={label}
      style={{ width: '100%', height: '100%' }}
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={bg} stopOpacity="0.95" />
          <stop offset="100%" stopColor={bg} stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill={`url(#${id})`} />
      <g fill={fg} opacity="0.95">
        <ellipse cx="200" cy="190" rx="62" ry="48" />
        <ellipse cx="142" cy="120" rx="26" ry="32" />
        <ellipse cx="258" cy="120" rx="26" ry="32" />
        <ellipse cx="172" cy="86" rx="22" ry="26" />
        <ellipse cx="228" cy="86" rx="22" ry="26" />
      </g>
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill={fg}
        fontFamily="Poppins, sans-serif"
        fontWeight="700"
        fontSize="22"
        opacity="0.9"
      >
        {label}
      </text>
    </svg>
  )
}