import { connect } from "mongoose";

export default async () => {
  connect("mongodb://localhost:27017/libary-api").catch(err => {
    console.log(err);
  });
};
