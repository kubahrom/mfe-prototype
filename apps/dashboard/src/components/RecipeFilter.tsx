import { Chip, Stack } from '@mui/material';
import React, { Dispatch } from 'react';

type Props = {
  cuisines: string[];
  selected: string[];
  setSelected: Dispatch<React.SetStateAction<string[]>>;
};

export const RecipeFilter = ({ cuisines, selected, setSelected }: Props) => {
  const handleClick = (cuisine: string) => {
    setSelected((prev) =>
      prev.includes(cuisine)
        ? prev.filter((selected) => selected !== cuisine)
        : [...prev, cuisine],
    );
  };

  return (
    <Stack flexWrap="wrap" direction="row" gap={1} sx={{ pb: 2 }}>
      {cuisines.map((cuisine) => (
        <Chip
          key={cuisine}
          label={cuisine}
          variant={selected.includes(cuisine) ? 'filled' : 'outlined'}
          color="primary"
          onClick={() => handleClick(cuisine)}
          onDelete={
            selected.includes(cuisine) ? () => handleClick(cuisine) : undefined
          }
        />
      ))}
    </Stack>
  );
};
