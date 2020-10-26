import { MikroORM } from "@mikro-orm/core";
import { ___prod___ }  from "./constants";
import { Post } from "./entities/Post";
import microConfig from "./mikro-orm.config";
import express from "express";

const main = async () => {
  const orm = await MikroORM.init(microConfig);
  await orm.getMigrator().up();

  const app = express();
  app.get("/",  (__, res) => {
     res.send("hello");
  });
  app.listen(4000, () => {
      console.log("sever started on localhost:4000");
  });
 };

 main().catch((err) => {
     console.error(err);
 });


 