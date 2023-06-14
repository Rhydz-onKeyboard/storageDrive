const { response, request } = require('express');
const { StatusCodes: code } = require('http-status-codes');
const drive = require('../googleService/googleStorage');

module.exports = {
  findAllCVs: async (req = request, res = response) => {
    try {
      const files = await drive.getFiles();
      res.status(code.OK).json({ msg: 'OK', files: files })
    } catch (err) {
      console.log(err)
      res.status(code.BAD_REQUEST).json({ msg: 'Error fetching data', error: err });
    }
  },
  uploadCV: async (req = request, res = response) => {
    try {
      const { id } = req.body;
      const { cv } = req.files;
      const result = await drive.uploadFile(`${id}.pdf`, cv.data);
      res.status(code.OK).json({ msg: 'OK', link: result })
    } catch (err) {
      console.log(err)
      res.status(code.BAD_REQUEST).json({ Error: err });
    }
  },
  uploadCVFromIndeed: async (req = request, res = response) => {
    try {
      console.log(req.body)
      // const result = await drive.uploadFile
      res.status(code.OK);
    } catch (err) {
      console.log(err)
      res.status(code.BAD_REQUEST).json({ Error: err });
    }
  },
  deleteCV: async (req = request, res = response) => {
    try {
      const { id } = req.params
      await drive.deleteFile(id);
      res.status(code.OK).json({ msg: `File deleted` })
    } catch (err) {
      console.log(err)
      res.status(code.BAD_REQUEST).json({ Error: err });
    }
  }
}