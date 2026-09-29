import { BrowserRouter, Routes, Route } from "react-router-dom"
import DashBoard from "../pages/dashboard"
import Layout from "../Components/core/layout"
import Doctors from "../pages/doctors"
import Patients from "../pages/patients"
import Appointments from "../pages/appointments"
import Login from "../pages/login"
import Home from "../pages/home"

export default function Routing() {

    return (


        <BrowserRouter>
            <Layout/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/dashboard" element={<DashBoard />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/patients" element={<Patients />} />
                <Route path="/appointments" element={<Appointments />} />
                <Route path="/login" element={<Login/>}/>

            </Routes>

        </BrowserRouter>
    )
}