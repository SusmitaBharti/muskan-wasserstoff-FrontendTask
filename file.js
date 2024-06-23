import React from 'react';
import FileComponent from '../components/FileComponent';

const FilePage = ({ fileId }) => {
  const fileService = new FileService();
  const file = fileService.getFileContent(fileId);

  return (
    <div>
      <h1>{file.name}</h1>
      <FileComponent file={file} />
    </div>
  );
};

export default FilePage;