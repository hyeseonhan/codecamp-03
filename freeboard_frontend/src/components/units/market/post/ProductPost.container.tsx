import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./ProductPost.validations";
import ProductPostUI from "./ProductPost.presenter";
import {
  CREATE_USED_ITEM,
  UPDATE_USED_ITEM,
  UPLOAD_FILE,
} from "./ProductPost.queries";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ProductPost(props) {
  const router = useRouter();
  const { handleSubmit, register, formState, setValue, trigger } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  // const { data } = useQuery(FETCH_USED_ITEM, {
  //   variables: { useditemId: String(router.query.useditemId) },
  // });

  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const [files, setFiles] = useState([null, null]);

  // const onClickPost = (Items) => async () => {
  //   try {
  //     await createUseditem({
  //       variables: {
  //         createUseditemInput: {
  //           name: Items.name,
  //           remarks: Items.remarks,
  //           contents: Items.contents,
  //           price: Number(Items.price),
  //           tags: Items.tags,
  //           images: Items.images,
  //         },
  //       },
  //       update(cache, { Items }) {
  //         cache.modify({
  //           fields: {
  //             fetchUseditem: (prev) => {
  //               return [Items.creatUseditem, ...prev];
  //             },
  //           },
  //         });
  //       },
  //     });
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };

  async function onClickPost(data) {
    console.log(data);

    const uploadFiles = files.map((el) =>
      el ? uploadFile({ variables: { file: el } }) : null
    );

    const results = await Promise.all(uploadFiles);
    const Images = results.map((el) => el?.data.uploadFile.url || "");

    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: data.tags,
            images: Images,
            // ...data,
          },
        },
      });
      alert("상품을 등록합니다.");
      router.push(`/market/product-detail/${result.data.createUseditem._id}`);
    } catch (error) {
      console.log(error.message);
    }
  }

  // web editor
  function onChangeEditior(value) {
    console.log(value);
    // register로 등록하지 않고, 강제로 값을 넣어주는 기능
    setValue("contents", value === "<p><br></p>" ? "" : value);

    // register로 등록하지 않고, 강제로 값을 넣어주는 기능
    trigger("contents");
  }

  function onChangeFiles(file: File, index: number) {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
  }

  function onClickCancelUpdate() {
    router.push(`/market/product-detail/${router.query.useditemId}`);
  }

  async function onClickUpdate(data) {
    // 이미지수정
    const uploadFiles = files.map((el) =>
      el ? uploadFile({ variables: { file: el } }) : null
    );
    const results = await Promise.all(uploadFiles);
    const nextImages = results.map((el) => el?.data.uploadFile.url || "");
    data.images = nextImages;

    if (props.data?.fetchUseditem.images?.lenght) {
      const prevImages = [...props.data?.fetchUseditem.images];
      data.images = prevImages.map((el, index) => nextImages[index] || el);
    } else {
      data.images = nextImages;
    }

    try {
      const result = await updateUseditem({
        variables: {
          updateUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: data.tags,
            images: data.images,
            // ...data,
          },
          useditemId: router.query.useditemId,
        },
      });

      router.push(`/market/product-detail/${result.data.updateUseditem._id}`);
      console.log("result:", result);
    } catch (error) {
      alert(error.message);
    }
  }

  function onChangeFiles(file: File, index: number) {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
  }

  return (
    <ProductPostUI
      handleSubmit={handleSubmit}
      register={register}
      onClickPost={onClickPost}
      formState={formState}
      onChangeFiles={onChangeFiles}
      onClickUpdate={onClickUpdate}
      onClickCancelUpdate={onClickCancelUpdate}
      onChangeEditior={onChangeEditior}
      isEdit={props.isEdit}
      data={props.data} // pages/../edit의 FETCH_USED_ITEMdml data를 props로 가져와서 defaultValue에 사용함
    />
  );
}
