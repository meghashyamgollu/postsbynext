// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ['picsum.photos'],
//   },
// }

// https://picsum.photos/200/200

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["picsum.photos"],
  },
  async rewrites(){
    return [
      {
        source: "/:view?type=:type",
        has : [{type: 'query', key: 'type'} ],
        destination: "/:type",
      },
    ];
  }
}
