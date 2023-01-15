import { useContext, useState } from "react";
import { CalendarContext } from "../../utils/context/CalendarContext";
import * as yup from "yup";
import Forms from "./Forms";
import CardHeader from "../molecules/card/CardHeader";
import { AdminContext } from "../../utils/context/AdminContext";
import { formatDate, formatTime } from "../../utils/moment";
import ListItem from "../atoms/ListItem";

const schema = yup.object().shape({
  name: yup.string().required("*Required field"),
  email: yup.string().email().required("*Required field"),
});
const CalendarEvents = () => {
  const { bookNow, log, selectedDay, appointment, setAppointment } =
    useContext(CalendarContext);
  const { isAdmin } = useContext(AdminContext);
  // const [appointment, setApp] = useState();
  const [confirmation, setConfirmation] = useState(false);
  const onSubmit = (values) => bookNow(values, appointment);
  console.log("appointment", appointment);
  return (
    <div id="calendar-events">
      <CardHeader data={selectedDay} />
      <div className="list">
        {selectedDay.hasList ? (
          selectedDay.list.map(
            (d) =>
              d.isOpen &&
              (d.uid === appointment?.uid ? (
                <ListItem
                  key={d.uid}
                  data={d}
                  click={setAppointment}
                  icon="check"
                />
              ) : (
                <ListItem
                  key={d.uid}
                  data={d}
                  click={setAppointment}
                  icon="uncheck"
                />
              ))
          )
        ) : isAdmin ? (
          <h4>No appointment this day, try a different day</h4>
        ) : (
          <h4>All booked up, please come back tomorrow</h4>
        )}
      </div>

      {confirmation && (
        <>
          <p>
            Appointment set for{" "}
            <strong>
              {formatDate(appointment?.start.dateTime)} @{" "}
              {formatTime(appointment?.start.dateTime)} -{" "}
              {formatTime(appointment?.end.dateTime)}
            </strong>
          </p>
          {log &&
            log.map((l) => (
              <p key={l} className={l.success ? "message-success" : "required"}>
                {l.message}
              </p>
            ))}
          <Forms data={{ values: { name: "", email: "" }, schema, onSubmit }} />
        </>
      )}
    </div>
  );
};
export default CalendarEvents;
