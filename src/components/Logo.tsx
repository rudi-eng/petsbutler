interface LogoProps {
  size?: number
  light?: boolean
}

export function LogoMark({ size = 38, light = false }: LogoProps) {
  return (
    <img
      src="/logo.jpg"
      alt=""
      width={size}
      height={size}
      className={`brand__mark${light ? ' brand__mark--light' : ''}`}
      style={{ width: size, height: size }}
    />
  )
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span
      className="brand__lockup"
      style={{
        color: light ? '#fff' : 'var(--charcoal)',
      }}
    >
      <LogoMark size={48} light={light} />
      <span className="brand__name">
        The Pet<span style={{ color: light ? '#F4E9D8' : 'var(--teal)' }}>'</span>s Butler
      </span>
    </span>
  )
}
