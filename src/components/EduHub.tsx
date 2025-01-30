import { Stack } from "../blocks/Components/Stack/Stack";
import { ProjectSection } from "./ProjectSection";

type SectionType = "text" | "list" | "features";

export function EduHub() {
  const projectDetails = [
    {
      Title: "EduHub - Learning Management System",
      images: [
        { id: 1, img: "/student.png", alt: "EduHub Dashboard" },
        { id: 2, img: "/student2.png", alt: "Student Portal" },
        { id: 3, img: "/student3.png", alt: "Course Management" },
        { id: 4, img: "/student4.png", alt: "Assignment View" },
      ],
      Overview:
        "A comprehensive Learning Management System designed to facilitate online education. EduHub provides a robust platform for course management, student engagement, and academic progress tracking, making remote learning more accessible and efficient.",
      Technologies: [
        "Frontend: React with TypeScript",
        "Backend: Node.js with Express",
        "Database: MongoDB",
        "Authentication: JWT",
        "UI Framework: Material-UI",
        "State Management: Redux Toolkit",
        "File Storage: AWS S3",
      ],
      KeyFeatures: [
        {
          title: "Course Management",
          points: [
            "Interactive course creation and management",
            "Rich text editor for course content",
            "File upload and management system",
          ],
        },
        {
          title: "Student Engagement",
          points: [
            "Real-time discussion forums",
            "Assignment submission system",
            "Progress tracking dashboard",
          ],
        },
        {
          title: "Assessment Tools",
          points: [
            "Multiple quiz formats",
            "Automated grading system",
            "Detailed performance analytics",
          ],
        },
      ],
      Architecture: {
        Frontend: [
          "Component-based architecture with React",
          "Type-safe development with TypeScript",
          "Responsive design with Material-UI",
          "State management with Redux Toolkit",
        ],
        Backend: [
          "RESTful API architecture",
          "JWT-based authentication",
          "MongoDB for data persistence",
          "AWS S3 for file storage",
        ],
      },
      Challenges: [
        "Implementing real-time features for discussion forums",
        "Optimizing file upload and storage system",
        "Ensuring seamless mobile responsiveness",
        "Managing complex state across multiple user roles",
      ],
    },
  ];

  const project = projectDetails[0];
  const sections = [
    {
      title: "Overview",
      content: project.Overview,
      type: "text" as SectionType,
    },
    {
      title: "Technologies",
      content: project.Technologies,
      type: "list" as SectionType,
    },
    {
      title: "Key Features",
      content: project.KeyFeatures,
      type: "features" as SectionType,
    },
    {
      title: "Architecture",
      content: [
        {
          title: "Frontend",
          points: project.Architecture.Frontend,
        },
        {
          title: "Backend",
          points: project.Architecture.Backend,
        },
      ],
      type: "features" as SectionType,
    },
    {
      title: "Challenges",
      content: project.Challenges,
      type: "list" as SectionType,
    },
  ];

  return (
    <main className="max-w-7xl mx-auto sm:text-sm md:px-16 px-6 lg:mt-32 mt-20 mb-20">
      <h1 className="font-incognito text-5xl font-bold pb-8">
        {project.Title}
      </h1>
      <div className="p-5 bg-zinc-500 flex items-center rounded-3xl image-blur-corner">
        <Stack
          randomRotation={false}
          sensitivity={180}
          sendToBackOnClick={true}
          cardDimensions={{
            width:
              window.innerWidth < 640
                ? 300 // mobile
                : window.innerWidth < 1024
                  ? 600 // tablet
                  : 1000, // desktop
            height:
              window.innerWidth < 640
                ? 200 // mobile
                : window.innerWidth < 1024
                  ? 400 // tablet
                  : 600, // desktop
          }}
          cardsData={project.images}
        />
      </div>
      {sections.map((section, index) => (
        <ProjectSection
          key={index}
          title={section.title}
          content={section.content}
          type={section.type}
        />
      ))}
    </main>
  );
}
