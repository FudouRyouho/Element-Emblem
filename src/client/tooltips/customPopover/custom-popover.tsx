//src\modules\tooltips\customPopover\custom-popover.tsx
import React, {useState, forwardRef} from "react";
import Tippy, {TippyProps} from "@tippyjs/react";
import * as Popper from '@popperjs/core';
//import 'tippy.js/dist/tippy.css';

interface IProps {
    children?: React.ReactNode;
    popover?: React.ReactNode;
    enabled?: boolean;
    Class?: string;
    placement: Popper.Placement;
}

const LazyTippy = forwardRef<HTMLElement, TippyProps>((props, ref) => {
  const [mounted, setMounted] = useState(false);

  const lazyPlugin = {
    fn: () => ({
      onMount: () => setMounted(true),
      onHidden: () => setMounted(false)
    })
  };

  const computedProps = { ...props };

  computedProps.plugins = [lazyPlugin, ...(props.plugins || [])];

  if (props.render) {
    computedProps.render = (...args) => (mounted ? props.render!(...args) : '');
  } else {
    computedProps.content = mounted ? props.content : '';
  }

  return <Tippy {...computedProps} ref={ref} />;
});

  export const CustomPopover: React.FC<IProps> = ({
    children,
    popover,
    enabled,
    Class,
    placement
  }) => {
    if (enabled) {
      return (
        <LazyTippy
          className={Class}
          placement={placement}
          interactive={true}
          disabled={!enabled}
          animation="none"
          inertia={true}
          duration={[0, 1]}
          touch={true}
          maxWidth={'none'}
          popperOptions={{
            modifiers: [
              {
                name: 'flip',
                enabled: false,
                options: {
                  fallbackPlacements: ['bottom'],
                  allowedAutoPlacements: ['bottom']
                }
              },
              {
                name: 'eventListeners',
                options: {
                  scroll: false
                }
              }
            ],
            placement: 'bottom'
          }}
          trigger="mouseenter focus"
          content={popover}
        >
          <span>{children}</span>
        </LazyTippy>
      );
    } else {
      return <span>{children}</span>;
    }
  };