import { lazy } from 'react';

import { TMenuItem } from './types/App';
import { FaHome, FaRegClock, FaUserTie } from 'react-icons/fa';
import { FaPersonChalkboard } from "react-icons/fa6";
import { ImBooks } from "react-icons/im";
import { AiOutlineLike } from "react-icons/ai";
import { LuFileEdit } from "react-icons/lu";



import Home from './Pages/Home/Page';
import Student from './Pages/Student/Page';
import Classes from './Pages/Classes/Page';
import Division from './Pages/Division/Page';



import AddStudent from './Pages/Student/Add/Page'
import ActivityStudent from './Pages/Student/Activity/Page'
import TimeStudent from './Pages/Student/TimeDetails/Add/Page'
import PaymentStudent from './Pages/Student/Payment/Page'

import Time from './Pages/Time/Page';
import Test from './Components/Test/Test';

export const menuItems: TMenuItem[] = [

  {
    header: "لوحة القيادة", element: <Home />, icon: <FaHome />, text: 'لوحة القيادة', path: '/',
    children: [
      {
        header: "دوام الطالبات", element: <Time />, icon: <FaRegClock />, text: 'دوام الطالبات', path: '/time',
        children: [
          { header: "دوام الطالبات", element: <Time />, icon: <FaRegClock />, text: 'دوام الطالبات', path: '/time' },
          { header: "دوام الطالبات", element: <Time />, icon: <FaRegClock />, text: 'دوام الطالبات', path: '/time' },
          { header: "دوام الطالبات", element: <Time />, icon: <FaRegClock />, text: 'دوام الطالبات', path: '/time' },

        ]
      },
      { header: "دوام الطالبات", element: <Time />, icon: <FaRegClock />, text: 'دوام الطالبات', path: '/time' },
      { header: "دوام الطالبات", element: <Time />, icon: <FaRegClock />, text: 'دوام الطالبات', path: '/time' },

    ]
  },
  {
    header: "الطالبات", element: <Student />, icon: <FaUserTie />, text: 'الطالبات', path: '/student',
    children: [
      { header: "دوام الطالبات", element: <Time />, icon: <FaRegClock />, text: 'دوام الطالبات', path: '/time' },
      { header: "دوام الطالبات", element: <Time />, icon: <FaRegClock />, text: 'دوام الطالبات', path: '/time' },
      { header: "دوام الطالبات", element: <Time />, icon: <FaRegClock />, text: 'دوام الطالبات', path: '/time' },

    ]
  },
  { header: "دوام الطالبات", element: <Time />, icon: <FaRegClock />, text: 'دوام الطالبات', path: '/time' },
  { header: "برنامج الحصص", element: <Classes />, icon: <FaPersonChalkboard />, text: 'برنامج الحصص', path: '/classes' },
  { header: "متابعة المنهاج", element: <Division />, icon: <ImBooks />, text: 'متابعة المنهاج', path: '/division' },
  { header: "السلوك الصفّي", element: <Home />, icon: <AiOutlineLike />, text: 'السلوك الصفّي', path: '/ba' },
  { header: "المواد", element: <Home />, icon: <FaHome />, text: 'المواد', path: '/c' },
  { header: "تقدّم المنهاج", element: <Home />, icon: <LuFileEdit />, text: 'تقدّم المنهاج', path: '/ba' },
  { header: "لوحة القيادة", element: <Home />, icon: <FaHome />, text: 'لوحة القيادة', path: '/f' },
  { header: "الطالبات", element: <Home />, icon: <FaUserTie />, text: 'الطالبات', path: '/q' },
  { header: "دوام الطالبات", element: <Home />, icon: <FaRegClock />, text: 'دوام الطالبات', path: '/c' },
  { header: "برنامج الحصص", element: <Home />, icon: <FaPersonChalkboard />, text: 'برنامج الحصص', path: '/b' },
  { header: "متابعة المنهاج", element: <Home />, icon: <ImBooks />, text: 'متابعة المنهاج', path: '/c' },
  { header: "السلوك الصفّي", element: <Home />, icon: <AiOutlineLike />, text: 'السلوك الصفّي', path: '/b' },
  { header: "المواد", element: <Home />, icon: <FaHome />, text: 'المواد', path: '/c' },
  { header: "تقدّم المنهاج", element: <Home />, icon: <LuFileEdit />, text: 'تقدّم المنهاج', path: '/b' },
  { header: "لوحة القيادة", element: <Home />, icon: <FaHome />, text: 'لوحة القيادة', path: '/' },
  { header: "الطالبات", element: <Home />, icon: <FaUserTie />, text: 'الطالبات', path: '/b' },
  { header: "دوام الطالبات", element: <Home />, icon: <FaRegClock />, text: 'دوام الطالبات', path: '/c' },
  { header: "برنامج الحصص", element: <Home />, icon: <FaPersonChalkboard />, text: 'برنامج الحصص', path: '/b' },
  { header: "متابعة المنهاج", element: <Home />, icon: <ImBooks />, text: 'متابعة المنهاج', path: '/c' },
  { header: "السلوك الصفّي", element: <Home />, icon: <AiOutlineLike />, text: 'السلوك الصفّي', path: '/b' },
  { header: "المواد", element: <Home />, icon: <FaHome />, text: 'المواد', path: '/c' },
  { header: "تقدّم المنهاج", element: <Home />, icon: <LuFileEdit />, text: 'تقدّم المنهاج', path: '/b' },

  { header: "برنامج الحصص", element: <Home />, icon: <FaHome />, text: 'برنامج الحصص', path: '/d' },
];

export const CrudRoute = [
  { header: "CreateProduct", element: <Home />, path: '/products/add' },

  //////////  student Details
  { header: "Createstudent", element: <AddStudent />, path: '/student/add' },
  { header: "studentActivity", element: <ActivityStudent />, path: '/student/:id/activity' },
  { header: "studentTimeDatails", element: <TimeStudent />, path: '/student/:id/time' },
  { header: "studentpayment", element: <PaymentStudent />, path: '/student/:id/payment' },

  { header: "test", element: <Test />, path: '/test', withOutLayout: true },


]


export const AppRoutes: Record<string, string> = Object.fromEntries(
  menuItems.map((route) => [route.path, route.header ? route.header : route.text])
);

export const CrudRoutes: Record<string, string> = Object.fromEntries(
  CrudRoute.map((route) => [route.path, route.header])
);