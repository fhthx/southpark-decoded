import { useTheme } from '@/hooks/use-theme'

const PETAL_COUNT = 14

function Pompom() {
  return (
    <div
      aria-hidden
      className="absolute -top-6 left-1/2 size-14 -translate-x-1/2"
    >
      <div className="relative size-full">
        {Array.from({ length: PETAL_COUNT }).map((_, i) => {
          const angle = (360 / PETAL_COUNT) * i
          return (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-2.5 h-5 rounded-full border border-black/40"
              style={{
                backgroundColor: 'var(--character-secondary)',
                transform: `translate(-50%, -100%) rotate(${angle}deg)`,
                transformOrigin: 'bottom center',
              }}
            />
          )
        })}
        <div
          className="absolute top-1/2 left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/40"
          style={{ backgroundColor: 'var(--character-secondary)' }}
        />
      </div>
    </div>
  )
}

// Small decorative shapes on the header bar that echo each character's hat.
// Kenny's look is handled by the header itself (see AppLayout), not an
// overlay shape.
export default function CharacterHatDecoration() {
  const { character } = useTheme()

  if (character === 'kyle') {
    return (
      <>
        <div
          aria-hidden
          className="absolute top-0 -left-4 h-28 w-9 rounded-b-full"
          style={{ backgroundColor: 'var(--character)' }}
        />
        <div
          aria-hidden
          className="absolute top-0 -right-4 h-28 w-9 rounded-b-full"
          style={{ backgroundColor: 'var(--character)' }}
        />
      </>
    )
  }

  if (character === 'stan' || character === 'cartman') {
    return <Pompom />
  }

  return null
}
