import React, { useState } from 'react';
import './Tabs.css';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const tabs = [
    { label: "Skills", id: "skills", content: ["JavaScript", "React", "CSS"] },
    { label: "Experience", id: "experience", content: ["Frontend Developer at XYZ"] },
    { label: "Education", id: "education", content: ["Computer Science, ABC University"] },
  ];

  return (
    <div>
      <div className="tab-titles">
        {tabs.map((tab) => (
          <p
            key={tab.id}
            className={`tab-links ${activeTab === tab.id ? "active-link" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </p>
        ))}
      </div>

      {tabs.map((tab) => (
        <div key={tab.id} className={`tab-contents ${activeTab === tab.id ? "active-tab" : ""}`}>
          <ul>
            {tab.content.map((item, idx) => (
              <li key={idx}><span>{item}</span></li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
