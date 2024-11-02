import React, { useState } from 'react';

function HogForm({ onAddHog }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [weight, setWeight] = useState('');
  const [greased, setGreased] = useState(false);
  const [highestMedalAchieved, setHighestMedalAchieved] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newHog = {
      name,
      image,
      specialty,
      weight: parseFloat(weight),
      greased,
      highestMedalAchieved,
    };
    onAddHog(newHog);
    // Clear the form after submission
    setName('');
    setImage('');
    setSpecialty('');
    setWeight('');
    setGreased(false);
    setHighestMedalAchieved('');
  };

  return (
    <form onSubmit={handleSubmit} className="ui form">
      <h3>Add a New Hog</h3>
      <div className="field">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="field">
        <label>Image URL:</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </div>
      <div className="field">
        <label>Specialty:</label>
        <input
          type="text"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          required
        />
      </div>
      <div className="field">
        <label>Weight:</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />
      </div>
      <div className="field">
        <label>
          <input
            type="checkbox"
            checked={greased}
            onChange={(e) => setGreased(e.target.checked)}
          />
          Greased
        </label>
      </div>
      <div className="field">
        <label>Highest Medal Achieved:</label>
        <input
          type="text"
          value={highestMedalAchieved}
          onChange={(e) => setHighestMedalAchieved(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="ui button">Add Hog</button>
    </form>
  );
}

export default HogForm;
