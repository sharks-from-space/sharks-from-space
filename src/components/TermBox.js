import { Link } from "react-router-dom";
import "./TermBox.css";

export function TermBox({ title, text, link, buttonText = "Learn More" }) {
  return (
    <div className="term-box">
      <div className="term-box-title">{title}</div>
      <div className="term-box-text">{text}</div>
      <Link to={link} className="term-box-link">
        {buttonText}
      </Link>
    </div>
  );
}