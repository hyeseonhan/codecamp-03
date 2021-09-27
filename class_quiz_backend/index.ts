import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server";
import Board from "./Board.postgres";
import Product from "./Product.postgres";

const typeDefs = gql`
  input CreateBoardInput {
    writer: String
    title: String
    age: Int
  }

  input CreateProductInput {
    name: String
    detail: String
    price: Int
  }

  input UpdateProductInput {
    name: String
    detail: String
    price: Int
  }

  type Return {
    message: String
    number: Int
  }

  type Board {
    number: Int
    writer: String
    title: String
    age: Int
  }

  type Product {
    number: Int
    seller: String
    name: String
    detail: String
    price: Int
    _id: String
  }

  type Mutation {
    createBoard(createBoardInput: CreateBoardInput): Return
    updateBoard: Return
    deleteBoard: Return

    createProduct(
      seller: String
      createProductInput: CreateProductInput
    ): Return

    updateProduct(productId: ID, updateProductInput: UpdateProductInput): Return
    deleteProduct(productId: ID): Return
  }

  type Query {
    fetchBoard: Board
    fetchBoards: [Board]

    fetchProduct(productId: ID): Product
    fetchProducts: [Product]
  }
`;

const resolvers = {
  Mutation: {
    createBoard: async (_: any, args: any) => {
      const result = await Board.insert({
        ...args.createBoardInput,
      });
      console.log(result);
      return { message: "성공했습니다.", number: result.identifiers[0].number };
    },
    updateBoard: async (_: any, args: any) => {
      await Board.update({ number: 3 }, { writer: "영희" });
      return { message: "수정완료" };
    },
    deleteBoard: async () => {
      await Board.update({ number: 5 }, { deleteAt: new Date() });
      return { message: " 삭제완료" };
    },
    createProduct: async (_: any, args: any) => {
      const result = await Product.insert({
        seller: args.seller,
        ...args.createProductInput,
      });
      console.log(result);
      return {
        message: "상품 등록 완료",
        number: result.identifiers[0].number,
        _id: result.identifiers[0]._id,
      };
    },
    updateProduct: async (_: any, args: any) => {
      await Product.update(
        {
          _id: args.productId,
        },
        { ...args.updateProductInput }
      );
      return {
        message: "상품 수정 완료",
        _id: args.productId,
      };
    },
    deleteProduct: async (_: any, args: any) => {
      await Product.update({ _id: args.productId }, { deletedAt: new Date() });
      return { message: "상품을 삭제했습니다.", _id: args.productId };
    },
  },

  Query: {
    fetchBoard: async () => {
      const result = await Board.findOne({
        where: { number: 1, deleteAt: null },
      });
      return result;
    },
    fetchBoards: async () => {
      const result = await Board.find({ where: { deleteAt: null } });
      return result;
    },

    fetchProduct: async (_: any, args: any) => {
      const result = await Product.findOne({
        where: { _id: args.productId, deletedAt: null },
      });
      return result;
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
    server.listen({ port: 4000 });
  })
  .catch((error) => {
    console.log(error);
  });
