import { useNavigate } from 'react-router'
import { Button } from '@/components/ui/button'
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from '@/components/ui/drawer'
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
