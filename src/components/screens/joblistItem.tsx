import { convertLineBreaksToHtml } from "../../helper";
import { useState } from "react";
import { Job, JobItemProps } from "../../models/models";
import { Button } from "../common/button/button";
import { InputContainer, PSmall } from "./styles";

type JoblistItemProps = {
  onPress: (job: JobItemProps) => void;
  job: Job;
};

export function JoblistItem({ onPress, job }: JoblistItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [code, setCode] = useState(String(job.code));
  const [name, setName] = useState(job.name);
  const [desc, setDesc] = useState(job.description);

  const onHandlePress = () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      return;
    }
    const updatedJob: JobItemProps = {
      code: Number(code),
      name,
      description: desc,
    };
    onPress && onPress(updatedJob);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <InputContainer>
            <p>Code</p>
            <input
              className="input-width"
              type="number"
              onChange={(e) => setCode(e.target.value)}
              value={code}
              placeholder="username"
            />
          </InputContainer>
          <InputContainer>
            <p>Name</p>
            <input
              className="input-width"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="username"
            />
          </InputContainer>
          <InputContainer>
            <p>Description</p>
            <input
              className="input-width"
              type="text"
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
              placeholder="username"
            />
          </InputContainer>
          <Button label="Save updates" onPress={onHandlePress} />
        </div>
      ) : (
        <div>
          <InputContainer>
            <PSmall>Code</PSmall>
            {job.code}
          </InputContainer>
          <InputContainer>
            <PSmall>Name</PSmall>
            {job.name}
          </InputContainer>
          <InputContainer>
            <PSmall>Description</PSmall>
            <div
              dangerouslySetInnerHTML={{
                __html: convertLineBreaksToHtml(job.description || "-"),
              }}
            ></div>
          </InputContainer>

          <Button label="Update" onPress={onHandlePress} />
        </div>
      )}
    </div>
  );
}
