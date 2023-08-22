import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import supabase from '../client';
import CreatorComponent from '../components/CreatorComponent';

const ShowCreators = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data, error } = await supabase.from('creators').select('*');
      if (data) setCreators(data);
      if (error) console.error('Error fetching creators:', error);
    };
    fetchCreators();
  }, []);

  return (
    <div className='creator-card'>
      <h1>Creators</h1>
      <Link to='/creator/add' className='add-creator-button'>Add Creator</Link>
      {creators.map(creator => (
        <CreatorComponent key={creator.id} creator={creator} />
      ))}
    </div>
  );
};

export default ShowCreators;