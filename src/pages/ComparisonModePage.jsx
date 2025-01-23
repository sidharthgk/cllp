import  { useState } from "react";
import "../styles/ComparisonModePage.css";

const ComparisonModePage = () => {
  const [language1, setLanguage1] = useState("");
  const [language2, setLanguage2] = useState("");
  const [compatibilityScore, setCompatibilityScore] = useState(null);

  const languages = ["Python", "JavaScript", "Java", "C++", "Ruby"];

  const handleCompare = () => {
    if (language1 && language2) {
      const score = Math.floor(Math.random() * 100);
      setCompatibilityScore(score);
    } else {
      alert("Please select two languages to compare!");
    }
  };

  return (
    <div className="comparison-mode">
      <h1>Comparison Mode</h1>
      <div className="comparison-container">
        <div className="language-selector">
          <h2>Select a Known Language</h2>
          {languages.map((language) => (
            <button
              key={language}
              className={`language-btn ${language1 === language ? "selected" : ""}`}
              onClick={() => setLanguage1(language)}
            >
              {language}
            </button>
          ))}
        </div>
        <div className="language-selector">
          <h2>Select a Target Language</h2>
          {languages.map((language) => (
            <button
              key={language}
              className={`language-btn ${language2 === language ? "selected" : ""}`}
              onClick={() => setLanguage2(language)}
            >
              {language}
            </button>
          ))}
        </div>
      </div>
      <button className="compare-btn" onClick={handleCompare}>
        Compare
      </button>
      {compatibilityScore !== null && (
        <div className="result">
          <h2>Compatibility Score</h2>
          <p>
            The similarity between <strong>{language1}</strong> and{" "}
            <strong>{language2}</strong> is <strong>{compatibilityScore}%</strong>.
          </p>
        </div>
      )}
    </div>
  );
};

export default ComparisonModePage;
