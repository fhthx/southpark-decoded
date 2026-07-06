import { useTheme } from '@/hooks/use-theme'
import stanPompom from '@/assets/pompoms/stan.svg'
import cartmanPompom from '@/assets/pompoms/cartman.svg'

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

  if (character === 'stan') {
    return (
      <img
        aria-hidden
        alt=""
        src={stanPompom}
        className="absolute -top-6 left-1/2 h-12 w-auto -translate-x-1/2"
      />
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

  return null
}
