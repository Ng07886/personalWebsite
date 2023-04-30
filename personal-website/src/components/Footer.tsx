import React from "react";

function Footer() {
  const dt = new Date();
  const Year = dt.getFullYear();

  return (
    <section className="footer-sec">
      <footer>
        <p>Coppyright © {Year} </p>
      </footer>
    </section>
  );
}

export default Footer;
