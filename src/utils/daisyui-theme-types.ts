export const daisyui_theme_variables = [
  "theme-name",
  "color-scheme",
  "--color-primary",
  "--color-primary-content",
  "--color-secondary",
  "--color-secondary-content",
  "--color-accent",
  "--color-accent-content",
  "--color-neutral",
  "--color-neutral-content",
  "--color-base-100",
  "--color-base-200",
  "--color-base-300",
  "--color-base-content",
  "--color-info",
  "--color-info-content",
  "--color-success",
  "--color-success-content",
  "--color-warning",
  "--color-warning-content",
  "--color-error",
  "--color-error-content",
  "--rounded-box",
  "--rounded-btn",
  "--rounded-badge",
  "--animation-btn",
  "--animation-input",
  "--btn-focus-scale",
  "--border-btn",
  "--tab-border",
  "--tab-radius",
  "data-theme",
] as const;
export type DaisyUIThemeVariables = typeof daisyui_theme_variables;

export const daisyui_theme_config_names = ["theme-name", "color-scheme"];

export const daisyui_theme_color_names = [
  "primary",
  "primary-content",
  "secondary",
  "secondary-content",
  "accent",
  "accent-content",
  "neutral",
  "neutral-content",
  "base-100",
  "base-200",
  "base-300",
  "base-content",
  "info",
  "info-content",
  "success",
  "success-content",
  "warning",
  "warning-content",
  "error",
  "error-content",
] as const;

export const daisyui_theme_curve_names = [
  "--animation-btn",
  "--animation-input",
  "--btn-focus-scale",
  "--border-btn",
  "--tab-border",
  "--tab-radius",
  "--rounded-box",
  "--rounded-btn",
  "--rounded-badge",
] as const;

export const daisyui_theme_names = [
  ...daisyui_theme_config_names,
  ...daisyui_theme_color_names,
  ...daisyui_theme_curve_names,
] as const;
export type DaisyUIThemeNames = typeof daisyui_theme_names;
export type DaisyUIThemeColorNames = typeof daisyui_theme_color_names;
export type DaisyUIThemeCurvesNames = typeof daisyui_theme_curve_names;
export type DaisyUIThemeConfigNames = typeof daisyui_theme_config_names;

// export type  DaisyUIThemeColorNames = Omit<DaisyUIThemeNames, 'theme-name' | 'color-scheme' | '--animation-btn' | '--animation-input' | '--btn-focus-scale' | '--border-btn' | '--tab-border' | '--tab-radius' | '--rounded-box' | '--rounded-btn' | '--rounded-badge'>
export type OneDaisyUIThemeType = {
  name: DaisyUIThemeNames[number];
  variable: DaisyUIThemeVariables[number];
  value: string;
  locked?: boolean;
  type: "color" | "curve" | "theme-name" | "color-scheme";
};
export type DaisyUIThemeObjectType = {
  [key in DaisyUIThemeNames[number]]?: OneDaisyUIThemeType;
};
