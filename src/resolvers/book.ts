import bookModel from "../mongoose/models/books";

interface IParams {
  name: String;
  description: String;
}

export = {
  Query: {
    getBooks: async (_: any) => await bookModel.find(),
  },
  Mutation: {
    createBook: async (_: any, { name, description }: IParams) =>
      await bookModel.create({ name, description }),
  },
};
