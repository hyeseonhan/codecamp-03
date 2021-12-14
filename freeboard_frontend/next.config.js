module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "freeboard_frontend",
  exportPathMap: () => ({
    "/": { page: "/" },
    "/_next": { page: "/_next" },
    "/404": { page: "/404" },

    "/home": { page: "/home" },

    "/main": { page: "/main" },
    "/mypage": { page: "/mypage" },
  }),
};
