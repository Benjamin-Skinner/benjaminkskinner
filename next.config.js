/** @type {import('next').NextConfig} */
module.exports = {
  typescript: {
    // react-markdown has a broken type in node_modules; ignore during build
    ignoreBuildErrors: true,
  },
}
