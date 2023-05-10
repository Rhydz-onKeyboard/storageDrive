const drive = require('./googleAuth');


module.exports = {
  getFiles: async () => {
    const response = await new Promise((resolve, reject) => {
      drive.files.list({
        fields: 'files(id, name, webViewLink, kind)'
        // fields: '*'
      }, (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    });
    const { files } = response.data;
    return files.filter(file => file.id !== process.env.FOLDER_ID).map(f => ({
      type: f.kind,
      link: f.webViewLink,
      id: f.id,
      name: f.name
    }))
  },
  uploadFile: async (fileName, content) => {
    const media = {
      mimeType: 'application/pdf',
      body: content,
    }
    const response = await new Promise((resolve, reject) => {
      drive.files.create({
        media: media,
        requestBody: {
          name: fileName,
          parents: [
            process.env.FOLDER_ID
          ]
        },
        fields: 'webViewLink',
      }, (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    })
    return response.data.webViewLink;
  },
  deleteFile: async (id) => {
    const response = await new Promise((resolve, reject) => {
      drive.files.delete({ fileId: id }, (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    })
    return response;
  }
}