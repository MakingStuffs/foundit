const submitRouter = require('express').Router()
const middleware = require('../utils/middleware')
const nodemailer = require('nodemailer')
const { body, validationResult } = require('express-validator')
const config = require('../utils/config')

submitRouter.post(
  '/claim',
  body('email').isEmail(),
  body('name')
    .isLength({ min: 3 })
    .matches(/^[a-z0-9 ]+$/i),
  body('deviceName')
    .isLength({ min: 3 })
    .matches(/^[a-z0-9 ]+$/i),
  body('hasCase').isBoolean(),
  body('caseHasAccessories').isBoolean(),
  body('phone').isMobilePhone(),
  middleware.validateRecaptcha,
  async (req, res) => {
    const {
      name,
      deviceName,
      hasCase,
      caseMaterial,
      caseColour,
      caseHasAccessories,
      caseAccessories,
      email,
      phone,
    } = req.body

    const errors = validationResult(req)

    if (process.env.NODE_ENV === 'test') {
      console.log(errors)
    }

    if (!errors.isEmpty())
      return res.status(400).json({
        status: 400,
        message:
          'There has been an error with your submission. Please ensure that you have filled in all the fields correctly.',
      })

    if (!name || !phone || !email || !deviceName)
      return res.status(400).json({
        status: 400,
        message: 'You did not provide all the required fields',
      })

    if (!hasCase || !caseHasAccessories)
      return res.json({
        status: 200,
        message:
          'Your submission has been received. Please note that you will only be contacted if you have correctly identified the device. Your data has not been saved on any database and will only be used to arrange returning the AirPods to their rightful owner.',
      })

    if (hasCase) {
      const regex = /^[a-z \'\"\.\,\-\_\)\(\/0-9]+$/gi
      const materialTest = regex.test(caseMaterial)
      regex.lastIndex = 0
      const colourTest = regex.test(caseColour)

      if (!materialTest || !colourTest) {
        return res.status(400).json({
          status: 400,
          message:
            "There's been an error with your answers for case colour and case material. Ensure you only included letters, numbers and typical grammatical keys.",
        })
      }
      if (caseMaterial.length < 3 || caseColour.length < 3) {
        return res.status(400).json({
          status: 400,
          message:
            "There's been an error with your answers for case colour and case material. Ensure your answers are at least 3 characters in length.",
        })
      }
    }

    if (caseHasAccessories) {
      const regex = /^[a-z \'\"\.\,\-\_\)\(\/0-9]+$/gi
      if (!regex.test(caseAccessories)) {
        return res.status(400).json({
          status: 400,
          message:
            "There's been an error with your answer for case accessories. Ensure you only included letters, numbers and typical grammatical keys.",
        })
      }
      if (caseAccessories.length < 3) {
        return res.status(400).json({
          status: 400,
          message:
            "There's been an error with your answer for case accessories. Ensure your answer is at least 3 characters in length.",
        })
      }
    }

    const transporter = nodemailer.createTransport({
      host: config.SMTP_HOST,
      port: config.SMTP_PORT,
      secure: true,
      auth: {
        user: config.SMTP_USER,
        pass: config.SMTP_PASS,
      },
    })

    const info = await transporter.sendMail({
      from: `"Found It" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO,
      subject: 'Response to FoundIt Form',
      text: `
      Name: ${name} \n
      Phone: ${phone} \n
      Email: ${email} \n  
      Device Name: ${deviceName} \n
      Case Colour: ${caseColour} \n
      Case Material: ${caseMaterial} \n
      Case Accessories: ${caseAccessories} \n
      `,
    })
    console.log(`Message sent, ID: ${info.messageId}`)

    res.status(200).json({
      message:
        'Your submission has been received. Please note that you will only be contacted if you have correctly identified the device. Your data has not been saved on any database and will only be used to arrange returning the AirPods to their rightful owner.',
      status: 200,
    })
  }
)

module.exports = submitRouter
