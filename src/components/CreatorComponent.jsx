import React from 'react';
import { Link } from 'react-router-dom';

function CreatorComponent({ creator }) {
  return (
    <div className='creator-card'>
      <div><h3>{creator.name}</h3></div>
      <div><a href={creator.url} target='_blank' rel='noopener noreferrer'>{creator.url}</a></div>
      <div><p>{creator.description}</p></div>
      <div>{creator.imageURL && <img src={creator.imageURL} alt={creator.name} />}</div>
      
      {/* Link to view the content creator */}
      <div><Link to={`/creator/${creator.id}`}>View</Link></div>

      {/* Link to edit the content creator's information */}
      <div><Link to={`/creator/${creator.id}/edit`}>Edit</Link></div>
    </div>
  );
}

export default CreatorComponent;