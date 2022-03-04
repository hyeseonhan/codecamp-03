import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./ProductPost.validations";
import ProductPostUI from "./ProductPost.presenter";
import {
  CREATE_USED_ITEM,
  UPDATE_USED_ITEM,
  UPLOAD_FILE,
  FETCH_USED_ITEM,
} from "./ProductPost.queries";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import { IProductPostProps } from "./ProductPost.types";

export default function ProductPost(props: IProductPostProps) {
  const router = useRouter();
  const { handleSubmit, register, formState, setValue, trigger } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  // const { data: imagesdata } = useQuery(FETCH_USED_ITEM, {
  //   variables: { useditemId: String(router.query.useditemId) },
  // });

  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const [files, setFiles] = useState([null, null]);

  const { lat, lng, location } = useContext(GlobalContext);
  const [addressDetail, setAddressDetail] = useState("");

  // console.log(formState);
  async function onClickPost(data) {
    // console.log(data);

    const uploadFiles = files
      // .filter((el) => el)
      .map((el) => (el ? uploadFile({ variables: { file: el } }) : null));
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
            useditemAddress: {
              address: location,
              addressDetail: addressDetail,
              lat: lat,
              lng: lng,
            },
          },
        },
      });
      alert("상품을 등록합니다.");
      router.push(`/market/product-detail/${result.data.createUseditem._id}`);
    } catch (error) {
      alert(error.message);
    }
  }

  // web editor
  function onChangeEditior(value: string) {
    // console.log(value);
    // register로 등록하지 않고, 강제로 값을 넣어주는 기능
    setValue("contents", value === "<p><br></p>" ? "" : value);

    // register로 등록하지 않고, 강제로 값을 넣어주는 기능
    trigger("contents");
  }

  // kakaomap-post
  function onChangeAddressDetail(event: ChangeEvent<HTMLInputElement>) {
    setAddressDetail(event.target.value);
  }

  function onClickCancelUpdate() {
    router.push(`/market/product-detail/${router.query.useditemId}`);
  }

  function onChangeFiles(file: File, index: number) {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
  }

  async function onClickUpdate(data) {
    const myUpdateUseditemInput: any = {};
    if (data.name) myUpdateUseditemInput.name = data.name;
    if (data.remarks) myUpdateUseditemInput.remarks = data.remarks;
    if (data.contents) myUpdateUseditemInput.contents = data.contents;
    if (Number(data.price)) myUpdateUseditemInput.price = Number(data.price);
    if (data.tags) myUpdateUseditemInput.tags = data.tags;
    if (lat || lng || location || addressDetail) {
      myUpdateUseditemInput.useditemAddress = {};
      if (lat) myUpdateUseditemInput.useditemAddress.lat = lat;
      if (lng) myUpdateUseditemInput.useditemAddress.lng = lng;
      if (location) myUpdateUseditemInput.useditemAddress.address = location;
      if (addressDetail)
        myUpdateUseditemInput.useditemAddress.addressDetail = addressDetail;
    }

    // 이미지수정
    const uploadFiles = files.map((el) =>
      el ? uploadFile({ variables: { file: el } }) : null
    );
    const results = await Promise.all(uploadFiles);
    const nextImages = results.map((el) => el?.data.uploadFile.url || "");
    myUpdateUseditemInput.images = nextImages;

    console.log("3333", nextImages);

    if (props.data?.fetchUseditem.images?.length) {
      const prevImages = [...props.data?.fetchUseditem.images];
      myUpdateUseditemInput.images = prevImages.map(
        (el, index) => nextImages[index] || el
      );
    } else {
      myUpdateUseditemInput.images = nextImages;
    }

    try {
      const result = await updateUseditem({
        variables: {
          updateUseditemInput: myUpdateUseditemInput,
          useditemId: router.query.useditemId,
        },
      });

      // router.push(`/market/product-detail/${result.data.updateUseditem._id}`);
      router.push(`/market/product-detail/${router.query.useditemId}`);
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    // if (props.data) {
    if (props.isEdit && props.data?.fetchUseditem) {
      setValue("name", props.data?.fetchUseditem.name, {
        shouldValidate: true,
      });
      setValue("remarks", props.data?.fetchUseditem.remarks, {
        shouldValidate: true,
      });
      setValue("contents", props.data?.fetchUseditem.contents, {
        shouldValidate: true,
      });
      setValue("price", props.data?.fetchUseditem.price, {
        shouldValidate: true,
      });
      setValue("tags", String(props.data?.fetchUseditem.tags), {
        shouldValidate: true,
      });
      setValue("images", props.data?.fetchUseditem.images, {
        shouldValidate: true,
      });
    }
    // }, [props.data]);
  }, [props.isEdit, props.data?.fetchUseditem]);

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
      onChangeAddressDetail={onChangeAddressDetail}
      isEdit={props.isEdit}
      data={props.data} // pages/../edit의 FETCH_USED_ITEMdml data를 props로 가져와서 defaultValue에 사용함
    />
  );
}
