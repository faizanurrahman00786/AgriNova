import {  VscAccount, VscDashboard, VscVm, VscAdd, VscMortarBoard,VscHistory } from "react-icons/vsc";

const sidebarLinks = [
  {
    id: 1,
    name: "My Profile",
    path: "user/dashboard/my-profile",
    type: "buyer",
    icon: VscAccount,
  },
  {
    id: 2,
    name: "My Profile",
    path: "user/dashboard/my-profile",
    type: "farmer",
    icon: VscAccount,
  },
  {
    id: 3,
    name: "My Profile",
    path: "user/dashboard/my-profile",
    type: "admin",
    icon: VscAccount,
  },
  {
    id: 4,
    name: "Dashboard",
    path: "user/dashboard/my-dashboard",
    type: "farmer",
    icon: VscDashboard,
  },
  {
    id: 5,
    name: "Dashboard",
    path: "user/dashboard/my-dashboard",
    type: "admin",
    icon: VscDashboard,
  },
  {
    id: 6,
    name: "Dashboard",
    path: "user/dashboard/my-dashboard",
    type: "buyer",
    icon: VscDashboard,
  },
  {
    id: 7,
    name: "My Products",
    path: "user/dashboard/my-products",
    type:  "farmer",
    icon: VscVm,
  },
  {
    id: 8,
    name: "Add Product",
    path: "user/dashboard/add-products",
    type:  "farmer",
    icon: VscAdd,
  },
   {
    id: 9,
    name: "Add MSP",
    path: "user/dashboard/add-msp",
    type:  "admin",
    icon: VscAdd,
  },
  {
    id: 10,
    name: "Order History",
    path: "user/dashboard/purchase-history",
    type: "buyer",
    icon: VscHistory,
  },
  {
    id: 11,
    name: "Sell History",
    path: "user/dashboard/sell-history",
    type: "farmer",
    icon: VscHistory,
  },
  {
    id: 12,
    name: "Payment History",
    path: "user/dashboard/payment-history",
    type: "admin",
    icon: VscHistory,
  },
  {
    id: 13,
    name: "MSP Update",
    path: "user/dashboard/msp-update",
    type: "admin",
    icon: VscAdd,
  },
  {
    id: 14,
    name: "Price Update",
    path: "user/dashboard/price-update",
    type: "farmer",
    icon: VscAdd,
  }
];
export default sidebarLinks;
