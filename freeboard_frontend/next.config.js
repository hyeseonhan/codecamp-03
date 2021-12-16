module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "freeboard_frontend",
  exportPathMap: () => ({
    "/": { page: "/" },
    "/404": { page: "/404" },

    "/boards/[board_post_detail]/edit": {
      page: "/boards/[board_post_detail]/edit",
    },
    "/boards/board-post": { page: "/boards/board-post" },
    "/boards/list": { page: "/boards/list" },
    "/boards/openapi": { page: "/boards/openapi" },

    "/home": { page: "/home" },

    "/market/product-detail/[useditemId]/edit": {
      page: "/market/product-detail/[useditemId]/edit",
    },
    "/market/flickity": { page: "/market/flickity" },
    "/market/product-list": { page: "/market/product-list" },
    "/market/product-post": { page: "/market/product-post" },

    // "/mypage/createacc": { page: "/mypage" },
    // "/mypage/login": { page: "/mypage" },
    // "/mypage/loginfo": { page: "/mypage" },
    // "/mypage/mymarket": { page: "/mypage" },
    // "/mypage/mypoint": { page: "/mypage" },
    // "/mypage/myprofile": { page: "/mypage" },
  }),
  assetPrefix: "/ssr",
};
