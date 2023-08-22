import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import supabase from '../client';

function EditCreator() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: ''
  });

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase.from('creators').select('*').eq('id', id).single();
      if (data) {
        setCreator(data);
      } else {
        console.error('Error fetching creator:', error);
      }
    };

    fetchCreator();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCreator(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await supabase.from('creators').update(creator).eq('id', id);
    if (!response.error) {
      navigate(`/creator/${id}`);
    } else {
      alert('Failed to update creator. Please try again.');
      console.error('Error updating creator:', response.error);
    }
  };

  const handleDelete = async () => {
    const response = await supabase.from('creators').delete().eq('id', id);
    if (!response.error) {
      alert('Creator deleted successfully!');
      navigate('/'); // Redirect to the homepage after deletion
    } else {
      alert('Failed to delete creator. Please try again.');
      console.error('Error deleting creator:', error);
    }
  };

  return (
    <div className='creator-form'>
      {creator ? (
        <div>
        <form onSubmit={handleSubmit}>
          <label>Name:
            <input type='text' name='name' value={creator.name} onChange={handleInputChange} />
          </label>
          <label>URL:
            <input type='url' name='url' value={creator.url} onChange={handleInputChange} />
          </label>
          <label>Description:
            <textarea name='description' value={creator.description} onChange={handleInputChange}></textarea>
          </label>
          <label>Image URL:
            <input type='url' name='imageURL' value={creator.imageURL || ''} onChange={handleInputChange} />
          </label>
          <button type='submit'>Update Creator</button>
        </form>
        <button onClick={handleDelete}>Delete Creator</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditCreator;