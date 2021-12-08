# 개인 프로젝트

>Postmalone ( https://postmalone.shop )
```
프로젝트 기간 : 2021.09 - 2021.10
[프론트 엔드] React, Next.js
자유게시판, 중고마켓, 마이페이지, 유튜브검색, 홈페이지를 구현한 웹 페이지 
```

## 랜딩 페이지
![랜딩페이지](https://user-images.githubusercontent.com/68494080/145209875-560ca3ee-4089-48f7-99d9-0fcd887ab065.png)

- React-Slick 라이브러리 사용
- SelectBox 직접 구현

</br>

## 홈 (페이지 이름 : HOME)
<img width="800" alt="스크린샷 2021-12-05 오후 9 55 47" src="https://user-images.githubusercontent.com/68494080/145204157-d6771022-c1c2-4c51-a910-82df072888f6.png">

* React-flickity-component 라이브러리 사용
* map을 이용해서 게시판과 중고마켓의 베스트 게시물 4개를 불러와 보여줌

</br>

## 유튜브검색 (페이지 이름:  YOUTUBE)
<img width="800" alt="유튜브페이지" src="https://user-images.githubusercontent.com/68494080/145204616-1b39d4aa-531b-4413-96ab-70a060f0607b.png">

- 오픈Api 사용
    - 카카오 developers - Daum 검색 Api 로 기능 구현

</br>

## 자유게시판 (페이지 이름: BOARD)

* 리스트 페이지 기능 구현
  * map을 이용해 리스트 구현
  * debounce 기능으로 데이터 검색 컴포넌트 구성
<img width="800" alt="게시판리스트" src="https://user-images.githubusercontent.com/68494080/145206504-9957717d-1b27-4fef-adc4-081f27f99cd8.png">


- 게시물 등록 페이지 기능 구현
  * 게시글 작성 컴포넌트 구현
    <img width="800" alt="게시판등록" src="https://user-images.githubusercontent.com/68494080/145208207-4d8cffbd-d44b-405f-85e1-0fdaa2774947.png">
  * 이미지 업로드 기능 구현
    <img width="800" alt="게시판이미지등록" src="https://user-images.githubusercontent.com/68494080/145206703-d2169488-689d-43ee-9d3d-70886777d3f2.png">    
        
  * 카카오 Postcode API 로 주소 검색 기능 구현
    <img width="800" alt="게시판다음지도" src="https://user-images.githubusercontent.com/68494080/145206749-56b7b6f4-2587-4c75-953b-68ec1dbcac95.png">

  * React-Player 라이브러리를 이용해 유튜브 동영상 업로드 구현

</br>
    
- 게시글 상세보기 페이기 기능 및 구현
  * 동적라우팅을 이요한 게시글 고유 id 이동 구현
  * 게시글 수정 / 삭제 기능 구현
  * 좋아요/ 싫어요 기능 구현
<img width="800" alt="게시판상세보기" src="https://user-images.githubusercontent.com/68494080/145206851-aab071d4-a0a3-404c-ad1f-3332b06b04fa.png">

</br>

- 댓글 컴포넌트 기능 구현
  * 댓글 작성 수정 삭제 별점 기능
  * AntDesign 별점 라이브러리를 이용한 별점 기능 구현
<img width="800" alt="게시판 댓글" src="https://user-images.githubusercontent.com/68494080/145206961-1affe42d-aaa8-4477-930d-5acb9141cc8d.png">
    
</br>

## 중고마켓 (페이지 이름: MERCH)

- 상품 리스트 페이지
    - react-infinite-scroller 라이브러로 무한스크롤 구현
    <img width="800" alt="중고마켓리스트" src="https://user-images.githubusercontent.com/68494080/145209161-4cdb0625-0563-43be-ac76-db34515f72b6.png">
    
</br>

- 상품 등록 페이지
  - useForm 과 yupResolver 를 이용한 검증 / 등록 기능 구현
  - Reat-Quill를 사용해 웹 에디터 구현 
  <img width="800" alt="중고마켓상품등록" src="https://user-images.githubusercontent.com/68494080/145209372-fc01a512-0faf-40f4-bc1f-8c6e3eb7b073.png">
  
  - Kakao-map API 를 이용해 맵 마커 기능/ 주소 자동 입력 구현
    <img width="800" alt="중고마켓상품등록지도" src="https://user-images.githubusercontent.com/68494080/145209570-f8fb5b84-843b-428b-85ac-d15fc4649ae6.png">
    
  - 이미지 등록 / 수정 기능 구현
    
</br>

- 상품 상세 페이지
  - React-Slick 라이브러리 사용하여 상품 이미지 보여줌
  - Kakao-map API 를 이용해 맵으로 위치 확인 기능
  - 상품 구매 / 삭제 기능 구현
  - 상품 등록 컴포넌트를 이용한 상품 수정 기능 구현
  <img width="800" alt="중고마켓상품상세" src="https://user-images.githubusercontent.com/68494080/145210136-6893423d-3f67-4fa3-817f-80aeb9960dcd.png">
    
</br>

- 댓글 컴포넌트 기능 구현
  - 댓글 등록 / 수정 기능 구현
  <img width="800" alt="중고마켓댓글" src="https://user-images.githubusercontent.com/68494080/145210288-0d09f488-5348-431d-8d43-e2f2cacf3c71.png">
  <img width="800" alt="중고마켓댓글수정" src="https://user-images.githubusercontent.com/68494080/145210753-ec16b3b9-0df2-4390-bace-c44500c6be82.png">

    
</br>

- 댓글 답글 컴포넌트 를 이용한 답글 등록 / 수정 기능 구현  
  <img width="800" alt="중고마켓대댓글등록" src="https://user-images.githubusercontent.com/68494080/145210843-6403298a-88d5-40ec-baca-d7e132d06991.png">
  <img width="800" alt="중고마켓대댓글수정" src="https://user-images.githubusercontent.com/68494080/145210873-78fd4e16-e56f-4110-9697-a0c71c6f46ac.png">

</br>

## 마이페이지 (페이지 이름: ACC / INFO)

</br>

## 유튜브검색 (페이지 이름:  YOUTUBE)

</br>

## 유튜브검색 (페이지 이름:  YOUTUBE)
