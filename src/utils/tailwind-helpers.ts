import type { DaisyUIThemeColorNames } from "./daisyui-theme-types.js";
import type { ShadcnVariableKey } from "./shadcn-theme-type.js";

export const getDaiyuiTailwindBg = (
  color?: DaisyUIThemeColorNames[number],
    fallbackColor?: string
): {
  bg: string;
  bg_muted: string;
  content: string;
} => {
  switch (color) {
    // primary
    case 'primary':
      return {
        bg: 'bg-primary',
        bg_muted: 'bg-primary/20',
        content: 'text-primary-content',
      };
    case 'primary-content':
      return {
        bg: 'bg-primary-content',
        bg_muted: 'bg-primary-content/20',
        content: 'text-primary',
      };

    // secondary
    case 'secondary':
      return {
        bg: 'bg-secondary',
        bg_muted: 'bg-secondary/20',
        content: 'text-secondary-content',
      };
    case 'secondary-content':
      return {
        bg: 'bg-secondary-content',
        bg_muted: 'bg-secondary-content/20',
        content: 'text-secondary',
      };

    // accent
    case 'accent':
      return {
        bg: 'bg-accent',
        bg_muted: 'bg-accent/20',
        content: 'text-accent-content',
      };
    case 'accent-content':
      return {
        bg: 'bg-accent-content',
        bg_muted: 'bg-accent-content/20',
        content: 'text-accent',
      };

    // neutral
    case 'neutral':
      return {
        bg: 'bg-neutral',
        bg_muted: 'bg-neutral/20',
        content: 'text-neutral-content',
      };
    case 'neutral-content':
      return {
        bg: 'bg-neutral-content',
        bg_muted: 'bg-neutral-content/20',
        content: 'text-neutral',
      };

    // base
    case 'base-100':
      return {
        bg: 'bg-base-100',
        bg_muted: 'bg-base-100/20',
        content: 'text-base-content',
      };
    case 'base-200':
      return {
        bg: 'bg-base-200',
        bg_muted: 'bg-base-200/20',
        content: 'text-base-content',
      };
    case 'base-300':
      return {
        bg: 'bg-base-300',
        bg_muted: 'bg-base-300/20',
        content: 'text-base-content',
      };
    case 'base-content':
      return {
        bg: 'bg-base-content',
        bg_muted: 'bg-base-content/20',
        content: 'text-base-100',
      };
    // info
    case 'info':
      return {
        bg: 'bg-info',
        bg_muted: 'bg-info/20',
        content: 'text-info-content',
      };
    case 'info-content':
      return {
        bg: 'bg-info-content',
        bg_muted: 'bg-info-content/20',
        content: 'text-info',
      };

    // success
    case 'success':
      return {
        bg: 'bg-success',
        bg_muted: 'bg-success/20',
        content: 'text-success-content',
      };
    case 'success-content':
      return {
        bg: 'bg-success-content',
        bg_muted: 'bg-success-content/20',
        content: 'text-success',
      };

    // warning
    case 'warning':
      return {
        bg: 'bg-warning',
        bg_muted: 'bg-warning/20',
        content: 'text-warning-content',
      };
    case 'warning-content':
      return {
        bg: 'bg-warning-content',
        bg_muted: 'bg-warning-content/20',
        content: 'text-warning',
      };

    // error
    case 'error':
      return {
        bg: 'bg-error',
        bg_muted: 'bg-error/20',
        content: 'text-error-content',
      };
    case 'error-content':
      return {
        bg: 'bg-error-content',
        bg_muted: 'bg-error-content/20',
        content: 'text-error',
      };

    default:
      return {
        bg: `bg-${fallbackColor}`,
        bg_muted: `bg-${fallbackColor}/20`,
        content: `text-${fallbackColor}/20`,
      };
  }
};



