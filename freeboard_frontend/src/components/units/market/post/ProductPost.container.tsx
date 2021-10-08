import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./ProductPost.validations";
import ProductPostUI from "./ProductPost.presenter";

export default function ProductPost() {
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  function onClickPost(data) {
    console.log(data);
  }

  return (
    <ProductPostUI
      handleSubmit={handleSubmit}
      register={register}
      onClickPost={onClickPost}
    />
  );
}
