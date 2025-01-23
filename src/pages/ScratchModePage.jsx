import { useState } from "react";
import "../styles/ScratchModePage.css";

const ScratchModePage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const languages = ["Python", "JavaScript", "Java", "C++", "Ruby"];

  return (
    <div className="scratch-mode">
      <h1>Scratch Mode</h1>
      <div className="language-list">
        {languages.map((language) => (
          <button
            key={language}
            className={selectedLanguage === language ? "selected" : ""}
            onClick={() => setSelectedLanguage(language)}
          >
            {language}
          </button>
        ))}
      </div>
      {selectedLanguage && (
        <div className="selected-info">
          <h2>You selected: {selectedLanguage}</h2>
          <p>Lets start learning {selectedLanguage} from scratch!</p>
        </div>
      )}
    </div>
  );
};

export default ScratchModePage;
