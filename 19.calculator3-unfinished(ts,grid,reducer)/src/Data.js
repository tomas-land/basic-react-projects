import { FaBackspace, FaTimes } from "react-icons/fa";
import { CgMathPercent, CgMathPlus, CgMathMinus } from "react-icons/cg";
import { VscClose } from "react-icons/vsc";
import React from "react";
const buttons = [
  {
    btnAction: "cancelAll",
    btnValue: "C",
  },
  {
    btnAction: "cancelEntity",
    btnValue: "CE",
  },
  {
    btnAction: "backspace",
    btnValue: <FaBackspace />,
  },
  {
    btnAction: "multiply",
    btnValue: <VscClose />,
  },
  {
    btnValue: 7,
  },
  {
    btnValue: 8,
  },
  {
    btnValue: 9,
  },
  {
    btnAction: "divide",
    btnValue: <CgMathPercent />,
  },
  {
    btnValue: 4,
  },
  {
    btnValue: 5,
  },
  {
    btnValue: 6,
  },
  {
    btnAction: "add",
    btnValue: <CgMathPlus />,
  },
  {
    btnValue: 1,
  },
  {
    btnValue: 2,
  },
  {
    btnValue: 3,
  },
  {
    btnAction: "subtract",
    btnValue: <CgMathMinus />,
  },
  {
    btnValue: ".",
  },
  {
    btnValue: 0,
  },
  {
    btnAction: "result",
    btnValue: "=",
  },
];

export default buttons;
//  c | ce| bk| x
//  7 | 8 | 9 | /
//  4 | 5 | 6 | +
//  1 | 2 | 3 | -
//  . | 0 | =   =
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
// import React from 'react';
// const sublinks = [
//   {
//     page: 'products',
//     links: [
//       { label: 'payment', icon: <FaCreditCard />, url: '/products' },
//       { label: 'terminal', icon: <FaCreditCard />, url: '/products' },
//       { label: 'connect', icon: <FaCreditCard />, url: '/products' },
//     ],
//   },
//   {
//     page: 'developers',
//     links: [
//       { label: 'plugins', icon: <FaBook />, url: '/products' },
//       { label: 'libraries', icon: <FaBook />, url: '/products' },
//       { label: 'help', icon: <FaBook />, url: '/products' },
//       { label: 'billing', icon: <FaBook />, url: '/products' },
//     ],
//   },
//   {
//     page: 'company',
//     links: [
//       { label: 'about', icon: <FaBriefcase />, url: '/products' },
//       { label: 'customers', icon: <FaBriefcase />, url: '/products' },
//     ],
//   },
// ];

// export default sublinks;
