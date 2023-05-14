import { createTheme } from "@mui/material/styles";

// declare module "@mui/material/styles" {
//   interface Palette {
//     gray: Palette["primary"];
//   }
//   interface PaletteOptions {
//     gray: PaletteOptions["primary"];
//   }
// }
export const color = {
  hover: "#A8A8A8",
  selected: "#009BEB",
  selectedBackground: "#22DCF914",
  border: "#c1bdd1",
};

// eslint-disable-next-line import/no-mutable-exports
let theme = createTheme({
  palette: {
    // mode: "dark",
    primary: {
      main: "#141414",
      light: "#313133",
      dark: "#131313",
      contrastText: "#333333",
    },
    secondary: {
      main: "#5A5A5A",
      light: "##E0E0E2",
      contrastText: "#141414",
    },
    error: {
      main: "#FF7171",
      dark: "#FC5462",
      contrastText: "#F0F0F2",
    },
    warning: {
      main: "#FF7171",
      contrastText: "#F0F0F2",
      dark: "#FC5462",
    },
    info: {
      main: "#5f49a6",
      light: "#5f49a6",
      // dark: "#0086A2",
      dark: "rgba(95, 73, 166, 0.7)",

      contrastText: "#F0F0F2",
    },
    background: {
      default: "#141414",
      // paper: "#39393B",
    },
    text: {
      primary: "#333333",
      secondary: "rgba(240,240,242,0.64)",
      disabled: "rgba(255,255,255,0.3)",
    },
    success: {
      main: "#3ED1AF",
      contrastText: "#F0F0F2",
    },
    gray: {
      main: "gray",
    },
  },
  shape: {
    borderRadius: 6,
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Noto Sans KR"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),

    fontSize: 14,
    htmlFontSize: 16,
    body1: {
      lineHeight: 1.4,
    },
  },
});

