import { useRouteError, Link, useNavigate } from "react-router-dom"

// library imports
import 'bootstrap-icons/font/bootstrap-icons.css'

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="error">
      <h1>Uh oh! We’ve got a problem.</h1>
      <p>{error.message || error.statusText}</p>
      <div className="flex-md">
        <button
          className="btn btn--dark"
          onClick={() => navigate(-1)}
        >
          <div>
             <i class="bi bi-box-arrow-left"></i>
          </div>
          <span>Go Back</span>
        </button>
        <Link
          to="/"
          className="btn btn--dark"
        >
           <div>
               <i class="bi bi-house"></i>
          </div>
          <span>Go home</span>
        </Link>
      </div>
    </div>
  )
}
export default Error