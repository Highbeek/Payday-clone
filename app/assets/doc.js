import { Ionicons } from "@expo/vector-icons";
const naira = "\u20A6";
const dollar = "\u0024";

const cardIcon = {
  type: "Ionicons",
  name: "ios-card",
  size: 24,
  color: "white",
  style: { backgroundColor: "green" },
};

export const transactions = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/New-mtn-logo.jpg/800px-New-mtn-logo.jpg",
    recipient: "MTN +2348012345678",
    time: "09:30 AM",
    amount: -1000.0,
    formattedAmount: `-${naira}${Math.abs(1000).toFixed(2)}`,
  },
  {
    img: "https://www.famouspeople.com.ng/wp-content/uploads/2022/08/Glo-logo-2.jpg",
    recipient: "GLO",
    time: "02:45 PM",
    amount: 10.75,
    formattedAmount: `-${naira}${Math.abs(5000).toFixed(2)}`,
  },
  {
    img: cardIcon,
    recipient: "to Virtual Card",
    time: "06:15 PM",
    amount: 3.2,
    formattedAmount: `+${dollar}${Math.abs(3.2).toFixed(2)}`,
  },
  {
    img: cardIcon,
    recipient: "from Virtual Card",
    time: "10:00 AM",
    amount: 2.0,
    formattedAmount: `+${dollar}${Math.abs(2.0).toFixed(2)}`,
  },
  {
    img: cardIcon,
    recipient: "to Virtual Card",
    time: "03:20 PM",
    amount: 30.8,
    formattedAmount: `+${dollar}${Math.abs(30.5).toFixed(2)}`,
  },
];

export const currencies = [
  {
    country: "Nigeria",
    flag: "https://cdn.britannica.com/68/5068-004-72A3F250/Flag-Nigeria.jpg",
    currency: "NG Naira",
    balance: "₦500.00",
  },
  {
    country: "European Union",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg",
    currency: "Euro",
    balance: "€0.00",
  },
  {
    country: "United Kingdom",
    flag: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_Kingdom.svg/1920px-Flag_of_the_United_Kingdom.svg.png",
    currency: "British Pounds",
    balance: "£0.00",
  },
  {
    country: "Rwanda",
    flag: "https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Rwanda.svg",
    currency: "Rwanda Franc",
    balance: "RWF 500.00",
  },
  {
    country: "United States",
    flag: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg",
    currency: "US Dollar",
    balance: "$500.95",
  },
];



