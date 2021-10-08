import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("상품명을 작성해주세요"),
});
