import React from "react";
import HomeSvg from "../svgs/HomeSvg";
import TransactionSvg from "../svgs/TransactionSvg";
import AccountSvg from "../svgs/AccountSvg";
import InvestmentSvg from "../svgs/InvestmentSvg";
import CreditCardSvg from "../svgs/CreditCardSvg";
import LoanSvg from "../svgs/LoanSvg";
import ServiceSvg from "../svgs/ServiceSvg";
import PriviledgesSvg from "../svgs/PriviledgesSvg";

export const SidebarData = [
  {
    title: "Dashboard",
    icon: (active: boolean) => <HomeSvg active={active} />,
    path: "/",
  },
  {
    title: "Transactions",
    icon: (active: boolean) => <TransactionSvg active={active} />,
    path: "/transactions",
  },
  {
    title: "Accounts",
    icon: (active: boolean) => <AccountSvg active={active} />,
    path: "/accounts",
  },
  {
    title: "Investments",
    icon: (active: boolean) => <InvestmentSvg active={active} />,
    path: "/investments",
  },
  {
    title: "Credit Cards",
    icon: (active: boolean) => <CreditCardSvg active={active} />,
    path: "/credit-cards",
  },
  {
    title: "Loans",
    icon: (active: boolean) => <LoanSvg active={active} />,
    path: "/loans",
  },
  {
    title: "Services",
    icon: (active: boolean) => <ServiceSvg active={active} />,
    path: "/services",
  },
  {
    title: "My Priviledges",
    icon: (active: boolean) => <PriviledgesSvg active={active} />,
    path: "/my-priviledges",
  },
  {
    title: "Setting",
    icon: (active: boolean) => <InvestmentSvg active={active} />,
    path: "/setting",
  },
];
