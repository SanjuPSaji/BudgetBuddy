import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import 'bootstrap-icons/font/bootstrap-icons.css'
import illustration from "../assets/illustration.jpg"
const AboutUs = () => {
  return (
    
    <div className="about-us">
      <section className="section">
        <h2 style={{ display: 'flex', alignItems: 'center' }}>
        </h2>
      </section>
     
      <div className="about-us">
        <section className="section" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', textAlign: 'center' }}>
          <div>
            <i className="bi bi-wallet2"></i>
          </div>
          <h2 className='accent'>Our Mission</h2>
          <p>At BudgetBuddy, we're dedicated to helping you gain mastery over your finances and realize your financial aspirations. We firmly believe that strategic budgeting is the cornerstone of financial independence.</p>
        </section>

        <section className="section" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', textAlign: 'center' }}>
          <div>
            <i className="bi bi-currency-rupee"></i>
          </div>
          <h2 className='accent'>Budgeting Solutions</h2>
          <p>With BudgetBuddy, you can create and customize budgets that suit your unique financial situation. Our user-friendly interface makes it easy to set spending limits, track your income, and manage expenses effortlessly.</p>
        </section>

        <section className="section" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', textAlign: 'center' }}>
          <div>
            <i className="bi bi-pie-chart-fill"></i>
          </div>
          <h2 className='accent'>Expense Tracking</h2>
          <p>Stay in control of your spending with our intuitive expense tracking tools. Easily categorize and analyze your expenses, so you can identify areas where you can save and make informed financial decisions.</p>
        </section>

        <section className="section" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', textAlign: 'center' }}>
          <div>
            <i className="bi bi-pie-chart"></i>
          </div>
          <h2 className='accent'>Real-Time Insights</h2>
          <p>Get real-time insights and monitor your progress and see how your spending habits align with your financial goals.</p>
        </section>
        <img src={illustration} alt="Person with money" width={600} />
      </div>
      <br/>
      <br/>
      <div className="flex-md" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button
          className="btn btn--dark"
          onClick={() => navigate(-1)}
        >
          <div>
            <i className="bi bi-box-arrow-left"></i>
          </div>
          <span>Go Back</span>
        </button>
        <Link
          to="/"
          className="btn btn--dark"
        >
          <div>
            <i className="bi bi-house"></i>
          </div>
          <span>Go home</span>
        </Link>
        
      </div>
      
    </div>
    
  );
}

export default AboutUs;
