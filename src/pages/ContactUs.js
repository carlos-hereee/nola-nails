import { useContext } from "react";
import * as yup from "yup";
import Forms from "../component/forms/Forms";
import { CalendarContext } from "../utils/context/CalendarContext";

const schema = yup.object().shape({
  name: yup.string().required("*Required field"),
  email: yup.string().email().required("*Required field"),
  message: yup.string().required("*Required field"),
});
const values = { name: "", email: "", message: "" };

const ContactUs = () => {
  const { contactUs } = useContext(CalendarContext);
  return (
    <section className="container">
      <div className="card">
        <h2>Contact Us</h2>
        <Forms data={{ values, schema, onSubmit: contactUs }} />
      </div>
    </section>
  );
};

export default ContactUs;
