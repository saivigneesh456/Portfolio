/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "⚡ saivignesh ⚡",
  description:
    "A driven individual who thrives on working on complete products that produce impact by developing sustainable and scalable social and technological solutions.",
  og: {
    title: "M.Krishna Sai Vignesh",
    type: "website",
    url: "http://vignesh.com/",
  },
};

//Home Page
const greeting = {
  title: "M.Krishna Sai Vignesh",
  logo_name: "VELTECH",
  nickname: "Sai Vignesh",
  subTitle:
    "Enthusiastic and dedicated graduate with a strong foundation in computer science and programming. Eager to leverage my academic knowledge and passion for technology to kick-start a career as a software engineer. Proficient in languages such as Java, Python, and React, with a focus on developing innovative and efficient solutions. Adept at collaborating in team environments and highly motivated to learn and grow in a fast-paced setting. Excited to contribute fresh ideas and a proactive approach to solving real-world problems through technology.",
  resumeLink:
    "https://drive.google.com/file/d/1X0n7A-fXZW72lOIpw7K15cvUrX2UwNUh/view?usp=sharing",
  portfolio_repository: "https://github.com/saivigneesh456",
  githubProfile: "https://github.com/saivigneesh456",
};

const socialMediaLinks = [
  /* Your Social Media Link */

  {
    name: "Github",
    link: "https://github.com/saivigneesh456",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/msai-vignesh-5bab19198/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@vigneshsai/about",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:sai.9441051886@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/msaivignesh",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/krishnasai.vignesh/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/m_s_a_i_vignesh123/?hl=en",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "PHD Admission Portal",
      fileName: "FullStackImg",
      skills: [
        "⚡ Implemented RESTful APIs using Spring-boot to facilitate communication between the frontend and backend components.
        "⚡ Developed a dynamic and responsive frontend using React to provide a seamless user experience.",
        "⚡ Using spring-security Jwt token techniques, Implemented secure user-authentication and authorization mechanisms to ensure data privacy.",
        "⚡ FIntegrated a database management system using JPA Hibernate MySql to store and retrieve applicant information. ",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Python & ML",
      fileName: "DataScienceImg",
      skills: [
        "⚡ It's also a popular choice for machine learning (ML) due to its simplicity and flexibility.",
        "⚡ Python's extensive library ecosystem, including popular libraries such as NumPy, Pandas, Matplotlib, and Scikit-learn, makes it an excellent choice for ML development.",
        "⚡ Some of the most common ML techniques used in Python include regression, classification, clustering, and neural networks.",
      ],
      softwareSkills: [
        {
          skillName: "Machine Learing",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },

    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/vtu13500/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/sai_9441051886",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/msai_456",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@vtu13500",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/krishsaivignesh",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title:
        "Vel Tech Rangarajan Dr.Sagunthala R&D Institute of Science and Technology,",
      subtitle: "B.Tech. in Computer Science and Engineering",
      logo_path: "iu_logo.png",
      alt_name: "VEL TECH UNVERSITY",
      duration: "2019 - 2023",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://www.veltech.edu.in/",
    },
    {
      title: "Sri Chaitanya Junior College Vijayawada",
      subtitle: "Inter MPC",
      logo_path: "sri.png",
      alt_name: "Sri Chaitanya",
      duration: "2017 - 2019",
      descriptions: [
        "⚡ I have taken varity of courses related to Mathematics is the study of numbers, quantities, and shapes, and is essential to many fields, including science, engineering, and finance.",
        "⚡ Physics is the study of matter, energy, and the fundamental laws of the universe. It helps us understand the behavior of the natural world, from the tiniest particles to the largest structures in the universe.",
        "⚡ Chemistry is the study of matter and its properties, and the chemical reactions that occur between different substances. It helps us understand the composition and behavior of substances, from the smallest molecules to complex chemical systems.",
      ],
      website_link: "https://srichaitanya.net/",
    },
    {
      title: "Montessori English Medium High School",
      subtitle: "10th Class",
      logo_path: "mon.png",
      alt_name: "Montessori School",
      duration: "2016 - 2017",
      descriptions: [
        "⚡ 10th class education is an important milestone for many students as it prepares them for higher education or vocational training and helps them develop essential skills, such as critical thinking, problem-solving, and communication.",
        "⚡ Students who complete 10th class education are often eligible to take standardized tests or entrance exams that are required for college or university admission in many countries.",
        "⚡ Overall, 10th class education is an important step in a student's educational journey, providing a foundation for future academic and career success.",
      ],
      website_link: "http://www.montessoriprimaryschool.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Oracle Certified Associate, Java SE 8 Programmer",
      subtitle: "Oracle",
      logo_path: "oracle.webp",
      certificate_link:
        "https://drive.google.com/file/d/1Yrj-CcK-PZFZqkAbH_dvCO7BTvD3KtFy/view?usp=sharing",
      alt_name: "oracle",
      color_code: "#0C9D5899",
    },
    {
      title: "Machine Learning",
      subtitle: "AWS",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/19C6dYqKQHKnSwgsgk0OsAxtcrhE20wBP/view?usp=sharing",
      alt_name: "AWS Amazon",
      color_code: "#8C151599",
    },
    {
      title: "AWS AI-ML",
      subtitle: "AICTE ",
      logo_path: "aicte.png",
      certificate_link:
        "https://drive.google.com/file/d/1Im1PJohh0BfG21HoQDFmwK0_5liOvG91/view?usp=sharing",
      alt_name: "aicte",
      color_code: "#00000099",
    },
    {
      title: "Blue Prism Foundation Training",
      subtitle: "BLUE PRISM",
      logo_path: "blue.jfif",
      certificate_link:
        "https://drive.google.com/file/d/1ZloCyiaHYEodiVEwBBi0zPJh9HUsAm9V/view?usp=sharing",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Process Mining",
      subtitle: "Celonis",
      logo_path: "cle.png",
      certificate_link:
        "https://drive.google.com/file/d/1dZ2fuN0GaLxGD8UUEu5-bvi8LprsrSlo/view?usp=sharing",
      alt_name: "Celonis",
      color_code: "#1F70C199",
    },
    {
      title: "Cyber Security",
      subtitle: "Palo",
      logo_path: "palo.png",
      certificate_link:
        "https://drive.google.com/file/d/13XxfTWMpQjd6UOTgXW6guep0jJtasSYc/view?usp=sharing",
      alt_name: "Cyber",
      color_code: "#D83B0199",
    },
    {
      title: "CISCO",
      subtitle: "Cisco Academy ",
      logo_path: "cisco.png",
      certificate_link:
        "https://drive.google.com/file/d/1a4FkTK01H8WjXhJdmY_lkifchUdWlUOz/view?usp=sharing",
      alt_name: "cisco",
      color_code: "#ffffff",
    },
    {
      title: "Data Science",
      subtitle: "Hackthon",
      logo_path: "ict.png",
      certificate_link:
        "https://drive.google.com/file/d/1JpGzqCtH7EvobdqhAUwBirzHE0bdrD3P/view?usp=sharing",
      alt_name: "ict",
      color_code: "#00000099",
    },
    {
      title: "Java J2EE",
      subtitle: "WIPRO",
      logo_path: "Wipro.webp",
      certificate_link:
        "https://drive.google.com/file/d/1pjU3RG5kPEQD8_hpYcAddC-YDZNx1x_9/view?usp=sharing",
      alt_name: "wipro",
      color_code: "#ffffff",
    },
    /*{
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },*/
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Work experience refers to the paid employment that you have had in the past. When describing your work experience, it's important to highlight your responsibilities, accomplishments, and any notable achievements. Here's a potential format for describing your work experience.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Full Stack Developer",
          company: "Virtusa",
          company_url: "https://www.virtusa.com/",
          logo_path: "virtusa.webp",
          duration: "June 2022 - Apr 2023",
          location: "Hyderabad, Telangana, Chennai",
          description:
            "Full stack development is a highly sought-after skillset in the tech industry, as it allows developers to work on a wide range of projects and take on a variety of roles within a development team. It requires a strong foundation in computer science and programming principles, as well as a passion for innovation and problem-solving.",
          color: "#0879bf",
        },
        {
          title: "Vel Tech Developer",
          company: "veltech",
          company_url: "https://www.veltech.edu.in/",
          logo_path: "iu_logo.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "I have created complete Android Application for locating classes, Room numbers around people. I have also worked on implementation of algorithms for Detection, Text extraction from text. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        // {
        //   title: "Android Developer",
        //   company: "FreeCopy Pvt. Ltd.",
        //   company_url: "https://www.linkedin.com/company/freecopy/about/",
        //   logo_path: "freecopy_logo.png",
        //   duration: "Nov 2017 - Dec 2017",
        //   location: "Ahmedabad, Gujarat",
        //   description:
        //     "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
        //   color: "#fc1f20",
        // },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Responsive Portfolio Website",
          company: "Vel Tech",
          company_url: "https://www.veltech.edu.in/",
          logo_path: "pf.png",
          duration: "Jan 2023 - Apr 2023",
          location: "Chennai, TamilNadiu",
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
        {
          title: "Java Full Stack Internship",
          company: "Virtusa",
          company_url: "https://www.virtusa.com/",
          logo_path: "virtusa.webp",
          duration: "June 2022 - Current",
          location: "Hyderbad",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "HR - Coordinator Internship",
          company: "Start Up World",
          company_url: "https://startupworld.in/",
          logo_path: "start.PNG",
          duration: "Nov 2022 - Mar 2023",
          location: "Work From Home",
          description:
            "This is Serviced based Company. I have taken the interviews for the interns company which can perform time series analysis.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2021 - April 2022",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2020 - May 2021",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "Mar 2023 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Us On",
    profile_image_path: "abc1.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://www.blogger.com/u/2/blog/posts/6121194333102290860",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Vel Tech Rangarajan Dr.Sagunthala R&D Institute of Science and Technology, Avadi, Chennai, India.",
    avatar_image_path: "",
    location_map_link: "https://goo.gl/maps/8Ky3ZVhXKFtPTr7F7",
  },
  phoneSection: {
    title: "Call Me or Mail ME",
    subtitle: "+917680851886 or sai.9441051886@gmail.com",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
