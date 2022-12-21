import { useContext } from "react";
import Buttons from "../component/molecules/Buttons";
import ServiceCard from "../component/organisms/ServiceCard";
import { AppContext } from "../utils/context/AppContext";
import { ServicesContext } from "../utils/context/ServicesContext";

const Services = () => {
  const { services } = useContext(AppContext);
  const { addToCart, filteredServices, filterServices, isFiltered } =
    useContext(ServicesContext);

  const handleClick = (e) => addToCart(e, true);
  const filterClick = (e) => {
    let content = e.currentTarget.textContent.split(" ").join("");
    filterServices(services, content.toLowerCase());
  };
  const service = ["all", "manicure", "pedicure"];
  return (
    <section className="service">
      <nav className="navbar">
        {service.map((s) => (
          <Buttons name={s} key={s} handleClick={filterClick} />
        ))}
      </nav>
      <div className="card-container">
        {isFiltered
          ? filteredServices.map((fs) => (
              <ServiceCard data={fs} key={fs.uid} handleClick={handleClick} />
            ))
          : services.sections.map((s) => (
              <ServiceCard data={s} key={s.uid} handleClick={handleClick} />
            ))}
      </div>
    </section>
  );
};

export default Services;
