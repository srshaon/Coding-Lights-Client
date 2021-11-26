import './Dashboard.css';

import React, { useState } from 'react';

import { Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';



import {
    CDBSidebar,

    CDBSidebarContent,

} from "cdbreact";
import Welcome from '../Welcome/Welcome';
import Pay from '../Pay/Pay';
import MyOrders from '../MyOrders/MyOrders';
import Review from '../Review/Review';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AllOrders from '../AllOrders/AllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import AddNewProducts from '../AddNewProducts/AddNewProducts';

const Dashboard = () => {
    const { logOut, admin } = useAuth();
    const [control, setControl] = useState("welcome")
    console.log(admin);

    if (admin === '') {
        return <Spinner animation="border" variant="danger" />
    }
    return (
        <div >

            <div className="dashboard-details-div">
                <div  >
                    <div className="h-100">
                        <CDBSidebar className="w-100" textColor="#fff" backgroundColor="#333">


                            <CDBSidebarContent className="py-5">
                                {
                                    (admin === 'admin') && (
                                        <div>


                                            <div>
                                                <li onClick={() => setControl("allorders")}
                                                    className="li py-3 px-3">
                                                    All Orders
                                                </li>
                                                <li onClick={() => setControl("manageproducts")}
                                                    className="li py-3 px-3">
                                                    Manage Products
                                                </li>
                                                <li onClick={() => setControl("addnewproduct")}
                                                    className="li py-3 px-3">
                                                    Add Product
                                                </li>
                                                <li onClick={() => setControl("makeadmin")}
                                                    className="li py-3 px-3">
                                                    Make Admin
                                                </li>
                                                <li onClick={logOut} className="li px-3 py-3">
                                                    Log Out
                                                </li>
                                            </div>
                                        </div>)
                                }
                                {
                                    (admin === 'user') && (
                                        <div>
                                            <div >
                                                <ul className="">
                                                    <li onClick={() => setControl("myorders")}
                                                        className="li  py-3">
                                                        My Orders
                                                    </li>
                                                    <li onClick={() => setControl("pay")} className="li  py-3">
                                                        Pay
                                                    </li>
                                                    <li onClick={() => setControl("review")} className="li  py-3">
                                                        Review
                                                    </li>
                                                    <li onClick={logOut} className="li  py-3">
                                                        Log Out
                                                    </li>

                                                </ul>

                                            </div>
                                        </div>
                                    )
                                }
                            </CDBSidebarContent>

                        </CDBSidebar>
                    </div>
                </div>
                <div className="dashboard-second-container"  >

                    {control === "myorders" && <MyOrders></MyOrders>}
                    {control === "pay" && <Pay></Pay>}
                    {control === "review" && <Review></Review>}
                    {control === "welcome" && <Welcome></Welcome>}
                    {control === "makeadmin" && <MakeAdmin></MakeAdmin>}
                    {control === "allorders" && <AllOrders></AllOrders>}
                    {control === "manageproducts" && <ManageProducts></ManageProducts>}
                    {control === "addnewproduct" && <AddNewProducts></AddNewProducts>}


                </div>
            </div>
        </div>
    );
};

export default Dashboard;