// New function for shadcn theme variables
export const getShadcnTailwindBg = (
  color?: ShadcnVariableKey,
  fallbackColor?: string
): {
  bg: string;
  bg_muted: string;
  content: string;
} => {
  switch (color) {
    // Background/foreground
    case '--background':
      return {
        bg: 'bg-background',
        bg_muted: 'bg-background/20',
        content: 'text-foreground',
      };
    case '--foreground':
      return {
        bg: 'bg-foreground',
        bg_muted: 'bg-foreground/20',
        content: 'text-background',
      };

    // Card
    case '--card':
      return {
        bg: 'bg-card',
        bg_muted: 'bg-card/20',
        content: 'text-card-foreground',
      };
    case '--card-foreground':
      return {
        bg: 'bg-card-foreground',
        bg_muted: 'bg-card-foreground/20',
        content: 'text-card',
      };

    // Popover
    case '--popover':
      return {
        bg: 'bg-popover',
        bg_muted: 'bg-popover/20',
        content: 'text-popover-foreground',
      };
    case '--popover-foreground':
      return {
        bg: 'bg-popover-foreground',
        bg_muted: 'bg-popover-foreground/20',
        content: 'text-popover',
      };

    // Primary
    case '--primary':
      return {
        bg: 'bg-primary',
        bg_muted: 'bg-primary/20',
        content: 'text-primary-foreground',
      };
    case '--primary-foreground':
      return {
        bg: 'bg-primary-foreground',
        bg_muted: 'bg-primary-foreground/20',
        content: 'text-primary',
      };

    // Secondary
    case '--secondary':
      return {
        bg: 'bg-secondary',
        bg_muted: 'bg-secondary/20',
        content: 'text-secondary-foreground',
      };
    case '--secondary-foreground':
      return {
        bg: 'bg-secondary-foreground',
        bg_muted: 'bg-secondary-foreground/20',
        content: 'text-secondary',
      };

    // Muted
    case '--muted':
      return {
        bg: 'bg-muted',
        bg_muted: 'bg-muted/20',
        content: 'text-muted-foreground',
      };
    case '--muted-foreground':
      return {
        bg: 'bg-muted-foreground',
        bg_muted: 'bg-muted-foreground/20',
        content: 'text-muted',
      };

    // Accent
    case '--accent':
      return {
        bg: 'bg-accent',
        bg_muted: 'bg-accent/20',
        content: 'text-accent-foreground',
      };
    case '--accent-foreground':
      return {
        bg: 'bg-accent-foreground',
        bg_muted: 'bg-accent-foreground/20',
        content: 'text-accent',
      };

    // Destructive
    case '--destructive':
      return {
        bg: 'bg-destructive',
        bg_muted: 'bg-destructive/20',
        content: 'text-destructive-foreground',
      };

    // Border and Input
    case '--border':
      return {
        bg: 'bg-border',
        bg_muted: 'bg-border/20',
        content: 'text-foreground',
      };
    case '--input':
      return {
        bg: 'bg-input',
        bg_muted: 'bg-input/20',
        content: 'text-foreground',
      };
    case '--ring':
      return {
        bg: 'bg-ring',
        bg_muted: 'bg-ring/20',
        content: 'text-foreground',
      };

    // Chart colors
    case '--chart-1':
      return {
        bg: 'bg-[chart-1]',
        bg_muted: 'bg-[--chart-1]/20',
        content: 'text-foreground',
      };
    case '--chart-2':
      return {
        bg: 'bg-[--chart-2]',
        bg_muted: 'bg-[--chart-2]/20',
        content: 'text-foreground',
      };
    case '--chart-3':
      return {
        bg: 'bg-[--chart-3]',
        bg_muted: 'bg-[--chart-3]/20',
        content: 'text-foreground',
      };
    case '--chart-4':
      return {
        bg: 'bg-chart-4',
        bg_muted: 'bg-[--chart-4]/20',
        content: 'text-foreground',
      };
    case '--chart-5':
      return {
        bg: 'bg-[--chart-5]',
        bg_muted: 'bg-[--chart-5]/20',
        content: 'text-foreground',
      };

    // Sidebar
    case '--sidebar':
      return {
        bg: 'bg-sidebar',
        bg_muted: 'bg-sidebar/20',
        content: 'text-sidebar-foreground',
      };
    case '--sidebar-foreground':
      return {
        bg: 'bg-sidebar-foreground',
        bg_muted: 'bg-sidebar-foreground/20',
        content: 'text-sidebar',
      };
    case '--sidebar-primary':
      return {
        bg: 'bg-sidebar-primary',
        bg_muted: 'bg-sidebar-primary/20',
        content: 'text-sidebar-primary-foreground',
      };
    case '--sidebar-primary-foreground':
      return {
        bg: 'bg-sidebar-primary-foreground',
        bg_muted: 'bg-sidebar-primary-foreground/20',
        content: 'text-sidebar-primary',
      };
    case '--sidebar-accent':
      return {
        bg: 'bg-sidebar-accent',
        bg_muted: 'bg-sidebar-accent/20',
        content: 'text-sidebar-accent-foreground',
      };
    case '--sidebar-accent-foreground':
      return {
        bg: 'bg-sidebar-accent-foreground',
        bg_muted: 'bg-sidebar-accent-foreground/20',
        content: 'text-sidebar-accent',
      };
    case '--sidebar-border':
      return {
        bg: 'bg-sidebar-border',
        bg_muted: 'bg-sidebar-border/20',
        content: 'text-sidebar-foreground',
      };
    case '--sidebar-ring':
      return {
        bg: 'bg-sidebar-ring',
        bg_muted: 'bg-sidebar-ring/20',
        content: 'text-sidebar-foreground',
      };
    


    default:
      return {
        bg: 'bg-background',
        bg_muted: 'bg-background/20',
        content: 'text-foreground',
      };
  }
};
