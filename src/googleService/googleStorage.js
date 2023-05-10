const drive = require('./googleAuth');
const fs = require('fs');


module.exports = {
  getFiles: async () => {
    const response = await new Promise((resolve, reject) => {
      drive.files.list({
        fields: 'files(id, name, webViewLink)'
        // fields: '*'
      }, (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    });
    return response.data.files;
  },
  uploadFile: async () => {
    const media = {
      mimeType: 'application/pdf',
      body: fs.createReadStream('./src/adiazCV2.pdf'),
    }
    const response = await new Promise((resolve, reject) => {
      drive.files.create({
        media: media,
        requestBody: {
          name: 'cvTest4.pdf',
          parents: [
            process.env.FOLDER_ID
          ]
        },
        fields: 'id',
      }, (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    })
    return response.data.id;
  },
  deleteFile: async (id) => {
    const response = await new Promise((resolve, reject) => {
      drive.files.delete({ fileId: id }, (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
      return response;
    })


  }
}