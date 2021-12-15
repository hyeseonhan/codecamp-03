module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "freeboard_frontend",
  exportPathMap: () => ({
    "/": { page: "/" },
    "/404": { page: "/404" },

    // "/boards/board-post": { page: "/boards/board-post" },
    // "/boards/list": { page: "/boards/list" },
    // "/boards/openapi": { page: "/boards/openapi" },

    "/home": { page: "/home" },
    "/main": { page: "/main" },

    // "/market/flickity": { page: "/market/flickity" },
    // "/market/product-list": { page: "/market/product-list" },
    // "/market/product-post": { page: "/market/product-post" },

    "/mypage/createacc": { page: "/mypage" },
    "/mypage/login": { page: "/mypage" },
    "/mypage/loginfo": { page: "/mypage" },
    "/mypage/mymarket": { page: "/mypage" },
    "/mypage/mypoint": { page: "/mypage" },
    "/mypage/myprofile": { page: "/mypage" },
  }),
};
