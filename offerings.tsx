import { ReactNode } from 'react';
import { FlaskRound as Flask, Cuboid as Cube, Brain } from 'lucide-react';

interface Offering {
  id: number;
  title: string;
  description: string;
  fullDescription?: string;
  overview?: string;
  icon: ReactNode;
  image: string;
  detailImage?: string;
  slug: string;
  learningOutcomes?: string[];
  modules?: {
    title: string;
    description: string;
    weeks: string;
  }[];
}

export const offerings: Offering[] = [
  {
    id: 1,
    title: "Tinkering Lab",
    description: "Hands-on exploration of electronics, robotics, and mechanical systems for young innovators.",
    fullDescription: "Our Tinkering Lab provides a stimulating environment where students can explore, experiment, and learn through hands-on experiences with electronics, robotics, and mechanical systems.",
    overview: "The Tinkering Lab is a space where students can experiment with real tools and materials to design, build, and test their own creations. Through guided activities and open-ended challenges, students develop practical skills while gaining confidence in their ability to solve problems and bring their ideas to life.",
    icon: <Flask className="w-5 h-5 text-primary-500" />,
    image: "https://raw.githubusercontent.com/akarshpandey/twinc/refs/heads/main/3.jpeg",
    detailImage: "https://images.pexels.com/photos/8566525/pexels-photo-8566525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    slug: "tinkering-lab",
    learningOutcomes: [
      "Understand basic circuitry and electronics principles",
      "Develop mechanical design and construction skills",
      "Learn basic programming for microcontrollers and robotics",
      "Apply the engineering design process to solve real-world problems",
      "Build confidence in technical abilities through hands-on projects"
    ],
    modules: [
      {
        title: "Introduction to Tinkering",
        description: "Explore the Tinkering Lab, learn about tools, materials, and safety procedures. Complete simple maker challenges.",
        weeks: "Week 1"
      },
      {
        title: "Basic Electronics",
        description: "Learn about circuits, components, and how to read simple schematics. Build basic electronic projects.",
        weeks: "Weeks 2-3"
      },
      {
        title: "Mechanical Systems",
        description: "Explore gears, pulleys, levers, and other mechanical elements. Build machines that solve specific challenges.",
        weeks: "Weeks 4-5"
      },
      {
        title: "Introduction to Robotics",
        description: "Combine electronics and mechanical systems to build simple robots. Learn basic programming for automation.",
        weeks: "Weeks 6-8"
      },
      {
        title: "Design Challenges",
        description: "Apply skills to design and build solutions to real-world problems. Work through the engineering design process.",
        weeks: "Weeks 9-11"
      },
      {
        title: "Project Showcase",
        description: "Finalize projects, prepare presentations, and showcase work to peers and parents.",
        weeks: "Week 12"
      }
    ]
  },
  {
    id: 2,
    title: "3D Designing",
    description: "Master digital modeling and bring ideas to life with state-of-the-art 3D printing technology.",
    fullDescription: "Our 3D Designing program teaches students to transform ideas into digital models and physical objects using industry-standard design software and cutting-edge 3D printing technology.",
    overview: "In this program, students learn the fundamentals of 3D modeling and design while gaining hands-on experience with CAD software and 3D printing technology. Through a series of guided projects and creative challenges, students develop the skills needed to conceptualize, design, and fabricate their own unique creations.",
    icon: <Cube className="w-5 h-5 text-primary-500" />,
    image: "https://github.com/akarshpandey/twinc/blob/main/11.jpeg?raw=true",
    detailImage: "",
    slug: "3d-designing",
    learningOutcomes: [
      "Master the fundamentals of 3D modeling and computer-aided design (CAD)",
      "Learn to use industry-standard design software",
      "Understand the principles and processes of additive manufacturing",
      "Develop spatial reasoning and geometric thinking skills",
      "Create functional designs that solve real-world problems",
      "Prepare digital files for successful 3D printing"
    ],
    modules: [
      {
        title: "Fundamentals of 3D Design",
        description: "Learn basic concepts of 3D space, coordinate systems, and design principles. Introduction to CAD software interface.",
        weeks: "Weeks 1-2"
      },
      {
        title: "Basic Modeling Techniques",
        description: "Master primitive shapes, transformations, and boolean operations. Create simple objects from scratch.",
        weeks: "Weeks 3-4"
      },
      {
        title: "Advanced Modeling",
        description: "Learn complex modeling techniques including curves, surfaces, and organic shapes. Create more sophisticated designs.",
        weeks: "Weeks 5-6"
      },
      {
        title: "3D Printing Technology",
        description: "Understand 3D printing processes, materials, and limitations. Learn to prepare models for successful printing.",
        weeks: "Weeks 7-8"
      },
      {
        title: "Functional Design",
        description: "Design objects with moving parts and mechanical functions. Learn to create practical, problem-solving designs.",
        weeks: "Weeks 9-10"
      },
      {
        title: "Capstone Project",
        description: "Apply all skills to design and print a final project that solves a real-world problem or creative challenge.",
        weeks: "Weeks 11-12"
      }
    ]
  },
  {
    id: 3,
    title: "Artificial Intelligence",
    description: "Discover the world of AI through interactive projects that teach machine learning fundamentals.",
    fullDescription: "Our Artificial Intelligence program introduces students to the exciting world of AI and machine learning through interactive projects and hands-on experiences.",
    overview: "This program demystifies artificial intelligence by breaking down complex concepts into accessible learning modules. Students explore how AI systems work, develop their own machine learning models, and apply AI to solve real-world problems. Through a combination of guided instruction and hands-on projects, students gain both theoretical knowledge and practical skills in this cutting-edge field.",
    icon: <Brain className="w-5 h-5 text-primary-500" />,
    image: "https://imgs.search.brave.com/Ikz32wu9V2CXE00GRsgiOk-unYEXDhKWOnBFh7vgVIk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ4/MzIyNDQ4OC9waG90/by9pbnRlcm5ldC10/ZWNobm9sb2d5LWFu/ZC1wZW9wbGVzLW5l/dHdvcmtzLXVzZS1h/aS10by1oZWxwLXdp/dGgtd29yay1haS1s/ZWFybmluZy1vci1h/cnRpZmljaWFsLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1n/YWJxUGYzaFEwSDc0/ZVRQTzktRm04QTgz/WlluMHptT0tNYzVz/WjhlRTdBPQ",
    detailImage: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    slug: "artificial-intelligence",
    learningOutcomes: [
      "Understand fundamental AI concepts and terminology",
      "Explore various types of machine learning algorithms",
      "Develop skills in data collection and preparation for AI systems",
      "Build and train simple machine learning models",
      "Apply AI to solve practical problems",
      "Consider ethical implications of artificial intelligence"
    ],
    modules: [
      {
        title: "Introduction to AI",
        description: "Explore what artificial intelligence is, its history, and current applications. Discuss how AI impacts our daily lives.",
        weeks: "Week 1"
      },
      {
        title: "Fundamentals of Machine Learning",
        description: "Learn about different types of machine learning and how computers learn from data. Introduction to algorithms and models.",
        weeks: "Weeks 2-3"
      },
      {
        title: "Working with Data",
        description: "Understand the importance of data in AI. Learn to collect, clean, and prepare data for machine learning models.",
        weeks: "Weeks 4-5"
      },
      {
        title: "Building Simple AI Models",
        description: "Create and train basic machine learning models. Understand how models make predictions and improve over time.",
        weeks: "Weeks 6-8"
      },
      {
        title: "AI Applications",
        description: "Explore practical applications of AI in various fields. Work on projects applying AI to solve specific problems.",
        weeks: "Weeks 9-10"
      },
      {
        title: "Ethics and the Future of AI",
        description: "Discuss ethical considerations in AI development and deployment. Explore potential future developments in the field.",
        weeks: "Weeks 11-12"
      }
    ]
  }
];