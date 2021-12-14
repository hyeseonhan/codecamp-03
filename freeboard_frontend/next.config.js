module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "freeboard_frontend",
  exportPathMap: () => ({
    "/": { page: "/" },

    "/404": { page: "/404" },

    "/home": { page: "/home" },

    "/main": { page: "/main" },
  }),
};
