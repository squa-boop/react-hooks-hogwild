import React from 'react';
import HogTile from './HogTile';

function HogContainer({ hogs, onToggleHide }) {
  return (
    <div className="ui grid">
      {hogs.map((hog) => (
        <HogTile key={hog.name} hog={hog} onToggleHide={onToggleHide} />
      ))}
    </div>
  );
}

export default HogContainer;
