import { createContext, useContext, useState } from "react";

const StudentContext = createContext(undefined);

const StudentProvider = ({ children }) => {
  const [isStudentAuthenticated, setIsStudentAuthenticated] = useState(false);

  const studentLogin = () => {
    // Perform login logic for students
    setIsStudentAuthenticated(true);
  };

  const studentLogout = () => {
    // Perform logout logic for students
    setIsStudentAuthenticated(false);
  };

  const value = { isStudentAuthenticated, studentLogin, studentLogout };

  return (
    <StudentContext.Provider value={value}>{children}</StudentContext.Provider>
  );
};

const useStudent = () => {
  const context = useContext(StudentContext);
  if (context === undefined) {
    throw new Error(`useStudent must be used within a StudentProvider`);
  }
  return context;
};

export { StudentProvider, useStudent };
