require('dotenv').config()
module.exports = {
  PORT: process.env.PORT,
  RECAPTCHA_URL: process.env.RECAPTCHA_URL,
  RECAPTCHA_SECRET: process.env.RECAPTCHA_SECRET,
  SSL_CERT: process.env.SSL_CERT,
  SSL_KEY: process.env.SSL_KEY,
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_USER: process.env.SMTP_USER,
  SMTP_PASS: process.env.SMTP_PASS,
  SMTP_PORT: process.env.SMTP_PORT,
}
