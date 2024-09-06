import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [file, setFile] = useState(null);
  const [audioFile, setAudioFile] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError('Please select a file');
      return;
    }

    setIsLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setAudioFile(response.data.audio_file);
    } catch (error) {
      setError(error.response?.data?.error || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>PDF to Speech Converter</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} accept=".pdf" />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Converting...' : 'Upload and Convert'}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      {isLoading && <p>Converting PDF to speech, please wait...</p>}
      {audioFile && (
        <div>
          <h2>Conversion Complete</h2>
          <audio controls src={`http://localhost:5000/api/audio/${audioFile}`} />
          <br />
          <a href={`http://localhost:5000/api/audio/${audioFile}`} download>
            Download Audio File
          </a>
        </div>
      )}
    </div>
  );
}

export default App;