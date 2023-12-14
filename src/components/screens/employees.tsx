import { TerribleViewContainer } from "../layout/terrible-view-container";
import { useVeriClockApi } from "../../hooks/useVeriClockApi";
import { useQuery } from "react-query";
import { InputContainer, PSmall } from "./styles";

export function EmployeeList() {
  const api = useVeriClockApi();

  const {
    data: employees,
    isLoading,
    isError,
  } = useQuery("employees", () => api.fetchEmployees());

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching employees</div>;
  }

  return (
    <TerribleViewContainer>
      <h1>Employees</h1>
      {employees?.map((employee) => (
        <div className="list-item" key={employee.guid}>
          <InputContainer>
            <PSmall>First name</PSmall>
            {employee.firstName}
          </InputContainer>
          <InputContainer>
            <PSmall>Lastmane</PSmall>
            {employee.lastName}
          </InputContainer>
        </div>
      ))}
    </TerribleViewContainer>
  );
}
