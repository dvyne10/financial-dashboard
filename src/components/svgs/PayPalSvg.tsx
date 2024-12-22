import React, { Component } from "react";

const PayPalSvg = ({
  width = "22",
  height = "24",
  fill = "#396AFF",
}: {
  width?: string;
  height?: string;
  fill?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.995 6.38251C18.9812 4.85223 18.3641 3.3892 17.2779 2.31119C16.1917 1.23318 14.7241 0.627254 13.1937 0.625011H4.74998C4.54025 0.622312 4.33653 0.69504 4.17592 0.829947C4.01532 0.964855 3.90852 1.15296 3.87498 1.36001L0.882478 20.1288C0.863781 20.253 0.872078 20.3799 0.906806 20.5007C0.941534 20.6215 1.00188 20.7334 1.08373 20.8288C1.16505 20.9264 1.26667 21.0052 1.38151 21.0596C1.49635 21.114 1.62166 21.1427 1.74873 21.1438H5.36248L5.16998 22.36C5.14953 22.4861 5.15693 22.6151 5.19165 22.738C5.22637 22.8609 5.28757 22.9747 5.37096 23.0714C5.45435 23.1681 5.55789 23.2454 5.67433 23.2979C5.79077 23.3503 5.91728 23.3767 6.04498 23.375H10.1137C10.3222 23.378 10.5249 23.3065 10.6853 23.1734C10.8457 23.0403 10.9533 22.8542 10.9887 22.6488L11.8637 17.3025H14.62C16.3451 17.2956 17.9974 16.606 19.2156 15.3845C20.4338 14.163 21.1189 12.5089 21.1212 10.7838V10.5388C21.1203 9.72727 20.9272 8.92754 20.5576 8.2051C20.188 7.48266 19.6525 6.85807 18.995 6.38251ZM5.49373 2.37501H13.1937C14.1117 2.37783 15.0017 2.69168 15.7184 3.26535C16.4351 3.83902 16.9362 4.63865 17.14 5.53376C16.7614 5.44498 16.3738 5.40093 15.985 5.40251H8.68748C8.47775 5.39981 8.27403 5.47254 8.11342 5.60745C7.95282 5.74235 7.84602 5.93046 7.81248 6.13751L7.29623 9.37501C7.2591 9.60708 7.31568 9.84439 7.45351 10.0347C7.59135 10.2251 7.79916 10.3529 8.03123 10.39C8.26329 10.4271 8.5006 10.3706 8.69095 10.2327C8.8813 10.0949 9.0091 9.88708 9.04623 9.65501L9.44873 7.13501H16.0025C16.4219 7.13721 16.8373 7.21732 17.2275 7.37126C17.0611 8.74103 16.4003 10.0029 15.3691 10.9197C14.3378 11.8365 13.0073 12.3451 11.6275 12.35H7.56748C7.35903 12.347 7.15634 12.4185 6.99592 12.5516C6.8355 12.6848 6.7279 12.8708 6.69248 13.0763L5.62498 19.3938H2.77248L5.49373 2.37501ZM19.3712 10.7838C19.3689 12.0448 18.8682 13.2538 17.9781 14.1471C17.0881 15.0404 15.881 15.5456 14.62 15.5525H11.12C10.9115 15.5495 10.7088 15.621 10.5484 15.7541C10.388 15.8873 10.2804 16.0733 10.245 16.2788L9.36998 21.625H7.05998L7.25248 20.4088L8.30248 14.1175H11.61C13.2435 14.1127 14.8295 13.5677 16.121 12.5675C17.4124 11.5672 18.3368 10.1679 18.75 8.58751C19.1561 9.15691 19.3734 9.83937 19.3712 10.5388V10.7838Z"
        fill={fill}
      />
    </svg>
  );
};

export default PayPalSvg;
