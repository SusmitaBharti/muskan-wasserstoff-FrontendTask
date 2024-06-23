import React from 'react';

const FolderComponent = ({ folder }) => {
  return (
    <div>
      <h2>{folder.name}</h2>
      <ul>
        {folder.files.map((file) => (
          <li key={file.id}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FolderComponent;