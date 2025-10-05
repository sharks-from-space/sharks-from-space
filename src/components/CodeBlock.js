import "./CodeBlock.css";

export function CodeBlock({ 
  code, 
  language = "json", 
  title,
  showLineNumbers = false,
  preserveComments = true 
}) {
  const formatCode = (code) => {
    if (language === "json" && !preserveComments) {
      try {
        // If it's a string, try to parse and re-stringify for formatting
        const parsed = typeof code === "string" ? JSON.parse(code) : code;
        return JSON.stringify(parsed, null, 2);
      } catch (e) {
        // If parsing fails, return as-is
        return code;
      }
    }
    // For JSONC (JSON with comments) or when preserveComments is true, return as-is
    return typeof code === "string" ? code : JSON.stringify(code, null, 2);
  };

  const formattedCode = formatCode(code);
  const lines = formattedCode.split('\n');

  return (
    <div className="code-block">
      {title && <div className="code-block-title">{title}</div>}
      <div className={`code-block-container language-${language}`}>
        <pre className="code-block-pre">
          <code className="code-block-code">
            {showLineNumbers ? (
              lines.map((line, index) => (
                <div key={`line-${index}-${line.slice(0, 10)}`} className="code-line">
                  <span className="line-number">{index + 1}</span>
                  <span className="line-content">{line}</span>
                </div>
              ))
            ) : (
              formattedCode
            )}
          </code>
        </pre>
      </div>
    </div>
  );
}