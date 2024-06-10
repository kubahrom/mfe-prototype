import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { GitHub } from '@mui/icons-material';

const hex2rgba = (hex: string, alpha = 1) => {
  const matches = hex.match(/\w\w/g) || [];
  const [r, g, b] = matches.map((x) => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        width: '100%',
        backgroundImage: (theme) =>
          `linear-gradient(180deg, ${hex2rgba(theme.palette.primary.light, 0.5)}, #FFF)`,
        backgroundSize: '100% 90%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
            }}
          >
            Microfrontend&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'clamp(3rem, 10vw, 4rem)',
                color: (theme) =>
                  theme.palette.mode === 'light'
                    ? 'primary.main'
                    : 'primary.light',
              }}
            >
              prototype
            </Typography>
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
            A microfrontend prototype based on module-federation, rsbuild using
            pnpm workspace monorepo approach. This project is a part of the
            master thesis.
          </Typography>

          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              component="a"
              href="https://github.com/kubahrom/mfe-prototype"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              startIcon={<GitHub />}
            >
              Github link
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
