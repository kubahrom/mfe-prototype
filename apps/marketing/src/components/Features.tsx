import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Dashboard, Lock, Web, WebAsset } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';

import mfeHostImage from '../assets/images/mfe-host.png';
import mfeMarketingImage from '../assets/images/mfe-marketing.png';
import mfeAuthImage from '../assets/images/mfe-auth.png';
import mfeDashboardImage from '../assets/images/mfe-dashboard.png';

const items = [
  {
    icon: <Web />,
    title: 'Host',
    description:
      'Host is the main shell microfrontend, which is responsible for loading and displaying the other microfrontends.',
    image: `url(${mfeHostImage})`,
  },
  {
    icon: <WebAsset />,
    title: 'Marketing',
    description:
      'Marketing microfrontend is responsible for display all static pages and marketing content.',
    image: `url(${mfeMarketingImage})`,
  },
  {
    icon: <Lock />,
    title: 'Auth',
    description:
      'Auth microfrontend is responsible for handling login and signup functionalit, with providing needed API for checking for user state.',
    image: `url(${mfeAuthImage})`,
  },
  {
    icon: <Dashboard />,
    title: 'Dashboard',
    description:
      'Dashboard microfrontend is prototype of real application which is in this case managing recipes of authenticated user.',
    image: `url(${mfeDashboardImage})`,
  },
];

export default function Features() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 8 } }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <div>
            <Typography component="h2" variant="h4" color="text.primary">
              Microfrontends
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: { xs: 2, sm: 4 } }}
            >
              Here is list of microfrontends that is included in this
              application.
            </Typography>
          </div>
          <Grid
            container
            item
            gap={1}
            sx={{ display: { xs: 'auto', sm: 'none' } }}
          >
            {items.map(({ title }, index) => (
              <Chip
                key={index}
                label={title}
                onClick={() => handleItemClick(index)}
                sx={{
                  borderColor:
                    selectedItemIndex === index ? 'primary.light' : '',
                  background: selectedItemIndex === index ? 'none' : '',
                  backgroundColor:
                    selectedItemIndex === index ? 'primary.main' : '',
                  '& .MuiChip-label': {
                    color: selectedItemIndex === index ? '#fff' : '',
                  },
                }}
              />
            ))}
          </Grid>
          <Box
            component={Card}
            variant="outlined"
            sx={{
              display: { xs: 'auto', sm: 'none' },
              mt: 4,
            }}
          >
            <Box
              sx={{
                backgroundImage: items[selectedItemIndex].image,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: 280,
              }}
            />
            <Box sx={{ px: 2, pb: 2 }}>
              <Typography
                color="text.primary"
                variant="body2"
                fontWeight="bold"
              >
                {selectedFeature.title}
              </Typography>
              <Typography
                color="text.secondary"
                variant="body2"
                sx={{ my: 0.5 }}
              >
                {selectedFeature.description}
                {selectedFeature.title === 'Marketing' && (
                  <Link
                    color="primary"
                    variant="body2"
                    component={RouterLink}
                    to="/about"
                    fontWeight="bold"
                  >
                    About static page
                  </Link>
                )}
              </Typography>
            </Box>
          </Box>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            useFlexGap
            sx={{ width: '100%', display: { xs: 'none', sm: 'flex' } }}
          >
            {items.map(({ icon, title, description }, index) => (
              <Card
                key={index}
                variant="outlined"
                component={Button}
                color="primary"
                onClick={() => handleItemClick(index)}
                sx={{
                  p: 3,
                  height: 'fit-content',
                  width: '100%',
                  background: 'none',
                  backgroundColor:
                    selectedItemIndex === index ? 'grey.100' : undefined,
                  borderColor: () => {
                    return selectedItemIndex === index
                      ? 'primary.light'
                      : 'grey.200';
                  },
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    textAlign: 'left',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { md: 'center' },
                    gap: 2.5,
                  }}
                >
                  <Box
                    sx={{
                      color: () => {
                        return selectedItemIndex === index
                          ? 'primary.main'
                          : 'grey.300';
                      },
                    }}
                  >
                    {icon}
                  </Box>
                  <Box sx={{ textTransform: 'none' }}>
                    <Typography
                      color="text.primary"
                      variant="body2"
                      fontWeight="bold"
                    >
                      {title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      sx={{ my: 0.5 }}
                    >
                      {description}
                      {title === 'Marketing' && (
                        <Link
                          color="primary"
                          variant="body2"
                          component={RouterLink}
                          to="/about"
                          fontWeight="bold"
                        >
                          About static page
                        </Link>
                      )}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            ))}
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { xs: 'none', sm: 'flex' }, width: '100%' }}
        >
          <Card
            variant="outlined"
            sx={{
              height: '100%',
              width: '100%',
              display: { xs: 'none', sm: 'flex' },
              pointerEvents: 'none',
            }}
          >
            <Box
              sx={{
                m: 'auto',
                width: '100%',
                height: 500,
                backgroundSize: 'contain',
                backgroundImage: items[selectedItemIndex].image,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
