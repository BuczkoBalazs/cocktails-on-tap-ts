import { MenuProps } from 'antd';
import { HomeIcon } from './HeaderAntStyle';
import { Link } from "react-router-dom";


export const logo: MenuProps['items'] = [
  {
    label: (
      <Link to="/">
        Cocktails on tap
      </Link>
    ),
    key: 'home',
  },
];

export const loggedIn: MenuProps['items'] = [
  {
    label: (
      <Link to="/">
        Home
      </Link>
    ),
    key: 'home',
    icon: <HomeIcon />,
  },
  {
    label: (
      <Link to="/gallery">
        Gallery
      </Link>
    ),
    key: 'gallery',
  },
  {
    label: (
      <Link to="/favorites">
        Favorites
      </Link>
    ),
    key: 'favorites',
  },
  {
    label: (
      <Link to="/add">
        Add Cocktail
      </Link>
    ),
    key: 'add',
  }
];

export const notLoggedIn: MenuProps['items'] = [
  {
    label: (
      <Link to="/">
        Home
      </Link>
    ),
    key: 'home',
    icon: <HomeIcon />,
  },
  {
    label: (
      <Link to="/gallery">
        Gallery
      </Link>
    ),
    key: 'gallery',
  },
];