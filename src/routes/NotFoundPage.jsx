import { Link } from 'react-router'
import { Button } from '@/components/ui/button'

export default function NotFoundPage() {
  return (
    <div className="space-y-4 text-center">
      <h1 className="text-2xl font-semibold text-foreground">Episode not found</h1>
      <p className="text-sm text-muted-foreground">
        That episode doesn't exist, or the URL is wrong.
      </p>
      <Button asChild>
        <Link to="/">Back to all episodes</Link>
      </Button>
    </div>
  )
}
