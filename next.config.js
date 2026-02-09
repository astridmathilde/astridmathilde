/** @type {import('next').NextConfig} */
const nextConfig = {
}
const path = require('path')

module.exports = {
  turbopack: {
    root: path.join(__dirname, '..'),
  },
}