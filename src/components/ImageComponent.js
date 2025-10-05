import "./ImageComponent.css";

export function ImageComponent({ 
  src, 
  alt, 
  width = "400px",
  className = "",
  caption,
  credit 
}) {
  return (
    <div className={`image-component ${className}`}>
      <img 
        className="image-component-img" 
        src={src} 
        alt={alt}
        style={{ maxWidth: width }}
      />
      {(caption || credit) && (
        <div className="image-component-caption">
          {caption && <div className="caption-text">{caption}</div>}
          {credit && <div className="caption-credit">{credit}</div>}
        </div>
      )}
    </div>
  );
}