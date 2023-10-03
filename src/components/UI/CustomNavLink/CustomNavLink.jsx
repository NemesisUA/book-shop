import { NavLink } from "react-router-dom";
import './CustomNavLink.css';

function CustomNavLink({ children, to, ...props }) {
  return (
    <NavLink
      className='custom-nav-link'
      to={to}
      {...props}
    >{children}</NavLink>
  )
}

export default CustomNavLink