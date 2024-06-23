import fs from 'fs';

class FolderService {
  async getFolderContent(folderId) {
    const folder = await fs.promises.readdir(`folders/${folderId}`, { withFileTypes: true });
    return folder;
  }

  async createFolder(folder) {
    await fs.promises.mkdir(`folders/${folder.id}`);
  }

  async deleteFolder(folderId) {
    await fs.promises.rmdir(`folders/${folderId}`, { recursive: true });
  }
}

export default FolderService;