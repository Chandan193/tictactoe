import React from 'react';

const History = ({ history, moveTo, currentMove }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((_, move) => {
          // _ is used as we are not using actual values
          return (
            <li key={move}>
              <button
                className={`btn-move ${move === currentMove ? 'active' : ''} `}
                type="button"
                onClick={() => {
                  moveTo(move);
                }}
              >
                {move === 0 ? `Go to game start` : `Go to move #${move}`}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default History;
