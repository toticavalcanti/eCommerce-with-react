export default {
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/amazona',
  JWT_SECRET: process.env.JWT_SECRET || 'mysecret',
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb'
}