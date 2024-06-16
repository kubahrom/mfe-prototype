import { indigo } from "@mui/material/colors";
import { createTheme } from "@mui/material";
import createCache from "@emotion/cache";

const theme = createTheme({
  palette: {
    primary: indigo,
    secondary: indigo,
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
