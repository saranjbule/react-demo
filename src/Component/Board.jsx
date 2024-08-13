import Tile from './Tile';

function Board({ word }) {

  const generateWord = (word) => {
    const tiles = word.map((item, indexI) => {
      const tilesRow = item.map((item, indexJ) => {
        if (item === 1) {

          return (
            <Tile
              className="active-tile"
              key={`${indexI}${indexJ}`}
              click={true}
            />
          );
        }

        return (
          <Tile
            className="non-active-tile"
            key={`${indexI}${indexJ}`}
            click={false}
          />
        );
      });

      return tilesRow;
    });

    return tiles;
  };

  return <div className="word">{generateWord(word)}</div>;
}

export default Board;
