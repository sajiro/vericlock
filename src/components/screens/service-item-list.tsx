import { convertLineBreaksToHtml } from "../../helper";
import { useVeriClockApi } from "../../hooks/useVeriClockApi";
import { TerribleViewContainer } from "../layout/terrible-view-container";
import { useQuery } from "react-query";
import { InputContainer, PSmall } from "./styles";

export function ServiceItemsList() {
  const api = useVeriClockApi();

  const {
    data: serviceItemList,
    isLoading,
    isError,
  } = useQuery("serviceItems", () => api.fetchServiceItems());

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching serviceItems</div>;
  }

  return (
    <TerribleViewContainer>
      <h1>Service Items</h1>
      {serviceItemList?.map((item) => (
        <div className="list-item" key={item.guid}>
          <InputContainer>
            <PSmall>Name</PSmall>
            {item.name}
          </InputContainer>
          <InputContainer>
            <PSmall>Description</PSmall>
            <div
              dangerouslySetInnerHTML={{
                __html: convertLineBreaksToHtml(item.description || "-"),
              }}
            ></div>
          </InputContainer>
        </div>
      ))}
    </TerribleViewContainer>
  );
}
