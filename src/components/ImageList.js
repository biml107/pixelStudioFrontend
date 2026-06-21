import { useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

 function TitlebarBelowMasonryImageList() {
  return (
    <Box sx={{ width: '95%', height: 600, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={useMediaQuery('(min-width:600px)') ? 4 : 2} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar position="below" title={item.author} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: '/Images/prewedding/image1.jpeg',
    title: 'Bed',
    author: 'swabdesign',
  },
  {
    img: '/Images/prewedding/image2.jpeg',
    title: 'Books',
    author: 'Pavel Nekoranec',
  },
  {
    img: '/Images/prewedding/image3.jpeg',
    title: 'Sink',
    author: 'Charles Deluvio',
  },
  {
    img: '/Images/makeup/image3.jpeg',
    title: 'Kitchen',
    author: 'Christian Mackie',
  },
  {
    img: '/Images/makeup/image2.jpeg',
    title: 'Blinds',
    author: 'Darren Richardson',
  },
  {
    img: '/Images/makeup/image1.jpeg',
    title: 'Chairs',
    author: 'Taylor Simpson',
  },
  {
    img: '/Images/makeup/image2.jpeg',
    title: 'Laptop',
    author: 'Ben Kolde',
  },
  {
    img: '/Images/makeup/image2.jpeg',
    title: 'Doors',
    author: 'Philipp Berndt',
  },
  {
    img: '/Images/makeup/image2.jpeg',
    title: 'Coffee',
    author: 'Jen P.',
  },
  {
    img: '/Images/makeup/image1.jpeg',
    title: 'Storage',
    author: 'Douglas Sheppard',
  },
  {
    img: '/Images/makeup/image2.jpeg',
    title: 'Candle',
    author: 'Fi Bell',
  },
  {
    img: '/Images/makeup/image3.jpeg',
    title: 'Coffee table',
    author: 'Hutomo Abrianto',
  },
  {
    img: '/Images/prewedding/image31.jpeg',
    title: 'Coffee table',
    author: 'Hutomo Abrianto',
  },
  {
    img: '/Images/prewedding/image32.jpeg',
    title: 'Coffee table',
    author: 'Hutomo Abrianto',
  },
  {
    img: '/Images/prewedding/image33.jpeg',
    title: 'Coffee table',
    author: 'Hutomo Abrianto',
  },
  

  
  

  

];
export {TitlebarBelowMasonryImageList};
