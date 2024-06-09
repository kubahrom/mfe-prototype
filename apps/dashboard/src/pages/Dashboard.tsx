import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import { useTitle } from '@hooks/useTitle';
import { useEffect, useMemo, useState } from 'react';

const items = [
  { id: 1, title: 'Teast 1' },
  { id: 2, title: 'Tesst 2' },
  { id: 3, title: 'Tefst 13' },
  { id: 4, title: 'Tesst 14' },
  { id: 5, title: 'Tesft 15' },
  { id: 6, title: 'Tesst 16' },
];

export default function Dashboard() {
  const [search, setSearch] = useState('');

  // useEffect(() => {
  //   getCourses().then((data) => {
  //     console.log(data);
  //   });
  // });

  const handleSearch = (e: Event) => {
    const customEvent = e as CustomEvent<string>;
    setSearch(customEvent.detail);
  };

  useEffect(() => {
    window.addEventListener('search', handleSearch as EventListener);

    return () => {
      window.removeEventListener('search', handleSearch as EventListener);
    };
  }, []);

  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  useTitle('Dashboard • MFE');
  return (
    <Container>
      <Box sx={{}}>
        <h1>Dashboard</h1>
        {filteredItems.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </Box>
    </Container>
  );
}

// const getCourses = async () => {
//   try {
//     const response = await fetch('https://dummyjson.com/products', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     const data = await response.json();
//     return data;
//   } catch (e) {
//     throw new Error('Něco se pokazilo!');
//   }
// };
