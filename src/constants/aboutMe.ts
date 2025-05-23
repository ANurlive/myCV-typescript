import avatar from "../assets/images/myPhoto.jpg";
import MichaelAvatar from "../assets/images/MichaelJohnson-avatar.jpg";
import ElenaAvatar from "../assets/images/ElenaPetrova-avatar.jpg";

export const myData = {
  name: "Kozhbanova Assel",
  title: "Front-End Developer",
  description:
    "Anyone who has never made a mistake has never tried anything new. — Albert Einstein",
  avatar: avatar,
};

export const aboutMe =
  "My name is Assel. I hold a degree in Power Engineering and have worked in three different roles — from a Production and Technical Service Engineer to a Project Manager Assistant in the field of data center design. These roles helped me develop strong systems thinking, discipline, and a sense of responsibility. However, over time I realized that I was missing a sense of engagement and the opportunity to see tangible results from my work. That’s what led me to IT. I remembered how much I enjoyed programming back in university and decided to give it a real try. With support from the government and EPAM, I completed a front-end development course where I studied HTML, CSS, JavaScript, React, Git, API integration, and much more. It was an intensive journey filled with practical tasks, mentorship, and real-world cases. Now, I feel confident navigating modern front-end tools, working with code, understanding existing solutions, and building interfaces of my own. I continue to grow and gain hands-on experience. If you’d like to get to know me better — feel free to scroll down the page. And if we might be a good fit — don’t hesitate to get in touch. I’d be happy to connect.";

export const educationData = [
  {
    date: 2012,
    title: "BSc Electric Power Supply ",
    text: "Peter the Great Saint-Petersburg State Polytechnic University, Institute of Energy and Transport Systems, Electrical Power Systems and Networks.",
  },
  {
    date: 2016,
    title: "MSc Optimization of developing power supply systems ",
    text: "Peter the Great Saint-Petersburg State Polytechnic University, Institute of Energy and Transport Systems, Electrical Power Systems and Networks. ",
  },
  {
    date: 2024,
    title: "Front-End Developer",
    text: "LLP EPAM Solutions",
  },
];

export const experienceData = [
  {
    date: "2018-2019",
    info: {
      company: "JSC “KEGOC”",
      job: "Clerk",
      description:
        "I carried out executive assignments, participated in negotiations related to the company leadership’s activities, managed internal document workflow, and maintained correspondence with external organizations. I was also responsible for receiving and registering incoming correspondence. Additionally, I have experience in drafting minutes of technical and operational meetings chaired by company management.",
    },
  },
  {
    date: "2019-2022",
    info: {
      company: "JSC “KEGOC”",
      job: "Engineer of Production and technical department",
      description:
        "I monitored the implementation of the repair plan for the branch’s electrical grid infrastructure, including substations, power lines, transport, and facilities. I participated in budget planning for equipment repairs, prepared performance reports, and oversaw the branch’s rationalization and innovation activities. I also handled correspondence with external organizations regarding the issuance and approval of technical specifications and related documentation.",
    },
  },
  {
    date: "2023-2024",
    info: {
      company: "LLP Amperel",
      job: "Assistant Project Manager",
      description:
        "As a project manager assistant in the data center design field, I provided full documentation support for projects, assisted with organizational processes, and managed contracts with suppliers and clients. I handled procurement of required materials, maintained inventory records, worked in 1C software, and prepared financial and accounting closing documents.",
    },
  },
];

export const feedbackData = [
  {
    feedback:
      "I had the pleasure of mentoring Assel during her early front-end development journey at EPAM. From the very beginning, she showed exceptional curiosity, fast learning abilities, and strong motivation to grow. Her willingness to accept feedback and apply it immediately made her stand out among peers. Assel has a solid understanding of React, CSS, and JavaScript fundamentals, and actively contributes to team discussions. I’m confident she will grow into a valuable asset on any front-end team. ",
    author: {
      photoUrl: `${MichaelAvatar}`,
      name: "Michael Johnson, Frontend Developer, EPAM Systems",
      citeUrl: "somesite.com",
    },
  },
  {
    feedback:
      "Working with Assel on internal front-end tasks has been a positive experience. She consistently demonstrated responsibility, attention to detail, and persistence when facing coding challenges. I was especially impressed by her ability to troubleshoot layout issues and refactor components for reusability. Despite being at the beginning of her career, she communicates clearly and asks the right questions. I believe she has the potential to become a strong front-end engineer with continued mentorship and real-world practice. ",
    author: {
      photoUrl: `${ElenaAvatar}`,
      name: "Elena Petrova, Software Engineer, EPAM Systems",
      citeUrl: "somesite.com",
    },
  },
];
