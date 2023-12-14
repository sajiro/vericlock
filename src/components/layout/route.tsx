import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { EmployeeList } from "../screens/employees";
import { JobList } from "../screens/joblist";
import { ServiceItemsList } from "../screens/service-item-list";
import Layout from "./layout";

export function RouterComponent() {
  return (
    <Router>
      <Routes>
        <Route
          path="/employees"
          element={
            <Layout>
              <EmployeeList />
            </Layout>
          }
        />
        <Route
          path="/jobs"
          element={
            <Layout>
              <JobList />
            </Layout>
          }
        />
        <Route
          path="/serviceItems"
          element={
            <Layout>
              <ServiceItemsList />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <EmployeeList />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}
