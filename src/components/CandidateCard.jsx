import React from 'react';

const CandidateCard = ({ candidate }) => {
  return (
    <div className="candidate-card">
      <h3>{candidate.name}</h3>
      <p>Location: {candidate.location}</p>
      <p>Job Role: {candidate.jobRole}</p>
      {/* Add more candidate details here as needed */}
    </div>
  );
};

export default CandidateCard;
