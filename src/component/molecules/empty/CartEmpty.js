import { useNavigate } from "react-router-dom";
import ButtonLink from "../../atoms/buttons/ButtonLink";

const CartEmpty = ({ link }) => {
  const navigate = useNavigate();
  return (
    <div className="not-found">
      <h4>No Services in cart to book</h4>
      <ButtonLink link={link} click={() => navigate(`/${link}`)} />
    </div>
  );
};

export default CartEmpty;
