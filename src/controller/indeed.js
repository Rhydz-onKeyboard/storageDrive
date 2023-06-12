const { response, request } = require('express');
const { StatusCodes: code } = require('http-status-codes');
const { default: axios } = require('axios');


module.exports = {
  getXml: async (req = request, res = response) => {
    try {
      const data = await axios({
        method: "GET",
        url: process.env.APP_URL,
      });
      const job = data.map(j => {
        const job = `<job>
          <title>
            <![CDATA[${encodeURIComponent(j.position)}]]>
          </title>
          <date>
            <![CDATA[${encodeURIComponent(j.createdat)}]]>
          </date>
          <referencenumber>
            <![CDATA[${j.id}]]>
          </referencenumber>
          <requisitionid>
            <![CDATA[${j.id}]]>
          </requisitionid>
          <url>
            <![CDATA[${encodeURIComponent(`https://jobpostingvue.netlify.app/#/postulation/${j.id}/${j.location}`)}]]>
          </url>
          <company>
            <![CDATA[Variacode]]>
          </company>
          <city>
            <![CDATA[${encodeURIComponent(j.location)}]]>
          </city>
          <state>
            <![CDATA[${encodeURIComponent(j.location)}]]>
          </state>
          <country>
            <![CDATA[${encodeURIComponent(j.location)}]]>
          </country>
          <email>
            <![CDATA[example@abccorp.com]]>
          </email>
          <description>
            <![CDATA[${j.description}\n${j.requirements}\n${j.benefits}]]>
          </description>
          <jobtype>
            <![CDATA[${encodeURIComponent(j.modality)}]]>
          </jobtype>
          <category>
            <![CDATA[${encodeURIComponent(j.category)}]]>
          </category>
          <indeed-apply-data>
          <![CDATA[indeed-apply-apiToken=${process.env.INDEED_API_TOKEN}&indeed-apply-jobTitle=${j.position}&indeed-apply-jobCompanyName=Variacode&indeed-apply-jobLocation=${j.location}&indeed-apply-postUrl=${encodeURIComponent('https://variacode-job-production-262a.up.railway.app/job/sitemap')}]]>
          </indeed-apply-data>
        </job>`
        return job
      })
      const xmlHead = `<?xml version="1.0" encoding="utf-8"?>
      <source>
        <publisher>VARIACODE</publisher>
        <publisherurl>https://jobpostingvue.netlify.app/#/</publisherurl>
        `
      const xmlFooter = `</source>`;
      res.header('Content-type', 'application/xml')
      res.status(code.OK).send(`${xmlHead}\n${job.toString().replace(/>,</g, '>\n<')}\n${xmlFooter}`);
    } catch (error) {
      console.log(error);
      res.status(code.BAD_REQUEST)
        .json({ msg: 'Accion rechazada', error: error })
    }
  },
  postData: async (req = request, res = response) => {
    try {
      const secret = process.env.INDEED_SECRET
      console.log('job controller req.headers line 322', req.headers)
      const xIndeedSignature = req.headers['x-indeed-signature'];
      console.log('job controller req.body line 324', req.body)
      const { data } = req.body.file;

      // const encodedStr = new Buffer.from(data).toString('base64');
      // const signature = crypto.createHash('SHA1', secret).update(encodedStr, 'base64').digest('base64');

      // if (signature !== xIndeedSignature) {
      //   throw new Error('invalid signature');
      // } else {
      //   return res.status(code.OK).json({ msg: `Computed signature matches: ${signature}` })
      // }
    } catch (error) {
      console.log(error);
      res.status(code.BAD_REQUEST)
        .json({ msg: 'Accion rechazada', error: error })
    }
  }
}