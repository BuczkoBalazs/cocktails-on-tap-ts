import { MenuProps } from 'antd';
import { HomeIcon } from './HeaderAntStyle';


export const logo: MenuProps['items'] = [
  {
    label: (
      <a href="http://localhost:3000/" rel="noopener noreferrer">
        Cocktails on tap
      </a>
    ),
    key: 'home',
  },
];

export const items: MenuProps['items'] = [
  {
    label: (
      <a href="http://localhost:3000/" rel="noopener noreferrer">
        Home
      </a>
    ),
    key: 'home',
    icon: <HomeIcon />,
  },
  {
    label: (
      <a href="http://localhost:3000/gallery" rel="noopener noreferrer">
        Gallery
      </a>
    ),
    key: 'gallery',
  },
  {
    label: (
      <a href="http://localhost:3000/favourites" rel="noopener noreferrer">
        Favourites
      </a>
    ),
    key: 'favourites',
  },
  {
    label: (
      <a href="http://localhost:3000/add" rel="noopener noreferrer">
        Add Cocktail
      </a>
    ),
    key: 'add',
  }
];