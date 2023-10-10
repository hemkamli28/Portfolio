/** @type {import('next').NextConfig} */
const nextConfig = {

    plugins: ['stylelint'],
    rules: {
      'stylelint/selector-no-qualifying-type': null,
    }
}

module.exports = nextConfig
