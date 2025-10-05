import "./DictionaryEntry.css";

export function DictionaryEntry({ 
  word, 
  pronunciation, 
  partOfSpeech, 
  definition 
}) {
  return (
    <div className="dictionary-entry">
      <div className="dictionary-header">
        <h2 className="dictionary-word">{word}</h2>
        <span className="dictionary-pronunciation">{pronunciation}</span>
        <span className="dictionary-part-of-speech">• {partOfSpeech}</span>
      </div>
      <p className="dictionary-definition">{definition}</p>
    </div>
  );
}