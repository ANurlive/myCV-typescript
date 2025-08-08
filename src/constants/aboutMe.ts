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
  "I'm a junior Front-End Developer who recently made the exciting decision to switch careers into tech — and I’ve never been more motivated. After 5+ years working in engineering and administrative roles at KEGOC and Amperel, I realized I wanted more: a job filled with interesting challenges and real growth potential. That’s when I thought about development. Back in university, I took a course in basic programming and algorithms — and I remember how much I enjoyed it. It felt exciting and creative. So now, years later, I’ve decided to bring that old passion to life. In 2024, I earned a spot in the competitive Tech Orda program and received a scholarship voucher to study Front-End Development at EPAM. The course taught me a lot and helped me build a strong foundation in technologies like React, TypeScript, Redux Toolkit, and working with REST APIs. Now, I am eager to join a forward-thinking IT company where I can apply my new skills, continue learning, and grow into a highly valuable team member. I'm confident that the skills I gained in my previous roles — such as responsibility, problem-solving, communication with clients, and leading meetings with colleagues — will definitely be valuable in my new profession.";

export const educationData = [
    {
    date: 2024,
    title: "Front-End Developer",
    text: "LLP EPAM Solutions",
  },
    {
    date: 2016,
    title: "MSc Optimization of developing power supply systems ",
    text: "Peter the Great Saint-Petersburg State Polytechnic University, Institute of Energy and Transport Systems, Electrical Power Systems and Networks. ",
  },
  {
    date: 2012,
    title: "BSc Electric Power Supply ",
    text: "Peter the Great Saint-Petersburg State Polytechnic University, Institute of Energy and Transport Systems, Electrical Power Systems and Networks.",
  },


];

export const experienceData = [
    {
    date: "2023-2024",
    info: {
      company: "LLP Amperel",
      job: "Assistant Project Manager",
      description:
        "As a project manager assistant in the data center design field, I provided full documentation support for projects, assisted with organizational processes, and managed contracts with suppliers and clients. I handled procurement of required materials, maintained inventory records, worked in 1C software, and prepared financial and accounting closing documents.",
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
    date: "2018-2019",
    info: {
      company: "JSC “KEGOC”",
      job: "Clerk",
      description:
        "I carried out executive assignments, participated in negotiations related to the company leadership’s activities, managed internal document workflow, and maintained correspondence with external organizations. I was also responsible for receiving and registering incoming correspondence. Additionally, I have experience in drafting minutes of technical and operational meetings chaired by company management.",
    },
  },


];

export const feedbackData = [
  {
    feedback:
      "I had the pleasure of mentoring Assel during her early front-end development journey at EPAM. From the very beginning, she showed exceptional curiosity, fast learning abilities, and strong motivation to grow. Her willingness to accept feedback and apply it immediately made her stand out among peers. Assel has a solid understanding of React, CSS, and JavaScript fundamentals, and actively contributes to team discussions. I’m confident she will grow into a valuable asset on any front-end team. ",
    author: {
      photoUrl: `${MichaelAvatar}`,
      name: "Michael Johnson, Frontend Developer, Some company",
      citeUrl: "somesite.com",
    },
  },
  {
    feedback:
      "Working with Assel on internal front-end tasks has been a positive experience. She consistently demonstrated responsibility, attention to detail, and persistence when facing coding challenges. I was especially impressed by her ability to troubleshoot layout issues and refactor components for reusability. Despite being at the beginning of her career, she communicates clearly and asks the right questions. I believe she has the potential to become a strong front-end engineer with continued mentorship and real-world practice. ",
    author: {
      photoUrl: `${ElenaAvatar}`,
      name: "Elena Petrova, Software Engineer, Some company",
      citeUrl: "somesite.com",
    },
  },
];
