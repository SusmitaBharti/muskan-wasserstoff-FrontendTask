import fs from 'fs';

class FileService {
  async getFileContent(fileId) {
    const file = await fs.promises.readFile(`files/${fileId}.txt`, 'utf8');
    return file;
  }

  async createFile(file) {
    await fs.promises.writeFile(`files/${file.id}.txt`, file.content);
  }

  async deleteFile(fileId) {
    await fs.promises.unlink(`files/${fileId}.txt`);
  }
}

export default FileService;