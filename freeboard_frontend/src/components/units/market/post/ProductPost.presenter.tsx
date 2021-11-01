import { useFormState } from "react-hook-form";
import Button01 from "../../../commons/buttons/01/Button01";
import ErrorMessage01 from "../../../commons/errormessages/01/ErrorMessage01";
import Input01 from "../../../commons/inputs/01/Input01";
import ItemImgUpload from "../../../commons/uploads/itemimgupload/Uploads02.container";
import KakaoMapPost from "../../../commons/kakaomap/kakaomap-post";
import {
  Wrapper,
  Title,
  ContentsWrapper,
  TitleName,
  UndderInput,
  UnderWrapper,
  ImageWrapper,
  OptionWrapper,
  RadioButton,
  RadioLabel,
  ButtonWrapper,
} from "./ProductPost.styles";
// import ReactQuill from "react-quill"; 프론트엔드 서버에서 그릴 때, document가 없어서 문제가 됨!!
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

export default function ProductPostUI(props: any) {
  return (
    <Wrapper
      onSubmit={props.handleSubmit(
        props.isEdit ? props.onClickUpdate : props.onClickPost
      )}
    >
      <Title>{props.isEdit ? "MODIFICATION" : "Product Registration"}</Title>
      <Input01
        name="상품명"
        type="text"
        placeholder="상품명을 작성해주세요"
        register={props.register("name")}
        defaultValue={props.data?.fetchUseditem.name}
      />
      <ErrorMessage01 message={props.formState.errors.name?.message} />
      {/* <div>{props.formState.errors.remarks?.message}</div> 공통컴포넌트로 나누지않는 방식 */}
      <Input01
        name="한줄요약"
        type="text"
        placeholder="상품명을 작성해주세요"
        register={props.register("remarks")}
        defaultValue={props.data?.fetchUseditem.remarks}
      />
      <ErrorMessage01 message={props.formState.errors.remarks?.message} />
      <ContentsWrapper>
        <TitleName>상품설명</TitleName>

        {props.isEdit ? (
          <>
            {props.data?.fetchUseditem.contents && (
              <ReactQuill
                style={{ height: "320px" }}
                onChange={props.onChangeEditior}
                placeholder="상품을 설명해주세요."
                // register={props.register("contents")} //공통컴포넌트에서 불러오는게 아니므로 이렇게 쓰면 안됨
                // {...props.register("contents")} // react-hook-form과 연결되있지않음
                defaultValue={props.data?.fetchUseditem.contents}
              />
            )}
          </>
        ) : (
          <ReactQuill
            style={{ height: "320px" }}
            onChange={props.onChangeEditior}
            placeholder="상품을 설명해주세요."
            // register={props.register("contents")} //공통컴포넌트에서 불러오는게 아니므로 이렇게 쓰면 안됨
            // {...props.register("contents")} //react-hook-form과 연결되있지않음
          />
        )}

        <ErrorMessage01 message={props.formState.errors.contents?.message} />
      </ContentsWrapper>
      <Input01
        name="판매가격"
        type="text"
        placeholder="판매 가격을 입력해주세요"
        register={props.register("price")}
        defaultValue={props.data?.fetchUseditem.price}
      />
      <ErrorMessage01 message={props.formState.errors.price?.message} />
      <Input01
        name="태그입력"
        type="text"
        placeholder="#태그 #태그 #태그"
        register={props.register("tags")}
        defaultValue={props.data?.fetchUseditem.tags}
      />
      <ErrorMessage01 message={props.formState.errors.tags?.message} />
      <KakaoMapPost onChangeAddressDetail={props.onChangeAddressDetail} />
      <UnderWrapper>
        <TitleName>사진 첨부</TitleName>
        <ImageWrapper>
          {new Array(2).fill(1).map((el, index) => (
            <ItemImgUpload
              type="button"
              onChangeFiles={props.onChangeFiles}
              key={`${el}_${index}`}
              // key={uuidv4()}
              index={index}
              defaultValue={props.data?.fetchUseditem.images?.[index]}
              register={props.register("images")}
            />
          ))}
        </ImageWrapper>
        <OptionWrapper>
          <TitleName>메인 사진 설정</TitleName>
          <RadioButton type="radio" name="radio-button" />
          <RadioLabel htmlFor="picture1">사진 1</RadioLabel>
          <RadioButton type="radio" name="radio-button" />
          <RadioLabel htmlFor="picture1">사진 2</RadioLabel>
        </OptionWrapper>
      </UnderWrapper>
      <ButtonWrapper>
        {!props.isEdit && (
          <Button01
            name="등록하기"
            // type="button"
            isValid={props.formState.isValid}
          />
        )}
        {props.isEdit && (
          <>
            <Button01
              name="취소하기"
              type="submit"
              // onClick={props.onClickCancelUpdate}
            />
            <Button01
              name="수정하기"
              type="submit"
              // onClick={props.onClickUpdate}
            />
          </>
        )}
      </ButtonWrapper>
    </Wrapper>
  );
}
