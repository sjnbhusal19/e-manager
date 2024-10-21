import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import AdminDashboard from './pages/admin/adminDashboard';
import TeacherDashboard from './pages/teacher/teacherDashboard';
import Calendar from './pages/calendar';
import AddCourse from './pages/admin/addCourse';
import ManageCourse from './pages/admin/manageCourse';
import UserList from './pages/admin/userList';
import AddUser from './pages/admin/addUser';
import ManageUser from './pages/admin/manageUser';
import PendingOrder from './pages/admin/pendingOrder';
import OrderList from './pages/admin/orderList';
import ManageOrder from './pages/admin/manageOrder';
import UserReport from './pages/admin/userReport';
import SalesReports from './pages/admin/salesReports';
import ProductReport from './pages/admin/productReport';
import Settings from './pages/settings';
import Billings from './pages/billings';














const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/adminDashboard",
    element: <AdminDashboard />
  },
  {
    path: "/teacherDashboard",
    element: <TeacherDashboard />
  },
  {
    path: "/calendar",
    element: <Calendar />
  },
  {
    path: "/addCourse",
    element: <AddCourse />
  },
  {
    path: "/manageCourse",
    element: <ManageCourse />
  },
  {
    path: "/userList",
    element: <UserList />
  },
  {
    path: "/addUser",
    element: <AddUser />
  },
  {
    path: "/manageUser",
    element: <ManageUser />
  },
  {
    path: "/pendingOrder",
    element: <PendingOrder />
  },
  {
    path: "/orderList",
    element: <OrderList />
  },
  {
    path: "/manageOrder",
    element: <ManageOrder />
  },
  {
    path: "/userReport",
    element: <UserReport />
  },
  {
    path: "/salesReport",
    element: <SalesReports />
  },
  {
    path: "/productReport",
    element: <ProductReport />
  },
  {
    path: "/settings",
    element: <Settings />
  },
  {
    path: "/billings",
    element: <Billings />
  },
]);





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
