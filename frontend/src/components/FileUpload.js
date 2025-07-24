import React, { useState } from 'react';
import axios from 'axios';

function FileUpload() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedFilePath, setUploadedFilePath] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
      setUploadProgress(0);
      setUploadedFilePath(null);
      setError('');
    }
  };

  const handleUpload = async () => {
    if (!file) return setError('Please select a file first.');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('http://localhost:5000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(percent);
        },
      });

      if (res.data.success) {
        // Use full URL from backend (Cloudinary URL or local URL)
        setUploadedFilePath(res.data.file.url);
        setError('');
      } else {
        setError(res.data.message || 'Upload failed');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Upload error');
    }
  };

  return (
    <div className="upload-wrapper">
      <input type="file" onChange={handleFileChange} accept="image/*" />
      {preview && (
        <div className="preview-container">
          <img src={preview} alt="Preview" className="preview-img" />
        </div>
      )}
      <button onClick={handleUpload} disabled={!file}>
        Upload
      </button>

      {uploadProgress > 0 && (
        <div className="progress-bar-wrapper">
          <div
            className="progress-bar"
            style={{ width: `${uploadProgress}%` }}
          >
            {uploadProgress}%
          </div>
        </div>
      )}

      {uploadedFilePath && (
        <div className="uploaded-file">
          <p>Uploaded successfully!</p>
          <img src={uploadedFilePath} alt="Uploaded file" />
          <a href={uploadedFilePath} target="_blank" rel="noreferrer">
            View Full Image
          </a>
        </div>
      )}

      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default FileUpload;
