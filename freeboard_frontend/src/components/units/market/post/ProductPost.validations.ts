import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("상품명을 작성해주세요"),
  remarks: yup.string().required("한줄요약을 입력해주세요"),
  contents: yup.string().required("상품 내용을 작성해주세요"),
  price: yup.string().required("판매가격을 입력해주세요"),
  tags: yup.string().required("태그를 입력해주세요"),
});
