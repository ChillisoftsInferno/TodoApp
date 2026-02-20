import '@mui/material';
import type { AllColors } from './shared';
declare type PaletteColor = import('@mui/material/styles').PaletteColor;
declare type PaletteColorOptions = import('@mui/material/styles').PaletteColorOptions;

declare module '@mui/material/styles' {
  interface Palette {
    extraColor: PaletteColor
    designColors: AllColors
  }

  interface PaletteOptions {
    extraColor?: PaletteColorOptions
    designColors?: AllColors
  }
}
