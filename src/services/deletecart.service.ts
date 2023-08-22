import { ServiceAPIResponse } from "../../types/service-response";
import { AppDataSource } from "../data-source";
import { CartItem } from "../entity/CartItem";
import { User } from "../entity/User";

const deleteCartItems = async (
  user: User
): Promise<ServiceAPIResponse<undefined>> => {
  /* Delete all items of your cart here */
  await AppDataSource.getRepository(CartItem).delete({
    user: user,
  });

  return {
    statusCode: 200,
    body: {
      success: true,
      message: "🛍️ Deleted all items from cart successfully",
    },
  };
};

export { deleteCartItems };
