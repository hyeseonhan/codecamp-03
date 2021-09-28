// console.log("Hello world");
import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server";
import Board from "./Board.postgres";

// 플레이그라운드에서 보는내용(타입정의)
const typeDefs = gql`
  input CreateBoardInput {
    writer: String
    title: String
    age: Int
  }

  # Retrun 이름은 아무거나 해도 상관없음
  type Return {
    message: String
    number: Int
  }
  # 타입의 이름이 Board일뿐.
  type Board {
    number: Int
    writer: String
    title: String
    age: Int
  }

  type Query {
    fetchBoard: Board
    fetchBoards: [Board] # 객체니까 [] 담는다.
  }

  type Mutation {
    # Return 안에 메세지가 들어있음
    #( ) 안에 input 으로 타입을 씀. 갯수가 많을 때 위에 처럼 input type을 따로 줌.
    # 주석 createBoard(writer: String, title: String, age: Int): Return
    createBoard(createBoardInput: CreateBoardInput): Return # 반드시 있어야하면 CreateBoardInput!
    updateBoard: Return
    deleteBoard: Return
  }
`;
// type 을 지정해줘에 local4000에서 볼수 잇음

// 실제로 실행되는 API(실행되는 함수)
const resolvers = {
  Query: {
    // API 명
    fetchBoard: async () => {
      // 데이터베이스에서 해당하는 데이터 꺼내서 브라우저에 던져주기(응답주기)
      // findeOne: 하나를 찾아와라. where: 위치?
      const result = await Board.findOne({
        where: { number: 1, deleteAt: null },
      });
      return result; // fetchBoards 와 마찬가지로 배열이니까 굳이 길게 안쓰고 return result로 하면됨.

      // return {
      //세개의 객체가 됨
      //   writer: result?.writer,
      //   title: result?.title,
      //   age: result?.age,
      // };

      // return { writer: "철수", title: "제목입니다." };
    },
    fetchBoards: async () => {
      const result = await Board.find({ where: { deleteAt: null } }); //이미 배열에 담겨져 나옴 [{..},{..}...]
      return result;
      //  result.map 맵은 배열일 때 사용. 이미 배열이 담겨져 나오니까 리턴리졸트
    },
  },

  Mutation: {
    // API 명
    createBoard: async (_: any, args: any) => {
      // 데이터베이스에 데이터 입력하기
      // const result = await Board.insert({
      //   title: args.title, //"안녕하세요",
      //   writer: args.writer, //"철수",
      //   age: args.age, //20,
      // });
      const result = await Board.insert({
        ...args.createBoardInput, //아래 세개랑 같은 내용
        // title: args.createBoardInput.title,
        // writer: args.createBoardInput.writer,
        // age: args.createBoardInput.age,
      });
      console.log(result);
      return { message: "성공했습니다.", number: result.identifiers[0].number };
      // return { message: "성공했습니다.", number: 3 };
    },
    updateBoard: async (_: any, args: any) => {
      await Board.update({ number: 3 }, { writer: " 영희" });
      //(  {조건}, {변경할 값} } )
      return { message: "수정완료" };
    },

    deleteBoard: async () => {
      // await Board.delete({ number: 4 });
      await Board.update({ number: 5 }, { deleteAt: new Date() });
      return { message: "삭제완료" };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

createConnection({
  type: "postgres",
  database: "postgres",
  username: "postgres",
  password: "postgres2021",
  port: 5011,
  host: "34.64.221.225",
  entities: [__dirname + "/*.postgres.ts"],
  logging: true,
  synchronize: true,
})
  .then(() => {
    // 연결성공시 실행
    console.log("접속완료!!!");
    server.listen({ port: 4000 }); // 연결을 기다리겠다.
  })
  .catch((error) => {
    console.log(error);
  }); //어떤 에러인지 확인할 때
