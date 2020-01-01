import React from 'react';

const Footer = () => {
  return (
    <>
      <footer>

        <div className="newsletter">
          <h3>Sign up for our newsletter</h3>

          <div className="newsletter-input">
            placeholder for email input
            <button>
              Submit
            </button>
          </div>

          <p>It will inspire you.</p>

        </div>

      </footer>
    </>
  );
}

// Footer doesn't have a state, so made the component function based

export default Footer;