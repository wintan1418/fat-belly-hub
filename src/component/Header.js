import React, {usestate} from 'react';
import {Menu} from 'semantic-ui-react';
import { link } from 'react-router-dom';

const Header = () => {
  const { pathname } = window.location;

  const path  = pathname === '/' ? 'home' : pathname.substr(1);

  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, {name }) => setActiveItem(name);
  
}
