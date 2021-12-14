module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "freeboard_frontend",
  exportPathMap: () => ({
    "/": { page: "/" },
    "/_next": { page: "/_next" },
    "/404": { page: "/404" },
    "/font": { page: "/font" },
    "/home": { page: "/home" },
    "/images": { page: "/images" },
    "/main": { page: "/main" },
    "/mypage": { page: "/mypage" },
    "/market": { page: "/market" },
    "/boards": { page: "/boards" },
  }),
};
