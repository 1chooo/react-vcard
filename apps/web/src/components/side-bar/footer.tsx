import React from "react";
import Link from "next/link";

import "@/styles/side-bar/footer.css";

// All rights reserved and subject to the Privacy Policy and Terms and Conditions.
function Footer({ }) {
  return (
    <footer className="footer">
      <div className="footer-copyright">
        © 2024 <Link href="https://1chooo.com" target="_blank" rel="noopener noreferrer">1chooo</Link>
      </div>
      <div className="footer-links">
        <Link
          href="https://github.com/1chooo/1chooo.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vcard
        </Link>
        <Link
          href="https://docs.1chooo.com/terms"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms
        </Link>
        <Link
          href="https://docs.1chooo.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Docs
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
