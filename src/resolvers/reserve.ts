import reserveModel from "../mongoose/models/reserve";

interface IParams {
  bookId: String;
  userName: String;
  takeDate: Date;
  devolutionDate: Date;
}

export = {
  Query: {
    getReserves: async (_: any) => await reserveModel.find(),
  },
  Mutation: {
    createReserve: async (
      _: any,
      { bookId, takeDate, devolutionDate, userName }: IParams
    ) =>
      await reserveModel.create({ bookId, takeDate, devolutionDate, userName }),
  },
};
