import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../client';

const AddCreator = () => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');
  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await supabase.from('creators').insert([{ name, url, description, imageURL }]);
  if (!response.error) { // Check explicitly for the absence of an error
    alert('Creator added successfully!');
    navigate('/'); // Navigate to the homepage
  } else {
    console.error('Error adding creator:', response.error);
  }
};

  return (
    <div className='creator-form'>
      <h1>Add Creator</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          URL:
          <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} required />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </label>
        <label>
          Image URL:
          <input type="url" value={imageURL} onChange={(e) => setImageURL(e.target.value)} />
        </label>
        <button type='submit'>Add Creator</button>
      </form>
    </div>
  );
};

export default AddCreator;