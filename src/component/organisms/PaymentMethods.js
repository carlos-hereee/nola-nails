import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../utils/context/AppContext";
import { ServicesContext } from "../../utils/context/ServicesContext";
import Buttons from "../molecules/buttons/Buttons";
import InStorePurchase from "../molecules/InStorePurchase";
import * as yup from "yup";
import AccessoryDetails from "../atoms/AccessoryDetails";
import MeetingDetails from "../atoms/MeetingDetails";
import Cost from "../atoms/Cost";
import Field from "./Field";
import CardHeader from "../molecules/card/CardHeader";

const schema = yup.object().shape({ quantity: yup.number() });
const values = { quantity: 1 };

const PaymentMethods = () => {
  const { paymentMethods, selectPaymentType, paymentType } = useContext(AppContext);
  const [total, setTotal] = useState(0);
  const { cart, onQuantityChange } = useContext(ServicesContext);

  useEffect(() => {
    if (cart.length > 0) {
      let cost = cart.reduce((a, b) => {
        return a + b.cost * b.count;
      }, 0);
      setTotal(cost);
    }
  }, [cart]);
  const handleClick = (e) => {
    selectPaymentType(e);
  };

  return (
    <div className="card-footer">
      {!paymentType.uid && (
        <p className="required">
          <strong>Please select a payment method</strong>
        </p>
      )}
      <nav className="navbar">
        {paymentMethods.map((p) => (
          <Buttons handleClick={() => handleClick(p)} key={p.uid} name={p.icon} />
        ))}
      </nav>
      {paymentType.uid && <CardHeader data={paymentType} />}
      <div className="card-section-wrapper">
        {cart.map((c) => (
          <div className="card-section-row" key={c.uid}>
            {c.isAccessory ? (
              <AccessoryDetails data={c} />
            ) : (
              <MeetingDetails meeting={c.meeting} />
            )}
            <div className="card-section-cost">
              {c.isAccessory && (
                <Field
                  data={{ values, schema }}
                  max={c.inStock}
                  change={({ target }) => onQuantityChange(target.value, c)}
                />
              )}
              {c.cost && c.count && <Cost cost={c.cost * c.count} />}
            </div>
          </div>
        ))}
      </div>
      <h3 className="total">Total ${total}</h3>
      {/* {paymentType.uid && payment[paymentType.type]} */}
    </div>
  );
};

export default PaymentMethods;
