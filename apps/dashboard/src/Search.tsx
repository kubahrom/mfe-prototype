import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { ChangeEvent, useEffect, useState } from 'react';
import { useDebounce } from '@hooks/useDebounce';
import { Typography } from '@mui/material';

const SearchWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

function Search() {
  const [value, setValue] = useState('');

  const debouncedValue = useDebounce(value, 300);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const customEvent = new CustomEvent('search', {
      detail: debouncedValue,
    });
    window.dispatchEvent(customEvent);
  }, [debouncedValue]);

  const handleReset = () => {
    setValue('');
  };

  useEffect(() => {
    window.addEventListener('search-reset', handleReset as EventListener);

    return () => {
      window.removeEventListener('search-reset', handleReset as EventListener);
    };
  }, []);

  return (
    <SearchWrapper>
      <Typography
        variant="caption"
        color="white"
        sx={{
          position: 'absolute',
          top: 4,
          right: 4,
        }}
      >
        Dashboard MFE
      </Typography>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <InputBase
        placeholder="Hledat"
        value={value}
        onChange={handleSearchChange}
        inputProps={{ 'aria-label': 'hledat' }}
        sx={{
          color: 'inherit',
          p: 0.5,
          pl: 6,
          width: '100%',
        }}
      />
    </SearchWrapper>
  );
}

export default Search;
