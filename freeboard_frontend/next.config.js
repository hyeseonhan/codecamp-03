module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "freeboard_frontend",
  exportPathMap: () => ({
    "/": { page: "/" },
    "/boards": { page: "/boards" },
    "/market": { page: "/market" },
  }),
};
