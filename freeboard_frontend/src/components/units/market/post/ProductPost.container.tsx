import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./ProductPost.validations";
import ProductPostUI from "./ProductPost.presenter";
import { CREATE_USED_ITEM } from "./ProductPost.queries";
import { useMutation } from "@apollo/client";
import { Contents, Price, Remarks, Tags } from "../detail/ProductDetail.styles";
import { useRouter } from "next/router";

export default function ProductPost() {
  const router = useRouter();
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const [createUseditem] = useMutation(CREATE_USED_ITEM);

  async function onClickPost(data) {
    console.log(data);
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: data.tags,
          },
        },
      });
      router.push(`/market/product-detail/${result.data.createUseditem._id}`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ProductPostUI
      handleSubmit={handleSubmit}
      register={register}
      onClickPost={onClickPost}
      formState={formState}
    />
  );
}
