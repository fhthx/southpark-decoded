import { useTheme } from '@/hooks/use-theme'
import cartmanPompom from '@/assets/pompoms/cartman.svg'

// A handful of overlapping rounded lobes, positioned to read as a single
// irregular clump/tuft rather than a perfect circle or radiating starburst.
// Used for Stan, who doesn't have a dedicated pompom asset yet.
const LOBES = [
  { size: 22, x: 0, y: 3 },
  { size: 18, x: -10, y: -2 },
  { size: 18, x: 10, y: -3 },
  { size: 16, x: -3, y: -10 },
  { size: 15, x: 8, y: -9 },
  { size: 14, x: -13, y: 6 },
]

function Pompom() {
  return (
    <div aria-hidden className="absolute -top-5 left-1/2 h-8 w-11 -translate-x-1/2">
      <div className="relative size-full">
        {LOBES.map((lobe, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-black/40"
            style={{
              width: lobe.size,
              height: lobe.size,
              left: `calc(50% + ${lobe.x}px)`,
              top: `calc(50% + ${lobe.y}px)`,
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'var(--character-bobble)',
            }}
          />
        ))}
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

  if (character === 'cartman') {
    return (
      <img
        aria-hidden
        alt=""
        src={cartmanPompom}
        className="absolute -top-4 left-1/2 h-6 w-auto -translate-x-1/2"
      />
    )
  }

  if (character === 'stan') {
    return <Pompom />
  }

  return null
}
