declare module "@mui/material/styles" {
  // interface Theme {
  //   customColors: {
  //     danger: React.CSSProperties["color"]
  //   }
  // }

  interface Palette {
    customColors?: {
      green100: React.CSSProperties["color"]
      green200: React.CSSProperties["color"]
    }
  }

  interface PaletteOptions {
    customColors?: {
      green100: React.CSSProperties["color"]
      green200: React.CSSProperties["color"]
    }
  }

  // interface PaletteColor {
  //   face?: React.CSSProperties["color"]
  // }

  // interface SimplePaletteColorOptions {
  //   face?: React.CSSProperties["color"]
  // }

  interface ThemeOptions {
    customColors?: {
      green100: React.CSSProperties["color"]
      green200: React.CSSProperties["color"]
    }
  }
}
import { PaletteOptions, createTheme, css, ThemeOptions } from "@mui/material/styles"
import Overrides from "./overrides"
export type AllowedTheme = NonNullable<PaletteOptions["mode"]>
import { Theme } from "@mui/material/styles"
export const DEFAULT_THEME: AllowedTheme = "light"

// ** Vars
import { deepPurple, green, grey, brown } from "@mui/material/colors"

export let lightTheme: Theme = createTheme({
  palette: {
    mode: "light",

    customColors: {
      green100: green[100],
      green200: green[200],
    },

    primary: {
      main: brown[600],
    },
    secondary: {
      main: brown[400],
    },
    background: {
      default: grey[50],
      paper: green[50],
    },
    text: {
      primary: grey[800],
      secondary: grey[700],
      disabled: "rgba(94,53,177,0.36)",
    },
    divider: "rgba(224,190,190,0.18)",
  },
  typography: {
    fontFamily: "Roboto Condensed",
  },
})

const overrideComponents = Overrides(lightTheme)

lightTheme = createTheme(lightTheme, {
  components: {
    ...overrideComponents,
  },
})
export let darkTheme = createTheme({
  palette: {
    mode: "dark",

    // customColors: {
    //   face: "#ccc",
    // },

    primary: {
      main: "#4d4ddc",
    },
    secondary: {
      main: "#afafd2",
    },
    background: {
      default: "#111333",
      paper: "#141b60",
    },
    text: {
      secondary: "#f1bcbc",
      disabled: "rgba(216,213,213,0.38)",
      primary: "#efefef",
    },
    divider: "rgba(224,190,190,0.18)",
  },
  typography: {
    fontFamily: "Roboto Condensed",
  },

  components: {},
})
darkTheme = createTheme(darkTheme, {
  components: {
    ...overrideComponents,
    // MuiCard: {
    //   defaultProps: {
    //     elevation: 12,
    //   },
    //   styleOverrides: {
    //     root: {},
    //   },
    // },
    // MuiTypography: {
    //   styleOverrides: {
    //     // h5: {
    //     //   "font-size": "36px",
    //     // },
    //   },
    // },
    // MuiOutlinedInput: {
    //   styleOverrides: {
    //     notchedOutline: {
    //       borderColor: "#fdf2f2",
    //     },
    //   },
    // },
    // // color: "#6adc4d;",
    // MuiTabs: {
    //   styleOverrides: {
    //     indicator: {
    //       background: "#6adc4d",
    //     },
    //   },
    // },
    // MuiTab: {
    //   styleOverrides: {
    //     root: {
    //       "&.Mui-selected": {
    //         color: "#6adc4d",
    //       },
    //       "&:hover": {
    //         color: "#6adc4d",
    //       },
    //     },
    //   },
    // },
  },
})
export const globalStyles = {
  face: deepPurple[400],
}
