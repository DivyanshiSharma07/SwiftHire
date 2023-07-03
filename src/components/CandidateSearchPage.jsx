import React, { useState } from 'react';
import CandidateCard from './CandidateCard';
import { candidates } from './candidate';
import './styles/Candidate.css';

const CandidateSearchPage = () => {
  // State variables for search criteria and fetched candidates
  const [location, setLocation] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [filteredCandidates, setFilteredCandidates] = useState([]);
  const [selectedCandidates, setSelectedCandidates] = useState([]);

  // Function to handle search
  const handleSearch = () => {
    // Filter candidates based on location and job role
    const filtered = candidates.filter(candidate => {
      const locationMatch = candidate.location.toLowerCase().includes(location.toLowerCase());
      const jobRoleMatch = candidate.jobRole.toLowerCase().includes(jobRole.toLowerCase());
      return locationMatch && jobRoleMatch;
    });

    setFilteredCandidates(filtered);
  };

  // Function to handle candidate selection
  const handleSelectCandidate = (candidate) => {
    setSelectedCandidates(prevSelectedCandidates => [...prevSelectedCandidates, candidate]);
  };

  return (
    <div className="candidate-search-page">
      <h1>Candidate Search</h1>
      <div className="search-form">
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Job Role"
          value={jobRole}
          onChange={(e) => setJobRole(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="candidate-list">
        {filteredCandidates.length > 0 ? (
          filteredCandidates.map(candidate => (
            <CandidateCard
              key={candidate.id}
              candidate={candidate}
              onSelectCandidate={handleSelectCandidate}
            />
          ))
        ) : (
          <p>No candidates found</p>
        )}
      </div>
      <div className="selected-candidates">
        <h2>Selected Candidates</h2>
        <ul>
          {selectedCandidates.length > 0 ? (
            selectedCandidates.map(candidate => (
              <li key={candidate.id}>{candidate.name}</li>
            ))
          ) : (
            <p>No candidates selected</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CandidateSearchPage;
