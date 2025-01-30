import { useParams } from "react-router-dom";
import { FaceRecoProject } from "./FaceRecoProject";
import { EduHub } from "./EduHub";

export function ProjectDetails() {
  const { projectId } = useParams();
  const projectComponents: { [key: string]: React.ComponentType } = {
    "facetrack-pro": FaceRecoProject,
    eduhub: EduHub,
  };

  const ProjectComponent = projectComponents[projectId as string];

  if (!ProjectComponent) {
    return <div>Project not found</div>;
  }

  return <ProjectComponent />;
}
