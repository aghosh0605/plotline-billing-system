import { ServiceAPIResponse } from "../../types/service-response";
import { AppDataSource } from "../data-source";
import { Product } from "../entity/Product";

const getAll = async (
  page: string
): Promise<ServiceAPIResponse<Array<Product>>> => {
  /* fetch all products here */
  if (+page < 1) {
    return {
      statusCode: 400,
      body: { success: false, message: "🛒 Page Number should start from 1" },
    };
  }
  const limit: number = 5;
  const skip: number = (+page - 1) * limit;
  console.log(typeof skip);
  const products = await AppDataSource.getRepository(Product).find({
    order: {
      id: "ASC",
    },
    skip: skip,
    take: limit,
  });
  return {
    statusCode: 200,
    body: { success: true, message: "🛒 Fetched all products", data: products },
  };
};

export { getAll };
