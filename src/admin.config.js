import shortid from "shortid";
import { formatDate } from "./utils/moment";

export const admin = {
  menu: [
    { name: "schedule", uid: shortid.generate(), isActive: true },
    { name: "booked", uid: shortid.generate(), isActive: false },
    { name: "appointments", uid: shortid.generate(), isActive: false },
  ],
  schedule: {
    title: "My Schedule",
    subtitle: "",
    isHeroEmpty: true,
    isNav: false,
    // nav: ["all", "today", "booked"],
    isIcon: false,
    sections: [],
  },
  booked: {
    title: "Upcoming appointments",
    subtitle: "",
    isHeroEmpty: true,
    isNav: false,
    isIcon: false,
    sections: [
      {
        title: formatDate(new Date()),
        uid: shortid.generate(),
        isHeroEmpty: true,
        isLinkEmpty: true,
        isListEmpty: false,
        list: [
          { uid: shortid.generate(), response: "9am - 10am", isOpen: false },
        ],
      },
      {
        title: formatDate(new Date().setDate(new Date().getDate() + 5)),
        uid: shortid.generate(),
        isHeroEmpty: true,
        isLinkEmpty: true,
        isListEmpty: false,
        list: [
          { uid: shortid.generate(), response: "4pm - 5pm", isOpen: false },
        ],
      },
    ],
  },
  appointment: {
    title: "Appointments",
    subtitle: "",
    isHeroEmpty: true,
    isNav: true,
    isIcon: false,
    nav: ["all", "today", "booked"],
    sections: [
      {
        title: formatDate(new Date()),
        uid: shortid.generate(),
        isHeroEmpty: true,
        isLinkEmpty: true,
        isListEmpty: false,
        list: [
          { uid: shortid.generate(), response: "9am - 10am", isOpen: false },
          { uid: shortid.generate(), response: "11am - 12pm", isOpen: true },
          { uid: shortid.generate(), response: "2pm - 3pm", isOpen: true },
          { uid: shortid.generate(), response: "4pm - 5pm", isOpen: true },
        ],
      },
      {
        title: formatDate(new Date().setDate(new Date().getDate() + 1)),
        uid: shortid.generate(),
        isHeroEmpty: true,
        isLinkEmpty: true,
        isListEmpty: false,
        list: [
          { uid: shortid.generate(), response: "9am - 10am", isOpen: true },
          { uid: shortid.generate(), response: "11am - 12pm", isOpen: true },
          { uid: shortid.generate(), response: "2pm - 3pm", isOpen: true },
          { uid: shortid.generate(), response: "4pm - 5pm", isOpen: true },
        ],
      },
      {
        title: formatDate(new Date().setDate(new Date().getDate() + 2)),
        uid: shortid.generate(),
        isHeroEmpty: true,
        isLinkEmpty: true,
        isListEmpty: false,
        list: [
          { uid: shortid.generate(), response: "9am - 10am", isOpen: true },
          { uid: shortid.generate(), response: "11am - 12pm", isOpen: true },
          { uid: shortid.generate(), response: "2pm - 3pm", isOpen: true },
          { uid: shortid.generate(), response: "4pm - 5pm", isOpen: true },
        ],
      },
      {
        title: formatDate(new Date().setDate(new Date().getDate() + 3)),
        uid: shortid.generate(),
        isHeroEmpty: true,
        isLinkEmpty: true,
        isListEmpty: false,
        list: [
          { uid: shortid.generate(), response: "9am - 10am", isOpen: true },
          { uid: shortid.generate(), response: "11am - 12pm", isOpen: true },
          { uid: shortid.generate(), response: "2pm - 3pm", isOpen: true },
          { uid: shortid.generate(), response: "4pm - 5pm", isOpen: true },
        ],
      },
      {
        title: formatDate(new Date().setDate(new Date().getDate() + 4)),
        uid: shortid.generate(),
        isHeroEmpty: true,
        isLinkEmpty: true,
        isListEmpty: false,
        list: [
          { uid: shortid.generate(), response: "9am - 10am", isOpen: true },
          { uid: shortid.generate(), response: "11am - 12pm", isOpen: true },
          { uid: shortid.generate(), response: "2pm - 3pm", isOpen: true },
          { uid: shortid.generate(), response: "4pm - 5pm", isOpen: true },
        ],
      },
      {
        title: formatDate(new Date().setDate(new Date().getDate() + 5)),
        uid: shortid.generate(),
        isHeroEmpty: true,
        isLinkEmpty: true,
        isListEmpty: false,
        list: [
          { uid: shortid.generate(), response: "9am - 10am", isOpen: true },
          { uid: shortid.generate(), response: "11am - 12pm", isOpen: true },
          { uid: shortid.generate(), response: "2pm - 3pm", isOpen: true },
          { uid: shortid.generate(), response: "4pm - 5pm", isOpen: false },
        ],
      },
    ],
  },
};
