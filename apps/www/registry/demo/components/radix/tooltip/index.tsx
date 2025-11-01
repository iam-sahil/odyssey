import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  type TooltipContentProps,
} from '@/registry/components/radix/tooltip';
import { Button } from '@workspace/ui/components/ui/button';

interface RadixTooltipDemoProps {
  side: TooltipContentProps['side'];
  sideOffset: TooltipContentProps['sideOffset'];
  align: TooltipContentProps['align'];
  alignOffset: TooltipContentProps['alignOffset'];
}

export function RadixTooltipDemo({
  side,
  sideOffset,
  align,
  alignOffset,
}: RadixTooltipDemoProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover</Button>
      </TooltipTrigger>
      <TooltipContent
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
      >
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  );
}
