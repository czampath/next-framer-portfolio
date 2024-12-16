export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Tech enthusiast with a passion for development, and with a proven track record",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-5 md:h-full h-[60vw]",
    imgClassName: "w-full h-full transition duration-500 ",
    titleClassName: "md:justify-end justify-start",
    img: "./b1-alt.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "Over 6 years of experience as a versatile Web Developer",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "absolute bottom-0 right-0 w-[60%] h-[60%]",
    titleClassName: "justify-start",
    img: "./b5.svg",
    spareImg: "./grid.svg",
  },

  {
    id: 3,
    title: "My tech stack",
    description: "On a constant hunt to gain new knowledge",
    className: "lg:col-span-2 md:col-span-3 md:row-span-3",
    imgClassName: "",
    titleClassName: "justify-end flex flex-col-reverse",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "With a keen eye for attention to details",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 cursor-none",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "./grid.svg",
    spareImg: "./b4.svg",
  },

  {
    id: 5,
    title: "Flexible with adjusting work hours to accommodate different time zones",
    description: "Tip: Give this globe a spin and see what happens!",
    className: "md:col-span-3 md:row-span-4 lg:row-span-5",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-end",
    img: "",
    spareImg: "",
  },
  {
    id: 6,
    title: "Feel free to get in touch!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-3",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center cursor-pointer",
    img: "",
    spareImg: "",
  },
  {
    id: 7,
    title: "Let AI speak on my behalf (Experimental)",
    description: "Wanna find out more about me?",
    className: "md:col-span-5 row-span-4 md:row-span-5",
    imgClassName: "",
    titleClassName: "justify-start md:max-w-full w-full text-nowrap text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    imgClassName: "",
    title: "Star Citizen Routes Coordinator",
    des: "Collect items across the verse, with the ultimate route revealed in a sleek design powered by Next.js 14.",
    img: "/ez-routes.png",
    iconLists: [ "./next.svg", "./ts.svg", "./tail.svg", "./ace.png","./three.svg"],
    linkType: "live",
    link: "https://sc-ez-routes.vercel.app/",
  },
  {
    id: 2,
    imgClassName: "min-w-[350%] md:min-w-[250%] top-[20%]",
    title: "GitHub Contribution Animator",
    des: "Embed real-time GitHub contribution animations WITHOUT the need for scheduled GitHub Actions",
    img: "https://cz-git-anim.vercel.app/api/animated-commits?username=czampath&isDark=true&style=hue-ripple&duration=1.5",
    iconLists: ["./nd.png", "./js.svg", "./vc.ico"],
    linkType: "live",
    link: "https://cz-git-anim.vercel.app/",
  },
  {
    id: 3,
    imgClassName: "",
    title: "FANTECH gaming peripherals ARGB CLI",
    des: "This custom command line tool, developed through reverse engineering, controls ARGB lighting for FANTECH RGB peripherals.",
    img: "/p2.png",
    iconLists: ["./py.png", "./ws.png"],
    linkType: "repo",
    link: "https://github.com/czampath/fantech-rgb-cli",
  },
  {
    id: 4,
    imgClassName: "",
    title: "Smart Home Automation Server",
    des: "Feature-rich home server with AI-driven surveillance, advanced task scheduling, and seamless control",
    img: "/home-app-2.png",
    iconLists: ["./cpp.png", "./py.png", "./nd.png", "./ar.png", "./sb.png"],
    linkType: "request",
    link: "https://forms.gle/pigugHfE4S8Q7aZb8",
  },
  {
    id: 5,
    imgClassName: "",
    title: "3D low-polygon Stardome generator: THREE.js",
    des: "A module that uses Three.js to mathematically populate a cross-cut Stardome with varying star colors, densities, sizes, and scatter distances.",
    img: "/p1.png",
    iconLists: ["./vt.png", "./js.svg", "./three.svg"],
    linkType: "live",
    link: "https://czampath.github.io/vite-basic-earth/",
  },
];

export const testimonials = [
  {
    quote:
      "He's a very hard worker and has always willing to go the extra mile for us because he cares about the product he's working on. He's also a really competent developer and, from what I've experienced, is able to come up with solutions/ different ways of implementing development if how we want something to work doesn't fit",
    name: "Sarah Field",
    title: "Project Manager - Assembly SMS",
  },
  {
    quote:
      "We just wanted to let you know how happy we are with the changes you have just introduced, in particular [ in Attendance under 'Registers for Today' where we can now easily see if a register has not been marked, as it displays in red writing. I also love that in the Administration Dashboard, when I search for a child by first name, all children with that first name appear but now they are colour-coded green for pending, red for left and black for current. ] Such great changes that really help all our Admin staff in the office here. Thanks again!!!!!",
    name: "Lisa Laurence ",
    title: "Administrator at Tamahere Primary NZ",
  },
  {
    quote:
      "We would have loved to bring you over and employ you to look after the software. You have been the best programmer.",
    name: "Cindy Brown",
    title: "CEO - Assembly SMS",
  },

];

export const companies = [
  {
    id: 1,
    name: "assembly",
    img: "./assembly.png",
    nameImg: "./assembly-alt.png",
  },
  {
    id: 2,
    name: "mikipro",
    img: "./mikipro.png",
    nameImg: "./mikipro-alt.png",
  },
  {
    id: 3,
    name: "moenz",
    img: "./moenz.png",
    nameImg: "./moenz-alt.png",
  },
  {
    id: 4,
    name: "allion",
    img: "./allion.png",
    nameImg: "./allion-alt.png",
  },
  {
    id: 5,
    name: "kindo",
    img: "./kindo.png",
    nameImg: "./kindo-alt.png",
  },
  {
    id: 6,
    name: "getmyrx",
    img: "",
    nameImg: "./getmyrx-alt.png",
  },
];

export const workExperience = [
  {
    id: 1,
    company:"kindo",
    title: "Frontend Developer",
    desc: "Developed an MVP shopping UI for the public community in NZ enabling seamless experiences for both registered and non-registered users",
    className: "md:col-span-2",
    thumbnail: "./exp1.svg",
  },
  {
    id: 2,
    company:"assembly",
    title: "Senior Software Engineer",
    desc: "Optimized system performance and revamped features using various technologies, reducing latency by 91% and enhancing throughput and user experience",
    className: "md:col-span-2",
    thumbnail: "./exp2.svg",
  },
  {
    id: 3,
    company:"allion",
    title: "Team Lead",
    desc: "Led a high-performing team, ensuring timely delivery of features, integrations, and bug fixes while mentoring and fostering collaboration",
    className: "md:col-span-2", 
    thumbnail: "./exp3.svg",
  },
  {
    id: 4,
    company:"assembly",
    title: "Software Engineer",
    desc: "Engineered an dynamic and interactive portal for students, caregivers, and staff with an event-driven newsfeed to boost engagement",
    className: "md:col-span-2",
    thumbnail: "./exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "./git.svg",
    url: "https://github.com/czampath"
  },
  {
    id: 2,
    img: "./link.svg",
    url: "https://www.linkedin.com/in/chathuranga-sampath-949323b2/"
  },
];