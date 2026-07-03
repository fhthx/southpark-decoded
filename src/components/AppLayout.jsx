import { Link, Outlet } from 'react-router'

export default function AppLayout() {
  return (
    <div className="mx-auto min-h-svh max-w-4xl px-4 py-8">
      <header className="mb-8 text-center sm:text-left">
        <Link to="/" className="text-2xl font-semibold tracking-tight text-foreground">
          South Park Decoded
        </Link>
        <p className="mt-1 text-sm text-muted-foreground">
          Every episode, and the real-world story behind it.
        </p>
      </header>

      <Outlet />
    </div>
  )
}
