import React from 'react';

const FileComponent = ({ file }) => {
  return (
    <div>
      <h2>{file.name}</h2>
      <p>{file.content}</p>
    </div>
  );
};

export default FileComponent;