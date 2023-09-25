import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout() {
  return (
    <div className="app">
      <ResponsiveAppBar />

      <Outlet />

      <Footer />
    </div>
  )
}

export default Layout