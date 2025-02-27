export const defaultTheme = {
  colors: {
    primary: "#4ecdc4",
    secondary: "#ff6b6b",
    background: "#1a1a1a",
    text: "#ffffff",
  },
  transitions: {
    default: "all 0.3s ease",
  },
  breakpoints: {
    mobile: "768px",
    tablet: "1024px",
  },
}

export const lightTheme = {
  ...defaultTheme,
  background: "linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)",
  text: "#000000",
  primary: "#4ebdb4",
  secondary: "#ff6b6b",
  surface: "#ffffff",
}

export const darkTheme = {
  ...defaultTheme,
  background: "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)",
  text: "#ffffff",
  primary: "#4ecdc4",
  secondary: "#ff6b6b",
  surface: "#2a2a2a",
}

export type Theme = typeof lightTheme
