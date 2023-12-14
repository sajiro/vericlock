import { useVeriClockApi } from "../../hooks/useVeriClockApi";
import { TerribleViewContainer } from "../layout/terrible-view-container";
import { useQuery } from "react-query";
import { useState } from "react";
import { ITEMS_PER_PAGE } from "../../config";
import styled from "styled-components";
import { JobForUpdate } from "../../models/models";
import { Button } from "../common/button/button";
import { JoblistItem } from "./joblistItem";

const JobItem = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 1em 0;
`;

const ShowMoreContainer = styled.div`
  width: 100%;
  text-align: center;

  button {
    margin: 10px auto;
  }
`;

export function JobList() {
  const api = useVeriClockApi();
  const {
    data: jobs,
    isLoading,
    isError,
    refetch,
    isRefetching,
  } = useQuery(["jobList"], () => api.fetchJobs());
  const [pageNumber, setPageNumber] = useState(1);

  const visibleJobs = jobs ? jobs.slice(0, pageNumber * ITEMS_PER_PAGE) : [];

  const handleShowMore = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  if (isLoading || isRefetching) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching Jobs</div>;
  }

  const handleUpdateJob = async (
    jobId: string,
    updatedData: Partial<JobForUpdate>
  ) => {
    try {
      await api.updateJob({
        guid: jobId,
        ...updatedData,
      });
      refetch();
    } catch (error) {
      console.error("Error updating job:", error);
    }
  };

  return (
    <TerribleViewContainer>
      <h1>Jobs</h1>
      {visibleJobs?.map((job) => (
        <JobItem key={job.guid}>
          <JoblistItem
            job={job}
            onPress={(jobValue) => {
              handleUpdateJob(job.guid, {
                name: jobValue.name,
                description: jobValue.description,
                code: jobValue.code,
              } as JobForUpdate);
            }}
          />
        </JobItem>
      ))}
      <ShowMoreContainer>
        {visibleJobs.length < (jobs?.length ?? 0) && (
          <Button
            onPress={handleShowMore}
            label={isLoading ? "Loading more..." : "Show More jobs"}
          />
        )}
      </ShowMoreContainer>
    </TerribleViewContainer>
  );
}
