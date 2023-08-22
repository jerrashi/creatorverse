import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import supabase from '../client';

function ViewCreator() {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    // Fetch the creator details from Supabase using the ID from the URL
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

  if (!creator) {
    return <div>Loading...</div>;
  }

  return (
    <div className='creator-detail'>
      <h2>{creator.name}</h2>
      <a href={creator.url} target='_blank' rel='noopener noreferrer'>{creator.url}</a>
      <p>{creator.description}</p>
      {creator.imageURL && <img src={creator.imageURL} alt={creator.name} />}
      
      {/* Link to edit the content creator's information */}
      <Link to={`/creator/${creator.id}/edit`}>Edit</Link>
      <Link to={`/`}>View All Creators</Link>
    </div>
  );
}

export default ViewCreator;