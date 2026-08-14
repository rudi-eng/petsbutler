interface LogoProps {
  size?: number
  light?: boolean
}

export function LogoMark({ size = 38, light = false }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className="brand__mark"
    >
      <circle
        cx="32"
        cy="32"
        r="30"
        fill={light ? '#ffffff' : '#2A9D8F'}
      />
      <g fill={light ? '#2A9D8F' : '#F4E9D8'}>
        <ellipse cx="32" cy="40" rx="11" ry="9" />
        <ellipse cx="20" cy="27" rx="5" ry="6" />
        <ellipse cx="44" cy="27" rx="5" ry="6" />
        <ellipse cx="26" cy="20" rx="4" ry="5" />
        <ellipse cx="38" cy="20" rx="4" ry="5" />
      </g>
    </svg>
  )
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.6rem',
        fontFamily: 'var(--font-head)',
        fontWeight: 800,
        color: light ? '#fff' : 'var(--charcoal)',
        fontSize: '1.05rem',
        letterSpacing: '-0.01em',
      }}
    >
      <LogoMark size={34} light={light} />
      <span>
        The Pet<span style={{ color: light ? '#F4E9D8' : 'var(--teal)' }}>'</span>s Butler
      </span>
    </span>
  )
}