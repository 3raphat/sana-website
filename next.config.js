/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/invite',
        destination:
          'https://discord.com/api/oauth2/authorize?client_id=995348230449672212&permissions=274881334272&scope=bot%20applications.commands',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
