import { Portfolio } from '../types/portfolio';

export const users: Record<string, Portfolio> = {
  "aayush-sharma": {
    basics: {
      name: "Aayush Sharma",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400",
      url: "https://www.linkedin.com/in/aayush-sharma",
      headline: "Software Engineer | Data Enthusiast | Open Source Contributor",
      location: {
        city: "San Francisco",
        state: "California",
        country: "USA"
      },
      summary: "Innovative software engineer with a strong background in data analysis and machine learning.",
      contactInfo: {
        email: "aayush.sharma@example.com",
        phone: "+1234567890",
        website: "https://github.com/aayush-sharma"
      }
    },
    experience: [{
      title: "Senior Software Engineer",
      company: { name: "Tech Corp", url: "https://example.com" },
      location: "San Francisco, USA",
      duration: { start: "2021-01", end: "Present" },
      description: "Leading frontend development team",
      highlights: ["Increased performance by 40%", "Led team of 5 developers"]
    }],
    education: [{
      degree: "Master of Science",
      fieldOfStudy: "Computer Science",
      institution: { name: "Stanford University", url: "https://stanford.edu" },
      location: "Stanford, USA",
      duration: { start: "2019-09", end: "2021-06" },
      gpa: "3.9/4.0",
      activities: ["AI Research Lab", "Robotics Club"]
    }],
    skills: [
      { name: "Languages", items: ["JavaScript", "Python", "Java"] },
      { name: "Frontend", items: ["React", "Vue", "Angular"] }
    ],
    projects: [{
      title: "AI Image Generator",
      description: "Created an AI-powered image generation tool",
      url: "https://github.com/aayush-sharma/ai-gen",
      technologies: ["Python", "TensorFlow", "React"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800"
    },
    {
      title: "Portfolio Platform",
      description: "Built a multi-user portfolio platform",
      url: "https://github.com/aayush-sharma/portfolio",
      technologies: ["React", "TypeScript", "Tailwind"],
      image: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?w=800"
    }],
    certifications: [{
      name: "AWS Solutions Architect",
      issuingOrganization: "Amazon",
      issueDate: "2023-01",
      expirationDate: "2026-01",
      credentialUrl: "https://aws.amazon.com/certification",
      image: "https://images.unsplash.com/photo-1647166545674-ce28ce93bdca?w=800"
    }]
  },
  "sarah-chen": {
    basics: {
      name: "Sarah Chen",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      url: "https://www.linkedin.com/in/sarah-chen",
      headline: "UX Designer | Product Strategist",
      location: {
        city: "New York",
        state: "New York",
        country: "USA"
      },
      summary: "Passionate UX designer with 5+ years of experience in creating user-centered digital products.",
      contactInfo: {
        email: "sarah.chen@example.com",
        phone: "+1987654321",
        website: "https://github.com/sarah-chen"
      }
    },
    experience: [{
      title: "Senior UX Designer",
      company: { name: "Design Studio", url: "https://example.com" },
      location: "New York, USA",
      duration: { start: "2020-03", end: "Present" },
      description: "Leading design team for enterprise products",
      highlights: ["Redesigned core product", "Improved user satisfaction by 60%"]
    }],
    education: [{
      degree: "Bachelor of Fine Arts",
      fieldOfStudy: "Interactive Design",
      institution: { name: "RISD", url: "https://risd.edu" },
      location: "Providence, USA",
      duration: { start: "2015-09", end: "2019-05" },
      gpa: "3.8/4.0",
      activities: ["Design Club President", "Student Council"]
    }],
    skills: [
      { name: "Design", items: ["Figma", "Sketch", "Adobe XD"] },
      { name: "Research", items: ["User Testing", "A/B Testing", "Analytics"] }
    ],
    projects: [{
      title: "Healthcare App Redesign",
      description: "Complete redesign of a major healthcare provider's mobile app",
      url: "https://behance.net/sarah-chen",
      technologies: ["Figma", "ProtoPie", "Principle"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800"
    }],
    certifications: [{
      name: "Google UX Design",
      issuingOrganization: "Google",
      issueDate: "2022-06",
      expirationDate: null,
      credentialUrl: "https://coursera.org/verify",
      image: "https://images.unsplash.com/photo-1573167243872-43c6433b9d40?w=800"
    }]
  }
};