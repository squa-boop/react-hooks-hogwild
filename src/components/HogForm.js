import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

function HogForm({ onAddHog }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [weight, setWeight] = useState('');
  const [greased, setGreased] = useState(false);
  const [highestMedalAchieved, setHighestMedalAchieved] = useState('');

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'specialty':
        setSpecialty(value);
        break;
      case 'weight':
        setWeight(value);
        break;
      case 'image':
        setImage(value);
        break;
      case 'greased':
        setGreased(checked);
        break;
      case 'highestMedalAchieved':
        setHighestMedalAchieved(value);
        break;
      default:
        break;
    }
  };

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
    
    // Reset form fields
    setName('');
    setImage('');
    setSpecialty('');
    setWeight('');
    setGreased(false);
    setHighestMedalAchieved('');
  };

  return (
    <Container>  
      <div className="d-flex justify-content-center align-items-center">
        <form
          onSubmit={handleSubmit}
          className="d-flex flex-column w-50 border rounded shadow p-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleChange}
            required
            className="form-control mb-3"
          />
          <input
            type="text"
            name="specialty"
            placeholder="Specialty"
            value={specialty}
            onChange={handleChange}
            required
            className="form-control mb-3"
          />
          <input
            type="number"
            name="weight"
            placeholder="Weight"
            value={weight}
            onChange={handleChange}
            required
            className="form-control mb-3"
          />
          <label className="form-check-label mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              name="greased"
              checked={greased}
              onChange={handleChange}
            />
            Greased
          </label>
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={image}
            onChange={handleChange}
            required
            className="form-control mb-3"
          />
          <input
            type="text"
            name="highestMedalAchieved"
            placeholder="Highest Medal Achieved"
            value={highestMedalAchieved}
            onChange={handleChange}
            required
            className="form-control mb-3"
          />
          <button type="submit" className="btn btn-primary">
            Add Hog
          </button>
        </form>
      </div>
    </Container>
  );
}

export default HogForm;
