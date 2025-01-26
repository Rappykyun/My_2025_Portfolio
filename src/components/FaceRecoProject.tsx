import { useParams } from "react-router-dom";

export function FaceRecoProject() {
  const { projectId } = useParams();

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      <h1 className="font-incognito text-3xl font-bold">Project Details</h1>
      <p>Viewing project: {projectId}</p>
    </main>
  );
}
