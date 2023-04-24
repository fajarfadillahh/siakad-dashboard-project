import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

// SETUP COLORS
const GREY = {
  0: "#FFFFFF",
  100: "#f3f4f6",
  200: "#e5e7eb",
  300: "#d1d5db",
  400: "#9ca3af",
  500: "#6b7280",
  600: "#4b5563",
  700: "#374151",
  800: "#1f2937",
  900: "#111827",
};

const PRIMARY = {
  lighter: "#dbeafe",
  light: "#93c5fd",
  main: "#2563eb",
  dark: "#1d4ed8",
  darker: "#1e3a8a",
  contrastText: "#fff",
};

const SECONDARY = {
  lighter: "#e0f2fe",
  light: "#7dd3fc",
  main: "#0ea5e9",
  dark: "#0369a1",
  darker: "#075985",
  contrastText: "#fff",
};

const INFO = {
  lighter: "#cffafe",
  light: "#67e8f9",
  main: "#06b6d4",
  dark: "#0e7490",
  darker: "#155e75",
  contrastText: "#fff",
};

const SUCCESS = {
  lighter: "#f0fdf4",
  light: "#86efac",
  main: "#22c55e",
  dark: "#15803d",
  darker: "#14532d",
  contrastText: GREY[800],
};

const WARNING = {
  lighter: "#fef9c3",
  light: "#fde047",
  main: "#eab308",
  dark: "#ca8a04",
  darker: "#854d0e",
  contrastText: GREY[800],
};

const ERROR = {
  lighter: "#fee2e2",
  light: "#fca5a5",
  main: "#ef4444",
  dark: "#dc2626",
  darker: "#991b1b",
  contrastText: "#fff",
};

const palette = {
  common: { black: "#000", white: "#fff" },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: alpha(GREY[500], 0.24),
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    disabled: GREY[500],
  },
  background: {
    paper: "#fff",
    default: GREY[100],
    neutral: GREY[200],
  },
  action: {
    active: GREY[600],
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default palette;
