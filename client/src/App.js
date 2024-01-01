import "./App.css";

import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Company } from "./Pages/Company/Company";
import { CompanyProvider } from "./context/companyContext";
import Home from "./Pages/Home/Home";
import StudentRegistration from "./Pages/Student/StudentRegistration";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  cors: {
    origin: "http://localhost:3000",
  },
  link: new HttpLink({ uri: "http://localhost:5000/graphql" }), // Replace with your GraphQL endpoint
});
function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Router>
          <CompanyProvider>
            <Routes>
              <Route
                path="/student/register"
                element={<StudentRegistration />}
              />
              <Route path="company-profile" element={<Company />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </CompanyProvider>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
