export default function ArroLogo({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 44"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="ARRO"
    >
      {/* Geometric "A" chevron mark — faithful to the brand asset */}
      <path d="M20 0 L0 40 L7 40 L20 12 L33 40 L40 40 Z" />
    </svg>
  )
}