theme = createTheme(theme, {
  components: {
    MuiBox: {
      styleOverrides: {
        root: {
          color: theme.palette.secondary.main,
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          fontSize: "15px",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        color: "info",
      },
      styleOverrides: {
        root: {
          boxShadow: "none",
          padding: "12px 10px",
          fontSize: "15px",
          fontWeight: "normal",
          textTransform: "none",
          lineHeight: "1.4",
          "&.MuiButton-root.MuiButton-containedPrimary": {
            background:
              "transparent linear-gradient(90deg, #35BBB2 0%, #009BEB 17%, #0079B8 100%) 0% 0% no-repeat padding-box",
          },
          "&.MuiButton-root.MuiButton-containedSecondary": {
            border: "1px solid #484848",
            color: "#E5E5E5",
          },
          "&.MuiButton-root.MuiButton-outlined": {
            color: "#E5E5E5",
          },
          "&.Mui-disabled": {
            background: "#303133 !important",
            border: "1px solid #303133 !important",
            color: "#5A5A5A !important",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,

          "&.MuiIconButton-colorPrimary, &.MuiIconButton-colorSecondary": {
            border: `1px ${color.border} solid`,
          },

          "&.MuiIconButton-colorWarning": {
            backgroundColor: theme.palette.warning.main,
          },
          "&.MuiIconButton-colorError": {
            backgroundColor: theme.palette.error.main,
          },
          "&.MuiIconButton-colorInfo": {
            backgroundColor: theme.palette.info.main,
          },
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          "& .MuiLinearProgress-bar.MuiLinearProgress-barColorPrimary": {
            background: "#009BEB",
          },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          fontSize: "15px",
          boxSizing: "border-box",
          textTransform: "none",
          padding: "8px 8px",
          "&:hover": {
            border: `1px ${theme.palette.info.light} solid`,
            backgroundColor: `${theme.palette.info.light}14`,
          },

          "&:active": {
            backgroundColor: `${theme.palette.info.light}29`,
          },

          "&:active, &.Mui-selected": {
            outline: `1px ${theme.palette.info.light} solid`,
            color: theme.palette.info.light,
            backgroundColor: "#1e2e36",
          },
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          marginLeft: 3,
          marginRight: 3,
          fontSize: "",

          "&.MuiPaginationItem-previousNext, &.MuiPaginationItem-firstLast": {
            "&.Mui-disabled": {
              backgroundColor: "unset",
              cursor: "not-allowed",
            },
          },
        },
      },
    },
    // Input
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#fefdff",
          borderRadius: 6,
          outline: "none",
          boxShadow: `0 0 0 1px ${color.border}`,
          border: 0,
          transition: "0.2s ease",
          transitionProperty: "color, outline, box-shadow",
          color: "#A8A8A8",
          "& .MuiInputBase-input": {
            paddingTop: 12,
            paddingBottom: 12,
            lineHeight: "1.4",
          },

          "& .MuiOutlinedInput-notchedOutline": {
            border: 0,
            outline: 0,
            boxShadow: "none",
          },
          "&.Mui-disabled": {
            backgroundColor: "#4A4A4C",
            outline: 0,
            border: 0,
            boxShadow: "none",
          },
          "&:not(.Mui-disabled):hover": {
            border: 0,
            // outline: `1px solid ${theme.palette.info.light}`,
            outline: "none",
            boxShadow: `0 0 0 1px ${color.hover}`,
          },

          "&.Mui-focused, &.Mui-focused:hover": {
            // outline: `2px solid ${theme.palette.info.light}`,
            outline: "none",
            boxShadow: `0 0 0 2px ${theme.palette.info.light}`,
          },

          "&.Mui-error": {
            // outlineColor: theme.palette.error.main,
            outline: "none",
            boxShadow: `0 0 0 1px ${theme.palette.error.main}`,
            backgroundColor: "#FF71710F",
          },

          "& ::-webkit-search-cancel-button": {
            appearance: "none",
            width: 28,
            height: 28,
            backgroundImage: "url(img/icons/icon_clear.svg)",
            backgroundSize: "contain",
          },
        },
      },
    },

    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: 12,
          fontWeight: "bold",
          marginLeft: 0,
        },
      },
    },

    MuiChip: {
      defaultProps: {
        variant: "outlined",
      },
    },

    MuiSlider: {
      styleOverrides: {
        root: {
          "&.MuiSlider-colorPrimary": {
            color: color.selected,
          },
          "& .MuiSlider-rail": {
            color: "#4d4d4d",
            background: "#4d4d4d",
            opacity: 1,
          },
          "& .MuiSlider-thumb": {
            width: "20px",
            height: "20px",
            border: "2.5px solid #212121",
          },
        },
      },
    },

    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&.Mui-checked": {
            color: color.selected,
          },
          "&:hover": {
            backgroundColor: `${color.selected}14`,
          },
          "&.Mui-disabled": {
            backgroundColor: "unset",
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          fontSize: "15px",
          "&.Mui-checked": {
            color: color.selected,
          },
          "&:hover": {
            backgroundColor: `${color.selected}14`,
            color: color.selected,
          },
          "&.Mui-disabled": {
            color: "#919193",
            backgroundColor: "unset",
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          "& .MuiSwitch-switchBase.Mui-checked": {
            color: color.selected,
            "&:hover": {
              backgroundColor: `${color.selected}14`,
            },
          },
          "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
            backgroundColor: "#326D75",
          },

          "& .Mui-disabled.MuiSwitch-switchBase": {
            backgroundColor: "unset",
          },
        },
      },
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          "& .MuiPickersDay-root.Mui-selected, & .MuiPickersDay-root.Mui-selected:hover, & .MuiPickersDay-root.Mui-selected:focus":
            {
              backgroundColor: color.selected,
            },
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          backgroundColor: "#2A2A2C",
        },
      },
    },
    MuiDateRangePickerDay: {
      styleOverrides: {
        root: {
          "&.MuiDateRangePickerDay-rangeIntervalDayHighlight": {
            backgroundColor: theme.palette.info.main,
          },
          "&.MuiDateRangePickerDay-rangeIntervalDayHighlight .MuiDateRangePickerDay-dayInsideRangeInterval":
            {
              color: "white",
            },
          "& .MuiPickersDay-root.Mui-selected": {
            backgroundColor: theme.palette.info.dark,
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          border: "none",
          color: theme.palette.secondary.main,
          fontSize: "14px",
          height: "50px",
          padding: "10px",
          boxSizing: "border-box",

          "&:first-of-type": {
            borderTopLeftRadius: "8px",
            borderBottomLeftRadius: "8px",
          },
          "&:last-of-type": {
            borderTopRightRadius: "8px",
            borderBottomRightRadius: "8px",
          },

          "&.MuiTableCell-head": {
            height: "46px",
          },
        },
      },
    },
    MuiTimelineDot: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255,255,255,0.3)",
          padding: "2px",
          margin: "15.5px 0px",
        },
      },
    },
    MuiTimelineConnector: {
      styleOverrides: {
        root: {
          width: "1px",
          height: "64px",
          // backgroundColor: "rgba(255,255,255,0.3)",
          backgroundColor: "rgba(0, 155, 235, 0.3)",
        },
      },
    },
    MuiIcon: {
      styleOverrides: {
        root: {
          width: "28px",
          height: "28px",
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: "44px",

          "&.MuiTabs-root": {
            border: "2px solid #484848",
            borderRadius: "6px",
          },
          "& .MuiTabs-indicator": {
            background: "#333333",
            height: "100%",
            zIndex: 1,
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          minHeight: "44px",

          "&.Mui-selected": {
            color: "#FFFFFF",
            zIndex: 2,
          },
        },
      },
    },
  },
});

export default theme;
