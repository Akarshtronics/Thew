import { ReactNode } from 'react';
import { 
  Bot, 
  Code, 
  Brain, 
  FlaskRound as Flask, 
  Cuboid as Cube, 
  Wifi, 
  Plane, 
  Zap, 
  Gamepad2 
} from 'lucide-react';

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
    title: "Robotics",
    description: "Build and program intelligent robots using cutting-edge technology and engineering principles.",
    fullDescription: "Our Robotics program introduces students to the exciting world of autonomous machines, combining mechanical engineering, electronics, and programming to create intelligent systems.",
    overview: "Students learn to design, build, and program robots that can perform complex tasks. Through hands-on projects, they explore sensors, actuators, and control systems while developing problem-solving skills.",
    icon: <Bot className="w-5 h-5 text-primary-500" />,
    image: "https://github.com/akarshpandey/twinc/blob/main/2.jpeg?raw=true",
    detailImage: "https://images.pexels.com/photos/8566525/pexels-photo-8566525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    slug: "robotics",
    learningOutcomes: [
      "Understand robotics fundamentals and mechanical systems",
      "Learn programming for robot control and automation",
      "Explore sensors and actuators for robot interaction",
      "Apply engineering design process to robotics projects",
      "Develop problem-solving skills through hands-on challenges"
    ]
  },
  {
    id: 2,
    title: "Coding",
    description: "Master programming languages and software development through interactive projects and real-world applications.",
    fullDescription: "Our Coding program teaches students essential programming skills using modern languages and development tools, preparing them for careers in technology.",
    overview: "Students learn programming fundamentals through engaging projects, developing logical thinking and computational skills while creating their own applications and games.",
    icon: <Code className="w-5 h-5 text-primary-500" />,
    image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    detailImage: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    slug: "coding",
    learningOutcomes: [
      "Master programming fundamentals and syntax",
      "Develop logical thinking and problem-solving skills",
      "Create interactive applications and games",
      "Learn debugging and testing techniques",
      "Understand software development best practices"
    ]
  },
  {
    id: 3,
    title: "Artificial Intelligence",
    description: "Discover the world of AI through interactive projects that teach machine learning fundamentals.",
    fullDescription: "Our Artificial Intelligence program introduces students to the exciting world of AI and machine learning through interactive projects and hands-on experiences.",
    overview: "This program demystifies artificial intelligence by breaking down complex concepts into accessible learning modules. Students explore how AI systems work, develop their own machine learning models, and apply AI to solve real-world problems.",
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
    ]
  },
  {
    id: 4,
    title: "STEAM Lab",
    description: "Integrate Science, Technology, Engineering, Arts, and Mathematics through creative hands-on projects.",
    fullDescription: "Our STEAM Lab combines Science, Technology, Engineering, Arts, and Mathematics in an integrated learning environment that fosters creativity and innovation.",
    overview: "Students work on interdisciplinary projects that combine technical skills with creative thinking, developing both analytical and artistic abilities through collaborative learning experiences.",
    icon: <Flask className="w-5 h-5 text-primary-500" />,
    image: "https://raw.githubusercontent.com/akarshpandey/twinc/refs/heads/main/3.jpeg",
    detailImage: "https://images.pexels.com/photos/8566525/pexels-photo-8566525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    slug: "steam-lab",
    learningOutcomes: [
      "Integrate multiple disciplines in project-based learning",
      "Develop creative problem-solving approaches",
      "Learn collaborative design and teamwork skills",
      "Apply scientific method to real-world challenges",
      "Create innovative solutions combining art and technology"
    ]
  },
  {
    id: 5,
    title: "3D Designing",
    description: "Master digital modeling and bring ideas to life with state-of-the-art 3D printing technology.",
    fullDescription: "Our 3D Designing program teaches students to transform ideas into digital models and physical objects using industry-standard design software and cutting-edge 3D printing technology.",
    overview: "Students learn the fundamentals of 3D modeling and design while gaining hands-on experience with CAD software and 3D printing technology. Through guided projects, students develop spatial reasoning and design thinking skills.",
    icon: <Cube className="w-5 h-5 text-primary-500" />,
    image: "https://github.com/akarshpandey/twinc/blob/main/11.jpeg?raw=true",
    detailImage: "https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    slug: "3d-designing",
    learningOutcomes: [
      "Master the fundamentals of 3D modeling and computer-aided design (CAD)",
      "Learn to use industry-standard design software",
      "Understand the principles and processes of additive manufacturing",
      "Develop spatial reasoning and geometric thinking skills",
      "Create functional designs that solve real-world problems",
      "Prepare digital files for successful 3D printing"
    ]
  },
  {
    id: 6,
    title: "IoT",
    description: "Connect the physical and digital worlds through Internet of Things projects and smart device development.",
    fullDescription: "Our IoT program teaches students to create connected devices that can communicate over the internet, enabling smart home automation and data collection systems.",
    overview: "Students learn to build and program IoT devices using sensors, microcontrollers, and wireless communication. They explore how everyday objects can be made 'smart' through connectivity and data analysis.",
    icon: <Wifi className="w-5 h-5 text-primary-500" />,
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    detailImage: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    slug: "iot",
    learningOutcomes: [
      "Understand IoT architecture and communication protocols",
      "Learn to program microcontrollers and sensors",
      "Develop skills in wireless communication and networking",
      "Create smart home automation systems",
      "Analyze and visualize sensor data",
      "Explore cybersecurity in connected devices"
    ]
  },
  {
    id: 7,
    title: "Drone",
    description: "Build, program, and pilot unmanned aerial vehicles while learning aerospace engineering principles.",
    fullDescription: "Our Drone program combines aerospace engineering, programming, and piloting skills to teach students about unmanned aerial vehicle technology and applications.",
    overview: "Students learn to build, program, and operate drones while understanding flight dynamics, navigation systems, and real-world applications in various industries.",
    icon: <Plane className="w-5 h-5 text-primary-500" />,
    image: "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    detailImage: "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    slug: "drone",
    learningOutcomes: [
      "Understand principles of flight and aerodynamics",
      "Learn drone assembly and component integration",
      "Master flight control programming and automation",
      "Explore navigation systems and GPS technology",
      "Develop piloting skills and safety protocols",
      "Discover real-world applications in various industries"
    ]
  },
  {
    id: 8,
    title: "Electronics",
    description: "Explore the fundamentals of electronic circuits, components, and digital systems through hands-on experimentation.",
    fullDescription: "Our Electronics program provides a comprehensive introduction to electronic circuits, components, and systems, building a strong foundation for advanced technology projects.",
    overview: "Students learn about electronic components, circuit design, and digital systems through practical experiments and projects, developing skills essential for modern technology development.",
    icon: <Zap className="w-5 h-5 text-primary-500" />,
    image: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    detailImage: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    slug: "electronics",
    learningOutcomes: [
      "Understand basic electronic components and their functions",
      "Learn circuit design and analysis techniques",
      "Develop skills in soldering and circuit assembly",
      "Explore digital logic and microcontroller programming",
      "Create functional electronic projects and prototypes",
      "Apply troubleshooting and debugging techniques"
    ]
  },
  {
    id: 9,
    title: "Scratch",
    description: "Learn programming fundamentals through visual coding with Scratch, creating interactive stories, games, and animations.",
    fullDescription: "Our Scratch program introduces young learners to programming concepts through a visual, block-based coding environment that makes learning fun and accessible.",
    overview: "Students use Scratch's drag-and-drop interface to create interactive projects while learning fundamental programming concepts like loops, conditionals, and variables in an engaging way.",
    icon: <Gamepad2 className="w-5 h-5 text-primary-500" />,
    image: "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    detailImage: "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    slug: "scratch",
    learningOutcomes: [
      "Learn programming fundamentals through visual coding",
      "Understand concepts like loops, conditionals, and variables",
      "Create interactive stories, games, and animations",
      "Develop logical thinking and problem-solving skills",
      "Build confidence in computational thinking",
      "Prepare for advanced programming languages"
    ]
  }
];