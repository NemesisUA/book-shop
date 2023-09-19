import { NavLink, Outlet } from "react-router-dom"

function Layout() {
  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="About">About</NavLink>
      </header>

      <Outlet />

      <footer>this is footer</footer>
    </>
  )
}

export default Layout