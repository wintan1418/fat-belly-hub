import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const { pathname } = window.location;

  const path = pathname === '/' ? 'home' : pathname.substr(1);

  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Menu pointing secondary size="massive" color="purple" textalign="center">
      <Menu.Item
        name="Fat-Belly-Hub "
        active={activeItem === 'home'}
        onClick={handleItemClick}
        as={Link}
        to="/"
      />
    </Menu>
  );
};
export default Header;
