import React from 'react';
import FolderComponent from '../components/FolderComponent';

const FolderPage = ({ folderId }) => {
  const folderService = new FolderService();
  const folder = folderService.getFolderContent(folderId);

  return (
    <div>
      <h1>{folder.name}</h1>
      <FolderComponent folder={folder} />
    </div>
  );
};

export default FolderPage;