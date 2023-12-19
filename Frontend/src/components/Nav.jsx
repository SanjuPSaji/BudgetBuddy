// rrd imports
import { Form, NavLink } from "react-router-dom"

// library
import 'bootstrap-icons/font/bootstrap-icons.css'

// assets
import logomark from "../assets/logomark.svg"

const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink
        to="/"
        aria-label="Go to home"
      >
        <img src={logomark} alt="" height={30} />
        <span>BudgetBuddy</span>
      </NavLink>
      <NavLink to="/about-us" className="ml-auto">About Us</NavLink>
      {
        userName && (
          <Form
            method="post"
            action="logout"
            onSubmit={(event) => {
              if (!confirm("Logoff and delete all data?")) {
                event.preventDefault()
              }
            }}
          >
            <button type="submit" className="btn btn--warning">
              <span>LogOut</span>
              <div>
               <i class="bi bi-trash-fill"></i>
              </div>
            </button>

          </Form>
        )
      }
    </nav>
  )
}
export default Nav