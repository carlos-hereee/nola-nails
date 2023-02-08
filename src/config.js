import shortid from "shortid";
import { formatDate, formatTime } from "./utils/functions/moment";

const lorem10 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, neque?";
const lorem20 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, molestias reprehenderit. Voluptates fugit tenetur itaque minus sed, assumenda delectus accusantium!";
const lorem30 =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt explicabo accusantium vel. Quos, illo. Velit est voluptatum at dignissimos, amet alias veritatis obcaecati assumenda, repellat aliquid non quae nam! Nobis.";

let random100 = (n) => Math.floor(Math.random() * n) + 1;
export const isDev = process.env.NODE_ENV === "development";

export const glamourella = {
  socials: [
    {
      isEmpty: true,
      name: "instagram",
      link: "https://www.instagram.com/glamourrella/",
      uid: shortid.generate(),
    },
  ],
  checkout: {
    title: "Check out",
    subtitle: "",
    hasHero: false,
    hasIcon: false,
    hero: { link: "", name: "main-hero" },
  },
  footerNewsletter: {
    title: "Join the newsletter",
    subtitle: "Suscribe to get the latest content by email",
    response: "Unsubscribe at any time.",
    hasHero: false,
    hasIcon: false,
    hasLink: false,
    hero: { link: "", name: "main-hero" },
  },
  contact: {
    title: "Contact us",
    subtitle: "",
    hasHero: false,
    hasIcon: false,
    hero: { link: "", name: "main-hero" },
  },
  about: {
    title: "Welcome to Glamourella",
    subtitle: "",
    hasHero: false,
    hasIcon: false,
    hero: { link: "", name: "main-hero" },
    sections: [
      {
        title: "Why choose Glamourella?",
        response: lorem10 + lorem30,
        uid: shortid.generate(),
        hasHero: false,
        hasIcon: false,
        hasLink: false,
        hero: { link: "/lorem", name: "lorem ipsum" },
        hyperlink: [{ word: "Maiores", link: "/lorem" }],
      },
      {
        title: "My Story",
        response: lorem30 + lorem30,
        uid: shortid.generate(),
        hasHero: false,
        hasIcon: false,
        hero: { link: "", name: "" },
        hasLink: false,
        hyperlink: [{ word: "Distinctio, molestias", link: "/lorem" }],
      },
      {
        title: "Who am I?",
        response: lorem20 + lorem20,
        uid: shortid.generate(),
        hasHero: false,
        hasIcon: false,
        hero: { link: "", name: "" },
        hasLink: false,
        hyperlink: [{ word: "obcaecati assumenda", link: "/lorem" }],
      },
    ],
  },
  services: {
    title: "Featured Services",
    subtitle: "",
    isNav: true,
    hasHero: false,
    hasIcon: false,
    nav: ["all", "manicure", "pedicure"],
    hero: { link: "", name: "main-hero" },
    sections: [
      {
        uid: "pe-123-di-456-cu-789-re-0000",
        subtitle: "pedicure",
        hasHero: false,
        hasIcon: false,
        hero: { link: "/lorem", name: "lorem ipsum" },
        hasLink: false,
        isForSale: true,
        isBookable: true,
        isAccessory: false,
        count: 1,
        hyperlink: [{ word: "Maiores", link: "/lorem" }],
        //link:
        //   process.env.REACT_APP_DB_URL +
        //   "gallery/photo/?path=assets/pedicure/billie-unsplash.jpg",
        title: "classic",
        length: "30 minutes",
        cost: 25,
        response:
          "Your feet will be pampered, nails are professionally shaped and filed, cuticle trimmer, callus removed, followed by a hot oil massage and finish with a nail buff or polish.",
      },
      {
        uid: shortid.generate(),
        hasHero: false,
        hasIcon: false,
        hero: { link: "/lorem", name: "lorem ipsum" },
        hasLink: false,
        hyperlink: [{ word: "Maiores", link: "/lorem" }],
        isForSale: true,
        isBookable: true,
        isAccessory: false,
        count: 1,
        subtitle: "pedicure",
        //link:
        //   process.env.REACT_APP_DB_URL +
        //   "gallery/photo/?path=assets/pedicure/billie-unsplash.jpg",
        title: "REFRESHER ",
        length: "45 minutes",
        cost: 35,
        response:
          "A combination of our Classic Pedicure with an exfoliation pink salt, deep massage with hot stones, warm towel wrap. Finish with a nail buff or polish.",
      },
      {
        uid: shortid.generate(),
        hasHero: false,
        hasIcon: false,
        isForSale: true,
        isBookable: true,
        isAccessory: false,
        count: 1,
        hero: { link: "/lorem", name: "lorem ipsum" },
        hasLink: false,
        hyperlink: [{ word: "Maiores", link: "/lorem" }],
        subtitle: "manicure",
        //link:
        //   process.env.REACT_APP_DB_URL +
        //   "gallery/photo/?path=assets/manicure/rashid-khreiss-unsplash.jpg",
        title: "classic",
        length: "20 minutes",
        cost: 15,
        response:
          "Your nail will be professionally shaped and filed,  cuticle trimmer. Followed by lotion massage and finish with a nail buff or polish.",
      },
      {
        uid: shortid.generate(),
        hasHero: false,
        hasIcon: false,
        hero: { link: "/lorem", name: "lorem ipsum" },
        hasLink: false,
        isForSale: true,
        isBookable: true,
        isAccessory: false,
        count: 1,
        hyperlink: [{ word: "Maiores", link: "/lorem" }],
        subtitle: "manicure",
        //link:
        //   process.env.REACT_APP_DB_URL +
        //   "gallery/photo/?path=assets/manicure/bryony-elena-unsplash.jpg",
        title: "refresher",
        length: "30 minutes",
        cost: 25,
        response:
          "A combination of Classic Manicure, your hand will be soaked in moisturized lotion gloves and rubbed with an exfoliation pink salt. Follow by a deep massage with hot stones, warm towel wrap and finish with a nail buff or polish.",
      },
      {
        uid: shortid.generate(),
        subtitle: "manicure",
        hasHero: false,
        hasIcon: false,
        hero: { link: "/lorem", name: "lorem ipsum" },
        isForSale: true,
        isBookable: true,
        isAccessory: false,
        count: 1,
        hasLink: false,
        hyperlink: [{ word: "Maiores", link: "/lorem" }],
        //link:
        //   process.env.REACT_APP_DB_URL +
        //   "gallery/photo/?path=assets/manicure/kris-atomic-unsplash.jpg",
        title: "paris signature ",
        length: "56 minutes",
        cost: 29,
        response:
          "Your nail will be professionally shaped and filed,  cuticle trimmer. Followed by lotion massage and finish with a nail buff or polish.",
      },
    ],
  },
  schedule: {
    title: "Bussiness Hours",
    subtitle: "",
    hasHero: false,
    hasIcon: false,
    hero: { link: "", name: "main-hero" },
    hours: [
      { day: "Monday", hours: "9:30am - 6:30pm", key: shortid.generate() },
      { day: "Tuesday", hours: "9:30am - 6:30pm", key: shortid.generate() },
      { day: "Wednesday", hours: "9:30am - 6:30pm", key: shortid.generate() },
      { day: "Thursday", hours: "9:30am - 6:30pm", key: shortid.generate() },
      { day: "Friday", hours: "9:30am - 6:30pm", key: shortid.generate() },
      { day: "Saturday", hours: "9:30am - 6:30pm", key: shortid.generate() },
      { day: "Sunday", hours: "9:30am - 6:30pm", key: shortid.generate() },
    ],
  },
  menu: [
    { name: "home", uid: shortid.generate(), notification: 0 },
    { name: "about", uid: shortid.generate(), notification: 0 },
    { name: "services", uid: shortid.generate(), notification: 0 },
    { name: "booking", uid: shortid.generate(), notification: 0 },
    { name: "accessories", uid: shortid.generate(), notification: 0 },
    { name: "checkout", uid: shortid.generate(), notification: 0 },
    { name: "dashboard", uid: shortid.generate(), notification: 0 },
  ],
  gallery: {
    title: "Check out my collection",
    subtitle: "",
    isNav: true,
    hasIcon: false,
    hasHero: false,
    nav: ["all", "promotion", "wig", "braids", "manicure", "pedicure"],
    hero: { link: "", name: "main-hero" },
    sections: [
      {
        hasIcon: false,
        hasHero: false,
        isBookable: false,
        isAccessory: true,
        count: 1,
        inStock: random100(100),
        isForSale: true,
        hero: {
          link: "http://localhost:4937/gallery/photo/?path=assets/hair/braids/gustavo-spindula-unsplash.jpg",
          name: "gustavo spindula unsplash",
          file: "gustavo-spindula-unsplash.jpg",
          path: "assets/hair/braids/gustavo-spindula-unsplash.jpg",
        },
        hasLink: false,
        hyperlink: [{ word: "Maiores", link: "/lorem" }],
        // artistName: "",
        cost: 24,
        response:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Dolor facilis commodi qui optio, quos quidem odio a vitaenulla facere? Rem facilis esse cum earum amet, enim iuretempora eveniet.",
        // src: "",
        title: "braids",
        uid: "39c68aab-4071-4b05-a8b3-a224b8fbba69",
      },
      {
        hasIcon: false,
        hasHero: false,
        isBookable: false,
        isAccessory: true,
        count: 1,
        inStock: random100(100),
        isForSale: true,
        hero: {
          link: "http://localhost:4937/gallery/photo/?path=assets/hair/braids/gustavo-spindula-unsplash.jpg",
          name: "gustavo spindula unsplash",
          file: "gustavo-spindula-unsplash.jpg",
          path: "assets/hair/braids/gustavo-spindula-unsplash.jpg",
        },
        hasLink: false,
        hyperlink: [{ word: "Maiores", link: "/lorem" }],
        // artistName: "",
        cost: 24,
        response:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Dolor facilis commodi qui optio, quos quidem odio a vitaenulla facere? Rem facilis esse cum earum amet, enim iuretempora eveniet.",
        // src: "",
        title: "braids",
        uid: "39c68aab-4071-4b05-a8b3-",
      },
      {
        hasIcon: false,
        hasHero: false,
        isBookable: false,
        isAccessory: true,
        count: 1,
        inStock: random100(100),
        isForSale: true,
        hero: {
          link: "http://localhost:4937/gallery/photo/?path=assets/hair/braids/gustavo-spindula-unsplash.jpg",
          name: "gustavo spindula unsplash",
          file: "gustavo-spindula-unsplash.jpg",
          path: "assets/hair/braids/gustavo-spindula-unsplash.jpg",
        },
        hasLink: false,
        hyperlink: [{ word: "Maiores", link: "/lorem" }],
        // artistName: "",
        cost: 24,
        response:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Dolor facilis commodi qui optio, quos quidem odio a vitaenulla facere? Rem facilis esse cum earum amet, enim iuretempora eveniet.",
        // src: "",
        title: "braids",
        uid: "39c68aab-4071-4b05--a224b8fbba69",
      },
      {
        hasIcon: false,
        hasHero: false,
        isBookable: false,
        isAccessory: true,
        count: 1,
        inStock: random100(100),
        isForSale: true,
        hero: {
          link: "http://localhost:4937/gallery/photo/?path=assets/hair/braids/gustavo-spindula-unsplash.jpg",
          name: "gustavo spindula unsplash",
          file: "gustavo-spindula-unsplash.jpg",
          path: "assets/hair/braids/gustavo-spindula-unsplash.jpg",
        },
        hasLink: false,
        hyperlink: [{ word: "Maiores", link: "/lorem" }],

        // artistName: "",
        cost: 24,
        response:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Dolor facilis commodi qui optio, quos quidem odio a vitaenulla facere? Rem facilis esse cum earum amet, enim iuretempora eveniet.",
        // src: "",
        title: "braids",
        uid: "39c68aab-4071--a8b3-a224b8fbba69",
      },
      {
        hasIcon: false,
        hasHero: false,
        isBookable: false,
        isAccessory: true,
        count: 1,
        inStock: random100(100),
        isForSale: true,
        hero: {
          link: "http://localhost:4937/gallery/photo/?path=assets/hair/braids/gustavo-spindula-unsplash.jpg",
          name: "gustavo spindula unsplash",
          file: "gustavo-spindula-unsplash.jpg",
          path: "assets/hair/braids/gustavo-spindula-unsplash.jpg",
        },
        hasLink: false,
        hyperlink: [{ word: "Maiores", link: "/lorem" }],

        // artistName: "",
        cost: 24,
        response:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Dolor facilis commodi qui optio, quos quidem odio a vitaenulla facere? Rem facilis esse cum earum amet, enim iuretempora eveniet.",
        // src: "",
        title: "braids",
        uid: "39c68aab--4b05-a8b3-a224b8fbba69",
      },
      {
        hasIcon: false,
        hasHero: false,
        isBookable: false,
        isAccessory: true,
        count: 1,
        inStock: random100(100),
        isForSale: true,
        hero: {
          link: "http://localhost:4937/gallery/photo/?path=assets/hair/braids/gustavo-spindula-unsplash.jpg",
          name: "gustavo spindula unsplash",
          file: "gustavo-spindula-unsplash.jpg",
          path: "assets/hair/braids/gustavo-spindula-unsplash.jpg",
        },
        hasLink: false,
        hyperlink: [{ word: "Maiores", link: "/lorem" }],
        // artistName: "",
        cost: 24,
        response:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Dolor facilis commodi qui optio, quos quidem odio a vitaenulla facere? Rem facilis esse cum earum amet, enim iuretempora eveniet.",
        // src: "",
        title: "braids",
        uid: "-4071-4b05-a8b3-a224b8fbba69",
      },
    ],
  },
  events: {
    title: "Book Appointments",
    subtitle: "",
    hasHero: false,
    isNav: false,
    hasIcon: false,
    // nav: ["all", "today", "booked"],
    sections: [
      {
        title: formatDate(new Date()),
        uid: shortid.generate(),
        hasHero: false,
        hasLink: false,
        hasList: false,
        list: [
          {
            uid: shortid.generate(),
            response: "9am - 10am",
            isOpen: false,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date()),
            time: {
              startTime: formatTime(new Date().setHours(9, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(10, 0, 0)).toString(),
            },
            attendees: {},
          },
          {
            uid: shortid.generate(),
            response: "11am - 12pm",
            isOpen: false,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date()),
            time: {
              startTime: formatTime(new Date().setHours(11, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(12, 0, 0)).toString(),
            },
          },
          {
            uid: shortid.generate(),
            response: "2pm - 3pm",
            isOpen: false,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date()),
            time: {
              startTime: formatTime(new Date().setHours(2, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(3, 0, 0)).toString(),
            },
          },
          {
            uid: shortid.generate(),
            response: "4pm - 5pm",
            isOpen: false,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date()),
            time: {
              startTime: formatTime(new Date().setHours(4, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(5, 0, 0)).toString(),
            },
          },
        ],
      },
      {
        title: formatDate(new Date().setDate(new Date().getDate() + 1)),
        uid: shortid.generate(),
        hasHero: false,
        hasLink: false,
        hasList: true,
        list: [
          {
            uid: shortid.generate(),
            response: "9am - 10am",
            isOpen: false,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date().setDate(new Date().getDate() + 1)),
            time: {
              startTime: formatTime(new Date().setHours(9, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(10, 0, 0)).toString(),
            },
          },
          {
            uid: shortid.generate(),
            response: "11am - 12pm",
            isOpen: false,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date().setDate(new Date().getDate() + 1)),
            time: {
              startTime: formatTime(new Date().setHours(10, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(12, 0, 0)).toString(),
            },
          },
          {
            uid: shortid.generate(),
            response: "2pm - 3pm",
            isOpen: true,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date().setDate(new Date().getDate() + 1)),
            time: {
              startTime: formatTime(new Date().setHours(2, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(3, 0, 0)).toString(),
            },
          },
          {
            uid: shortid.generate(),
            response: "4pm - 5pm",
            isOpen: false,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date().setDate(new Date().getDate() + 1)),
            time: {
              startTime: formatTime(new Date().setHours(4, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(5, 0, 0)).toString(),
            },
          },
        ],
      },
      {
        title: formatDate(new Date().setDate(new Date().getDate() + 2)),
        uid: shortid.generate(),
        hasHero: false,
        hasLink: false,
        hasList: false,
        list: [
          {
            uid: shortid.generate(),
            response: "9am - 10am",
            isOpen: false,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date().setDate(new Date().getDate() + 2)),
            time: {
              startTime: formatTime(new Date().setHours(9, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(10, 0, 0)).toString(),
            },
          },
          {
            uid: shortid.generate(),
            response: "11am - 12pm",
            isOpen: false,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date().setDate(new Date().getDate() + 2)),
            time: {
              startTime: formatTime(new Date().setHours(10, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(12, 0, 0)).toString(),
            },
          },
          {
            uid: shortid.generate(),
            response: "2pm - 3pm",
            isOpen: false,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date().setDate(new Date().getDate() + 2)),
            time: {
              startTime: formatTime(new Date().setHours(2, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(3, 0, 0)).toString(),
            },
          },
          {
            uid: shortid.generate(),
            response: "4pm - 5pm",
            isOpen: false,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date().setDate(new Date().getDate() + 2)),
            time: {
              startTime: formatTime(new Date().setHours(4, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(5, 0, 0)).toString(),
            },
          },
        ],
      },
      {
        title: formatDate(new Date().setDate(new Date().getDate() + 3)),
        uid: shortid.generate(),
        hasHero: false,
        hasLink: false,
        hasList: true,
        list: [
          {
            uid: shortid.generate(),
            response: "9am - 10am",
            isOpen: false,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date().setDate(new Date().getDate() + 3)),
            time: {
              startTime: formatTime(new Date().setHours(9, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(10, 0, 0)).toString(),
            },
          },
          {
            uid: shortid.generate(),
            response: "11am - 12pm",
            isOpen: true,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date().setDate(new Date().getDate() + 3)),
            time: {
              startTime: formatTime(new Date().setHours(10, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(12, 0, 0)).toString(),
            },
          },
          {
            uid: shortid.generate(),
            response: "2pm - 3pm",
            isOpen: true,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date().setDate(new Date().getDate() + 3)),
            time: {
              startTime: formatTime(new Date().setHours(2, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(3, 0, 0)).toString(),
            },
          },
          {
            uid: shortid.generate(),
            response: "4pm - 5pm",
            isOpen: true,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date().setDate(new Date().getDate() + 3)),
            time: {
              startTime: formatTime(new Date().setHours(4, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(5, 0, 0)).toString(),
            },
          },
        ],
      },
      {
        title: formatDate(new Date().setDate(new Date().getDate() + 4)),
        uid: shortid.generate(),
        hasHero: false,
        hasLink: false,
        hasList: true,
        list: [
          {
            uid: shortid.generate(),
            response: "9am - 10am",
            isOpen: false,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date().setDate(new Date().getDate() + 4)),
            time: {
              startTime: formatTime(new Date().setHours(9, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(10, 0, 0)).toString(),
            },
          },
          {
            uid: shortid.generate(),
            response: "11am - 12pm",
            isOpen: true,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date().setDate(new Date().getDate() + 4)),
            time: {
              startTime: formatTime(new Date().setHours(10, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(12, 0, 0)).toString(),
            },
          },
          {
            uid: shortid.generate(),
            response: "2pm - 3pm",
            isOpen: true,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date().setDate(new Date().getDate() + 4)),
            time: {
              startTime: formatTime(new Date().setHours(2, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(3, 0, 0)).toString(),
            },
          },
          {
            uid: shortid.generate(),
            response: "4pm - 5pm",
            isOpen: true,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date().setDate(new Date().getDate() + 4)),
            time: {
              startTime: formatTime(new Date().setHours(4, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(5, 0, 0)).toString(),
            },
          },
        ],
      },
      {
        title: formatDate(new Date().setDate(new Date().getDate() + 5)),
        uid: shortid.generate(),
        hasHero: false,
        hasLink: false,
        hasList: false,
        list: [
          {
            uid: shortid.generate(),
            response: "9am - 10am",
            isOpen: false,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date().setDate(new Date().getDate() + 5)),
            time: {
              startTime: formatTime(new Date().setHours(9, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(10, 0, 0)).toString(),
            },
          },
          {
            uid: shortid.generate(),
            response: "11am - 12pm",
            isOpen: false,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date().setDate(new Date().getDate() + 5)),
            time: {
              startTime: formatTime(new Date().setHours(10, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(12, 0, 0)).toString(),
            },
          },
          {
            uid: shortid.generate(),
            response: "2pm - 3pm",
            isOpen: false,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date().setDate(new Date().getDate() + 5)),
            time: {
              startTime: formatTime(new Date().setHours(2, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(3, 0, 0)).toString(),
            },
          },
          {
            uid: shortid.generate(),
            response: "4pm - 5pm",
            isOpen: false,
            hasHero: false,
            hasLink: false,
            date: formatDate(new Date().setDate(new Date().getDate() + 5)),
            time: {
              startTime: formatTime(new Date().setHours(4, 0, 0)).toString(),
              endTime: formatTime(new Date().setHours(5, 0, 0)).toString(),
            },
          },
        ],
      },
    ],
  },
  paymentMethods: [
    {
      uid: shortid.generate(),
      type: "in-store",
      name: "In store",
      icon: "store",
      isCash: true,
      isCreditCard: false,
    },
    {
      uid: shortid.generate(),
      type: "debit",
      isCash: false,
      name: "Debit/Credit visa",
      icon: "debit/credit-visa",
      isCreditCard: false,
      isDebitCard: true,
    },
  ],
};
