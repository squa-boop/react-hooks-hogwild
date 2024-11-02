import React, { useState } from 'react';

function HogTile({ hog, onToggleHide }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="ui eight wide column">
      <div className="ui card" onClick={toggleDetails}>
        <div className="image">
          <img src={hog.image} alt={hog.name} />
        </div>
        <div className="content">
          <h3 className="header">{hog.name}</h3>
          {showDetails && (
            <div className="description">
              <p><strong>Specialty:</strong> {hog.specialty}</p>
              <p><strong>Weight:</strong> {hog.weight}</p>
              <p><strong>Greased:</strong> {hog.greased ? "Yes" : "No"}</p>
              <p><strong>Highest Medal Achieved:</strong> {hog.highestMedalAchieved}</p>
            </div>
          )}
        </div>
        <button className="ui button" onClick={(e) => {
          e.stopPropagation();
          onToggleHide(hog.name);
        }}>
          {showDetails ? "Hide Hog" : "Unhide Hog"}
        </button>
      </div>
    </div>
  );
}

export default HogTile;
