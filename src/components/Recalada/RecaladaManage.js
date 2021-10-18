import React from 'react';
import './Recalada.css';

export default function RecaladaManage() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Action
        <div class="select">
          <select>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>{' '}
        Terminal
        <div class="select">
          <select>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>{' '}
        Product
        <div class="select">
          <select>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
        <a>Cancel</a> <button type="submit">Add Recalada</button>
      </form>
    </div>
  );
}
