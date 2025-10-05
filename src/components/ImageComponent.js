import "./ImageComponent.css";

export function ImageComponent({ 
  src, 
  alt, 
  width = "400px",
  className = "",
  caption 
}) {
  return (
    <div className={`image-component ${className}`}>
      <img 
        className="image-component-img" 
        src={src} 
        alt={alt}
        style={{ maxWidth: width }}
      />
      {caption && <div className="image-component-caption">{caption}</div>}
    </div>
  );
}