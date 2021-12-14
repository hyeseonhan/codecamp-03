
# 개인 프로젝트
![무제](https://user-images.githubusercontent.com/68494080/145347601-d61435b9-d7ac-4887-a6ae-282253502b7b.gif)

>Postmalone ( https://postmalone.shop )
```
프로젝트 기간 : 2021.09 - 2021.10
프론트엔드 및 서비스 배포: 한혜선
백엔드: 코드캠프 자체 제공
서비스 개요: Web Application
자유게시판, 중고마켓, 마이페이지, 유튜브검색, 홈페이지를 구현한 웹 페이지 
```
## 기능 소개
### 랜딩 페이지
- React-Slick 라이브러리 사용
- SelectBox 직접 구현

### 홈 (페이지 이름 : HOME)
* React-flickity-component 라이브러리 사용
* map을 이용해서 게시판과 중고마켓의 베스트 게시물 4개씩 불러와서 보이기

### 유튜브검색 (페이지 이름:  YOUTUBE)
- 오픈Api 사용
    - 카카오 developers Daum 검색 Api로 유튜브 영상 검색/재생

### 자유게시판 (페이지 이름: BOARD)
* 게시물 리스트 페이지
  * map을 이용해 게시물 목록 보이기
  * debounce 기능을 이용해 게시글 검색

- 게시물 등록 페이지 
  * 게시글 등록 컴포넌트 생성
  * 이미지 업로드 
  * 카카오 Postcode API 로 주소 검색 
  * React-Player 라이브러리를 이용해 유튜브 동영상 업로드
    
- 게시글 상세보기 페이지
  * 동적라우팅을 이용한 게시글 고유 id 이동
  * 게시글 등록 컴포넌트를 이용하여 게시글 수정
  * 게시글 삭제 기능
  * 좋아요/ 싫어요 버튼 클릭하여 갯수 카운트

- 댓글 컴포넌트
  * 댓글 작성, 삭제 및 별점 기능
  * 댓글 작성 컴포넌트를 이용하여 댓글 수정
  * AntDesign 별점 라이브러리를 이용한 평점 매기기

### 중고마켓 (페이지 이름: MERCH)
- 상품 리스트 페이지
    - react-infinite-scroller 라이브러리 사용하여 무한 스크롤
    
- 상품 등록 페이지
  - useForm 과 yupResolver 를 이용한 최적화 및 유효성 검사와 상품 등록 컴포넌트 생성
  - Reat-Quill를 사용하여 웹 에디터 구현
  - Kakao-map API 를 이용해 맵 마커 기능/ 주소 자동 입력
  - 이미지 등록 / 수정 기능 

- 상품 상세 페이지
  - React-Slick 라이브러리 사용하여 상품 이미지 보여주기
  - Kakao-map API 를 이용해 맵으로 위치 보여주기
  - 상품 구매 / 삭제 기능
  - 상품 등록 컴포넌트를 이용한 상품 수정

- 댓글 컴포넌트
  - 댓글 등록, 수정 및 삭제 
  - 대댓글 등록, 수정 및 삭제

### 로그인/회원가입 페이지 (페이지 이름: LOGIN)
- 로그인 페이지
  - Context API 를 통한 로그인 구현
  - HOF 와 AcessToken 이용해 권한분기
- 회원가입 페이지
  - 정규표현식을 이용해 이메일 형식 검사

### 마이페이지 (페이지 이름: ACC / INFO)
- 로그아웃
  - 로컬 스토리지에서 refreshToken을 삭제하여 로그아웃  
- 최근 본 상품  
  - 최근 본 상품의 Id를 로컬 스토리지에 저장하여 마이페이지에 12개의 최근 상품 보이기
- 포인트 충전하기
  - 아임포트 API를 이용해서 포인트 충전
- 마이페이지 세부 목록
    - 포인트 페이지: 전체내역, 충전내역, 구매내역, 판매내역 Grqphql-API로 보이기
    - 마켓 페이지: 나의 상품, 찜한 상품내역 Grqphql-API로 보이기 
- 프로필 수정페이지
    - 프로필 사진 등록 / 수정 

</br>

## 사용된 기술 스택
### 프론트엔드
- Javascript & Typescript
- React.js
- Next.js
- Apollo-Client, Apollo-Server
- GraphQL
- axios
- Rest-API
### 백엔드 (코드캠프 자체 제공)
- Node.js
- typeORM
- Nest.js
- Postgres
- JWT
### 배포 및 개발 버전 관리 시스템
- Github
- Google Cloud Platform
- Docker
