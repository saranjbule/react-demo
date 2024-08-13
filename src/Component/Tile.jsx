import { useState } from 'react';
import './Tiles.css';

const Tile = ({ className, click }) => {
  const [tileColor, setTileColor] = useState(className);

  const getTileVariant = () => {
    setTileColor('non-active-tile delay');
    setTimeout(() => {
      setTileColor('active-tile delay');
    }, 3000);
  };

  return (
    <div
      className={`tile ${tileColor}`}
      onClick={click ? getTileVariant : null}
    ></div>
  );
};

export default Tile;
