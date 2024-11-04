import React, { useState } from 'react';
import porkersData from '../porkers_data';
import HogContainer from './HogContainer';
import HogForm from './HogForm';

function App() {
  const [hogs, setHogs] = useState(porkersData);
  const [filterGreased, setFilterGreased] = useState(false);
  const [sortOption, setSortOption] = useState("none");
  const [hiddenHogs, setHiddenHogs] = useState([]);

  
  const toggleHideHog = (hogName) => {
    setHiddenHogs((prevHiddenHogs) =>
      prevHiddenHogs.includes(hogName)
        ? prevHiddenHogs.filter((name) => name !== hogName)
        : [...prevHiddenHogs, hogName]  
    );
  };

  
  const addHog = (newHog) => {
    setHogs((prevHogs) => [...prevHogs, newHog]);
  };

  
  const filteredHogs = hogs
    .filter((hog) => !hiddenHogs.includes(hog.name))
    .filter((hog) => (filterGreased ? hog.greased : true));

  const sortedHogs = [...filteredHogs].sort((a, b) => {
    if (sortOption === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortOption === "weight") {
      return a.weight - b.weight;
    }
    return 0;
  });

  return (
    <div>
      
      


<h2 >HogWild: Prize-Winning Pigs</h2>

      {/* Filter and Sort Controls */}
      <div className="filterWrapper">
        <label>
          <input
            type="checkbox"
            checked={filterGreased}
            onChange={(e) => setFilterGreased(e.target.checked)}
          />
          Show Only Greased
        </label>

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="none">Sort By</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>

      {/* Hog Form to Add New Hogs */}
      <HogForm onAddHog={addHog} />
      <br></br>
      <br></br>
      <br></br>
      
      {/* * Hog Container to Display Hogs */}
      <HogContainer hogs={sortedHogs} onToggleHide={toggleHideHog} />
    </div>
  );
}

export default App;
