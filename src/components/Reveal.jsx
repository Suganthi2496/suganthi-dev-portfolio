import { useInView } from '../hooks/useInView'

// Wraps children and fades/slides them in when scrolled into view.
export default function Reveal({ children, as: Tag = 'div', className = '', style }) {
  const [ref, inView] = useInView()
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`.trim()}
      style={style}
    >
      {children}
    </Tag>
  )
}
