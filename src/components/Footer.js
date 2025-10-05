import React from "react";
import "./Footer.css";
import { scrollToTopPage } from "./ScrollToTop"; // import the function


export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-line">
        {/* Tagline left */}
        <div className="footer-left">
          Jawstronats - Sharks From Space
        </div>

        {/* Scroll-to-top text */}
        <span className="scroll-top" onClick={scrollToTopPage}>
          ↑ Top of the page
        </span>

        {/* Copyright right */}
        <div className="footer-right">
          <span className="copyright-names">
            Created by {" "}
            <a
              href="https://github.com/ds2713"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight"
            >
              David Salmon
            </a>{" "}
            &{" "}
            <a
              href="https://github.com/mgrinstein"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight"
            >
              Monique Grinstein
            </a>
          </span>
          <span className="copyright-reserved">
          </span>
        </div>
      </div>

      
    </footer>
  );
}