import { X } from 'lucide-react'
import { useNavigate } from 'react-router'
import { Button } from '@/components/ui/button'
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle } from '@/components/ui/drawer'
import { useIsMobile } from '@/hooks/use-mobile'

export default function EpisodeNotFoundDrawer() {
  const navigate = useNavigate()
  const isMobile = useIsMobile()

  return (
    <Drawer
      direction={isMobile ? 'bottom' : 'right'}
      open
      onOpenChange={(open) => {
        if (!open) navigate('/')
      }}
    >
      <DrawerContent className="sm:max-w-2xl! data-[vaul-drawer-direction=bottom]:mt-0 data-[vaul-drawer-direction=bottom]:max-h-[75vh]">
        <DrawerClose asChild>
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Close"
            className="absolute top-4 right-4 z-10"
          >
            <X />
          </Button>
        </DrawerClose>

        <DrawerHeader>
          <DrawerTitle>Episode not found</DrawerTitle>
        </DrawerHeader>
        <div className="space-y-4 px-4 pb-4">
          <p className="text-sm text-muted-foreground">
            That episode doesn't exist, or the URL is wrong.
          </p>
          <Button onClick={() => navigate('/')}>Back to all episodes</Button>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
