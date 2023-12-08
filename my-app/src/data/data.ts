export interface UsersArrayProps {
  id: number;
  name: string;
  type: string;
  address: string;
  phone: string;
  from: string;
  to: string;
  hours: string;
  decription: string;
  image: string;
  onClickAccepted?: () => void;
  onClickDelete?:()=>void
}

export const users = [
  {
    id: 1,
    name: "Leanne Graham",
    type: "Food",
    address: "Kulas Light 556",
    phone: "40692659309125",
    from: "2023-07-20",
    to: "2023-07-21",
    hours: "11-14",
    decription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor.",
    image: "./images/food.jpg",
  },
  {
    id: 2,
    name: "Ervin Howell",
    type: "Clothes",
    address: "Victor Plains 11",
    phone: "13692659309121",
    from: "2023-11-11",
    to: "2023-11-12",
    hours: "11-20",
    decription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor.",
    image: "./images/clothes.jpg",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    type: "Devices",
    address: "Douglas Extension 32",
    phone: "70692659309123",
    from: "2023-11-29",
    to: "2023-11-30",
    hours: "9-19",
    decription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor.",
    image: "./images/devices.jpg",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    type: "Food",
    address: "Hoeger Mall 51",
    phone: "40692659309125",
    from: "2023-12-04",
    to: "2023-12-05",
    hours: "15-18",
    decription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor.",
    image: "./images/food.jpg",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    type: "Clothes",
    address: "Skiles Walks 85",
    phone: "10692659309125",
    from: "2023-11-24",
    to: "2023-11-27",
    hours: "12-13",
    decription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor.",
    image: "./images/clothes.jpg",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    type: "Clothes",
    address: "Norberto Crossing 75",
    phone: "18092659309120",
    from: "2023-11-22",
    to: "2023-11-29",
    hours: "9-13",
    decription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor.",
    image: "./images/clothes.jpg",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    type: "Devices",
    address: "Rex Trail 65",
    phone: "10692659309125",
    from: "2023-12-21",
    to: "2023-12-28",
    hours: "8-19",
    decription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor.",
    image: "./images/devices.jpg",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    type: "Devices",
    address: "Ellsworth Summit 77",
    phone: "16692659309121",
    from: "2023-11-01",
    to: "2023-11-03",
    hours: "9-13",
    decription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor.",
    image: "./images/devices.jpg",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    type: "Food",
    address: "Dayna Park 87",
    phone: "55692659309128",
    from: "2023-11-01",
    to: "2023-11-10",
    hours: "8-10",
    decription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor.",
    image: "./images/food.jpg",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    type: "Food",
    address: "Kattie Turnpike 98",
    phone: "215926593091299",
    from: "2023-11-23",
    to: "2023-11-24",
    hours: "11-13",
    decription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor.",
    image: "./images/food.jpg",
  },
  {
    id: 11,
    name: "Leanne Graham",
    type: "Devices",
    address: "Kulas Light 556",
    phone: "40692659309125",
    from: "2023-12-22",
    to: "2023-12-28",
    hours: "10-19",
    decription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor.",
    image: "./images/devices.jpg",
  },
  {
    id: 12,
    name: "Ervin Howell",
    type: "Food",
    address: "Victor Plains 11",
    phone: "13692659309121",
    from: "2023-11-19",
    to: "2023-11-29",
    hours: "9-15",
    decription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor.",
    image: "./images/food.jpg",
  },
  {
    id: 13,
    name: "Clementine Bauch",
    type: "Clothes",
    address: "Douglas Extension 32",
    phone: "70692659309123",
    from: "2023-12-03",
    to: "2023-12-10",
    hours: "12-19",
    decription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor.",
    image: "./images/clothes.jpg",
  },
  {
    id: 14,
    name: "Patricia Lebsack",
    type: "Clothes",
    address: "Hoeger Mall 51",
    phone: "40692659309125",
    from: "2023-12-14",
    to: "2023-12-15",
    hours: "15-19",
    decription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor.",
    image: "./images/clothes.jpg",
  },
  {
    id: 15,
    name: "Chelsey Dietrich",
    type: "Clothes",
    address: "Skiles Walks 85",
    phone: "10692659309125",
    from: "2023-12-12",
    to: "2023-12-17",
    hours: "10-18",
    decription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor.",
    image: "./images/clothes.jpg",
  },
  {
    id: 16,
    name: "Mrs. Dennis Schulist",
    type: "Devices",
    address: "Norberto Crossing 75",
    phone: "18092659309120",
    from: "2023-12-25",
    to: "2023-12-29",
    hours: "15-20",
    decription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor.",
    image: "./images/devices.jpg",
  },
  {
    id: 17,
    name: "Kurtis Weissnat",
    type: "Devices",
    address: "Rex Trail 65",
    phone: "10692659309125",
    from: "2023-12-24",
    to: "2023-12-28",
    hours: "18-19",
    decription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor.",
    image: "./images/devices.jpg",
  },
  {
    id: 18,
    name: "Nicholas Runolfsdottir V",
    type: "Devices",
    address: "Ellsworth Summit 77",
    phone: "16692659309121",
    from: "2023-12-11",
    to: "2023-12-13",
    hours: "13-16",
    decription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor.",
    image: "./images/devices.jpg",
  },
  {
    id: 19,
    name: "Glenna Reichert",
    type: "Food",
    address: "Dayna Park 87",
    phone: "55692659309128",
    from: "2023-11-11",
    to: "2023-11-20",
    hours: "10-15",
    decription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor.",
    image: "./images/food.jpg",
  },
  {
    id: 20,
    name: "Clementina DuBuque",
    type: "Food",
    address: "Kattie Turnpike 98",
    phone: "215926593091299",
    from: "2023-12-25",
    to: "2023-12-26",
    hours: "15-19",
    decription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor.",
    image: "./images/food.jpg",
  },
];
