import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Code } from "lucide-react";
import { motion } from "framer-motion";
import { FaceRecoProject } from "./FaceRecoProject";
import { EduHub } from "./EduHub";

export function ProjectDetails() {
  const { projectId } = useParams<{ projectId: string }>();

  const projects = {
    "facetrack-pro": {
      name: "FaceTrack Pro",
      description: "Smart attendance tracking powered by facial recognition technology",
      longDescription: "FaceTrack Pro is an innovative attendance management system that leverages advanced facial recognition technology to automate and streamline the attendance process. Built with modern web technologies, it provides real-time tracking, comprehensive reporting, and seamless integration with existing systems.",
      technologies: ["React", "TypeScript", "Python", "OpenCV", "TensorFlow", "Node.js", "MongoDB"],
      features: [
        "Real-time facial recognition",
        "Automated attendance tracking",
        "Comprehensive reporting dashboard",
        "Multi-user support",
        "Data export capabilities",
        "Security and privacy focused"
      ],
      timeline: "September 2024 - Present",
      team: "Solo Project",
      status: "In Development",
      component: FaceRecoProject,
      github: "https://github.com/Rappykyun/FaceTrack-Pro",
      demo: null
    },
    "eduhub": {
      name: "EduHub",
      description: "All-in-one platform for student resources and learning materials",
      longDescription: "EduHub is a comprehensive educational platform designed to centralize student resources, learning materials, and academic tools. It provides an intuitive interface for students to access course materials, submit assignments, track progress, and collaborate with peers.",
      technologies: ["React", "TypeScript", "Firebase", "Material-UI", "Node.js", "Express"],
      features: [
        "Course material management",
        "Assignment submission system",
        "Progress tracking",
        "Student collaboration tools",
        "Resource library",
        "Mobile-responsive design"
      ],
      timeline: "August 2024 - October 2024",
      team: "Solo Project",
      status: "Completed",
      component: EduHub,
      github: "https://github.com/Rappykyun/EduHub",
      demo: "https://eduhub-demo.vercel.app"
    }
  };

  const project = projectId ? projects[projectId as keyof typeof projects] : null;

  if (!project) {
    return (
      <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20 mb-20">
        <div className="text-center">
          <h1 className="font-incognito text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">
            The project you're looking for doesn't exist.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  const ProjectComponent = project.component;

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20 mb-20">
      {/* Breadcrumb Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </motion.nav>

      {/* Project Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
          <div>
            <h1 className="font-incognito text-4xl lg:text-5xl font-bold mb-4">
              {project.name}
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-6 max-w-3xl">
              {project.longDescription}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                <Github className="w-4 h-4" />
                View Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Project Meta Information */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="flex items-center gap-3 p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg">
            <Calendar className="w-5 h-5 text-green-600 dark:text-green-400" />
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Timeline</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{project.timeline}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg">
            <Users className="w-5 h-5 text-green-600 dark:text-green-400" />
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Team</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{project.team}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg">
            <Code className="w-5 h-5 text-green-600 dark:text-green-400" />
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Status</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{project.status}</p>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-8">
          <h3 className="font-incognito text-lg font-semibold mb-4">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <h3 className="font-incognito text-lg font-semibold mb-4">Key Features</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {project.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-zinc-700 dark:text-zinc-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Project Component */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <ProjectComponent />
      </motion.section>
    </main>
  );
}
