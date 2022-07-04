import { CartIconContainer, ItemCount } from "./cart-icon.styles";
import ShoppingBag from "../../assets/shopping-bag.svg";

const CartIcon = () => {
  return (
    <CartIconContainer>
      <img src={ShoppingBag} alt="shopping-bag" />
      <ItemCount>0</ItemCount>
    </CartIconContainer>
  );
};
export default CartIcon;
