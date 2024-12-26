import { setupWorker, http } from "msw";

export const handlers = [
  http.get("/api/cardDetails", (req, res, ctx) => {
    return Response.json(
      [{
        balance: "5,756",
        cardHolder: "Eddy Cusuma",
        validThru: "12/22",
        cardNumber: "3778 2342 5754 1234",
        transparent: true,
      },
      {
        balance: "8,432",
        cardHolder: "Martha Wayne",
        validThru: "11/23",
        cardNumber: "4556 3454 6578 2345",
        transparent: false,
      },
      {
        balance: "3,218",
        cardHolder: "Bruce Kent",
        validThru: "01/25",
        cardNumber: "1234 5678 9012 3456",
        transparent: true,
      },
      {
        balance: "12,675",
        cardHolder: "Clark Rogers",
        validThru: "08/24",
        cardNumber: "9876 5432 1098 7654",
        transparent: false,
      },
      {
        balance: "7,890",
        cardHolder: "Tony Stark",
        validThru: "05/23",
        cardNumber: "1357 2468 9753 8642",
        transparent: true,
      },
      {
        balance: "10,320",
        cardHolder: "Natasha Roman",
        validThru: "03/26",
        cardNumber: "6543 2109 8765 4321",
        transparent: false,
      },
      {
        balance: "6,540",
        cardHolder: "Diana Prince",
        validThru: "07/22",
        cardNumber: "7890 1234 5678 9012",
        transparent: true,
      },
      {
        balance: "4,128",
        cardHolder: "Peter Parker",
        validThru: "04/24",
        cardNumber: "3210 7654 3210 8765",
        transparent: false,
      },
      {
        balance: "9,576",
        cardHolder: "Steve Rogers",
        validThru: "09/23",
        cardNumber: "5432 1098 7654 3210",
        transparent: true,
      },
      {
        balance: "11,220",
        cardHolder: "Bruce Banner",
        validThru: "02/27",
        cardNumber: "2468 9753 1357 8642",
        transparent: false,
      }]
    );
  }),
  http.get("/api/transactionData", (req, res, ctx) => {
    return Response.json([
      {
        depositType: "CR",
        depositDesc: "Freelance payment credited",
        depostiDate: "2024-10-22",
        depositAmnt: "$1,500",
        paymentMethod: "Cash",
      },
      {
        depositType: "DR",
        depositDesc: "Transferred to savings account",
        depostiDate: "2024-12-20",
        depositAmnt: "$3,000",
        paymentMethod: "Card",
      },
      {
        depositType: "DR",
        depositDesc: "Jemi Wilson",
        depostiDate: "2024-10-18",
        depositAmnt: "$1,000",
        paymentMethod: "Other",
      },
      {
        depositType: "DR",
        depositDesc: "Travel expenses reimbursed",
        depostiDate: "2024-09-25",
        depositAmnt: "$500",
        paymentMethod: "Cash",
      },
      {
        depositType: "CR",
        depositDesc: "Gift credited for birthday",
        depostiDate: "2024-12-15",
        depositAmnt: "$300",
        paymentMethod: "Card",
      },
      {
        depositType: "DR",
        depositDesc: "Miscellaneous debit",
        depostiDate: "2024-11-30",
        depositAmnt: "$250",
        paymentMethod: "Cash",
      },
      {
        depositType: "CR",
        depositDesc: "Salary credited for December",
        depostiDate: "2024-12-01",
        depositAmnt: "$5,000",
        paymentMethod: "Card",
      },
      {
        depositType: "CR",
        depositDesc: "Year-end bonus credited",
        depostiDate: "2024-12-10",
        depositAmnt: "$2,000",
        paymentMethod: "Cash",
      },
      {
        depositType: "CR",
        depositDesc: "Tax refund credited",
        depostiDate: "2024-11-15",
        depositAmnt: "$1,200",
        paymentMethod: "Other",
      },
      {
        depositType: "CR",
        depositDesc: "Stock dividend credited",
        depostiDate: "2024-11-05",
        depositAmnt: "$800",
        paymentMethod: "Card",
      },
    ]);
  }),
  http.get("/api/frequentContacts", (req, res, ctx) => {
    return Response.json([
      {
        id: 1,
        name: "Livia Bator",
        role: "CEO",
        profilePicture: "https://picsum.photos/seed/livia/150",
      },
      {
        id: 2,
        name: "Randy Press",
        role: "Director",
        profilePicture: "https://picsum.photos/seed/randy/150",
      },
      {
        id: 3,
        name: "Workman",
        role: "Designer",
        profilePicture: "https://picsum.photos/seed/workman/150",
      },
      {
        id: 4,
        name: "Sarah",
        role: "Manager",
        profilePicture: "https://picsum.photos/seed/sarah/150",
      },
      {
        id: 5,
        name: "James Miller",
        role: "Developer",
        profilePicture: "https://picsum.photos/seed/james/150",
      },
    ]);
  }),
  http.get("/api/weeklyActivityData", (req, res, ctx) => {
    return Response.json([
      { day: "Mon", deposits: 100, withdrawals: 50 },
      { day: "Tue", deposits: 200, withdrawals: 80 },
      { day: "Wed", deposits: 150, withdrawals: 60 },
      { day: "Thu", deposits: 300, withdrawals: 90 },
      { day: "Fri", deposits: 250, withdrawals: 70 },
      { day: "Sat", deposits: 400, withdrawals: 100 },
      { day: "Sun", deposits: 350, withdrawals: 120 },
    ]);
  }),
  http.get("/api/balanceHistory", (req, res, ctx) => {
    return Response.json([
      { month: "Jul", val: "100" },
      { month: "Aug", val: "500" },
      { month: "Sep", val: "350" },
      { month: "Oct", val: "200" },
      { month: "Nov", val: "400" },
      { month: "Dec", val: "300" },
    ]);
  }),
  http.get("/api/expenseDistribution", (req, res, ctx) => {
    return Response.json([
      { label: "Entertainment", val: "22" },
      { label: "Investment", val: "24" },
      { label: "Bill Expense", val: "28" },
      { label: "Others", val: "26" },
    ]);
  }),
];
