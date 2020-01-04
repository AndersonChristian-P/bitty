import React from 'react';

const Footer = () => {
  return (
    <>
      <footer>

        <div className="newsletter">
          <h3>Sign up for our newsletter</h3>

          <div className="newsletter-input">
            <input
              type="text"
              placeholder=""
            // value={}
            // onChange={}
            />

            <button>
              Submit
            </button>
          </div>

          <p>It will inspire you.</p>

        </div>

        <div className="resources">
          links, social, T&C, etc
        </div>

      </footer>
    </>
  );
}

// Footer doesn't have a state, so made the component function based

export default Footer;