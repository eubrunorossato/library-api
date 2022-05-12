import userModel from "../mongoose/models/user";

interface IParams {
  name: String;
  email: String;
  photoUrl: String;
}

export = {
  Query: {
    getUsers: async (_: any) => await userModel.find(),
    getUser: async (_: any, { email }: IParams) =>
      await userModel.findOne({ email }),
  },
  Mutation: {
    createUser: async (_: any, { name, email, photoUrl }: IParams) =>
      await userModel.create({ name, email, photoUrl }),
  },
};
