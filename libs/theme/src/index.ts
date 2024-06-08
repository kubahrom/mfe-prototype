import { deepPurple } from "@mui/material/colors";
import { createTheme } from "@mui/material";
import createCache from "@emotion/cache";

const theme = createTheme({
  palette: {
    primary: deepPurple,
  },
});

function getTheme(prefix: string) {
  const cache = createCache({ key: prefix, prepend: true });
  return {
    theme,
    cache,
  };
}

export default getTheme;
