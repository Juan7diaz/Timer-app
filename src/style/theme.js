import { extendTheme } from "@chakra-ui/react"

//https://flatuicolors.com/palette/ca

const colors = {
    theme: {
      primary: "#1dd1a1",
      secondary: "#54a0ff",
      fontColor: "#ffffff",
      pause: "#ff6b6b",
      start: "#48dbfb",
      reset: "#feca57"
    },
}

export const theme = extendTheme({ colors })