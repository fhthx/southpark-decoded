import { X } from "lucide-react";
import { useLoaderData, useNavigate } from "react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import EpisodeExplanation from "@/components/EpisodeExplanation";
import { formatAirDate } from "@/lib/format-date";
import { useIsMobile } from "@/hooks/use-mobile";

export default function EpisodeDrawer() {
  const episode = useLoaderData();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  return (
    <Drawer
      direction={isMobile ? "bottom" : "right"}
      open
      onOpenChange={(open) => {
        if (!open) navigate("/");
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
          <DrawerTitle className="text-xl">{episode.name}</DrawerTitle>
          <div className="mt-1 flex items-center gap-2">
            <Badge className="h-4 bg-character-secondary px-1.5 text-[10px] text-character-secondary-foreground">
              S{episode.season} · E{episode.episode}
            </Badge>
            <Badge className="h-4 bg-character-secondary px-1.5 text-[10px] text-character-secondary-foreground">
              {formatAirDate(episode.air_date)}
            </Badge>
          </div>
        </DrawerHeader>

        <ScrollArea className="min-h-0 flex-1 px-4 pb-4 no-scrollbar overflow-y-scroll">
          <div className="space-y-6">
            <img
              src={episode.thumbnail_url}
              alt=""
              className="w-full rounded-lg object-cover"
            />
            <div className="space-y-2">
              <p className="font-medium text-foreground">Description</p>
              <p className="text-sm leading-relaxed">{episode.description}</p>
            </div>

            <EpisodeExplanation episodeId={episode.id} />
          </div>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
}
