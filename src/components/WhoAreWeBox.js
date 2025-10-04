import "./WhoAreWeBox.css";
import { Link } from "react-router-dom";

export function WhoAreWeBox({ text, image, alt }) {
  return (
    <div className="who-are-we-box">
      <div className="who-are-we-text">
        <h2>Who are we?</h2>
        <a href="https://www.linkedin.com/in/davidsalmon13/">David Salmon</a>
        <a href="https://www.linkedin.com/in/moniquegrinstein/">Monique Grinstein</a>
        <p>{text || ''}</p>
        {/* <Link to="/contributors" className="who-are-we-link">
          Meet the Contributors
        </Link> */}
      </div>
      <div className="who-are-we-image-wrapper">
        <img src={image} alt={alt || "Group picture"} className="who-are-we-image" />
      </div>
    </div>
  );
}
