import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Erro interno do servidor",
    });
  }
);

app.listen(3333, () => console.log("Server is running on PORT 3333"));
