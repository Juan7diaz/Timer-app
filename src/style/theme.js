import { extendTheme } from "@chakra-ui/react"

//https://flatuicolors.com/palette/ca

const colors = {
    theme: {
      primary: "#00d2d3",
      secondary: "#54a0ff",
      fontColor: "#ffffff",
      pause: "#ff6b6b",
      start: "#1dd1a1",
      reset: "#feca57"
    },
}

export const theme = extendTheme({ colors })