import { useState } from "react";
import ResumeContext from "./components/Contexts/ResumeContext";
import "./App.css";
import LeftPane from "./components/LeftPane/LeftPane";
import Resume from "./components/RightPane/Resume/Resume";

function App() {
  // setting up state for the resume data
  const [resumeData, setResumeData] = useState({
    education: [],
    experience: [],
    contact: {},
  });

  // sharing the resume data and the setResumeData with the left pane and right pane children
  return (
    <div className="app">
      <ResumeContext.Provider value={setResumeData}>
        <LeftPane />
      </ResumeContext.Provider>
      <ResumeContext.Provider
        value={{ resumeData: resumeData, setResumeData: setResumeData }}
      >
        <Resume />
      </ResumeContext.Provider>
    </div>
  );
}

export default App;
