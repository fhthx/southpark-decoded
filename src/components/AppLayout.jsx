import { Link, Outlet, useNavigation } from 'react-router'
import { Skeleton } from '@/components/ui/skeleton'

export default function AppLayout() {
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'

  return (
    <div className="mx-auto min-h-svh max-w-4xl px-4 py-8">
      <header className="mb-8">
        <Link to="/" className="text-2xl font-semibold tracking-tight text-foreground">
          South Park Decoded
        </Link>
        <p className="mt-1 text-sm text-muted-foreground">
          Every episode, and the real-world story behind it.
        </p>
      </header>

      {isLoading ? (
        <div className="space-y-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="h-12 w-full" />
          ))}
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  )
}
