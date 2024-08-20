export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Tech enthusiast with a passion for development, and a proven track record",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-5",
    imgClassName: "w-full h-full transition duration-500",
    titleClassName: "md:justify-end justify-start",
    img: "./b1.png",
    spareImg: "",
  },

  {
    id: 2,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "absolute bottom-0 right-0 w-[60%] h-[60%]",
    titleClassName: "justify-start",
    img: "./b5.svg",
    spareImg: "./grid.svg",
  },

  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-3",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast, with a keen eye for attention to details",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "./grid.svg",
    spareImg: "./b4.svg",
  },

  {
    id: 5,
    title: "Flexible with adjusting work hours to accommodate different time zones",
    description: "Tip: Give this globe a spin and witness the magic!",
    className: "md:col-span-3 md:row-span-4 lg:row-span-5",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-end",
    img: "",
    spareImg: "",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-3",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center cursor-pointer",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Futuristic Dev Showcase: Next.js",
    des: "Harnessing the power of Next.js and Aceternity UI to deliver a sleek, futuristic portfolio with cutting-edge visuals and seamless functionality",
    img: "./next.png",
    iconLists: ["./re.svg", "./ts.svg", "./tail.svg", "./ace.png", "./next.svg"],
    linkType: "repo",
    link: "https://czampath.github.io/next-framer-portfolio/",
  },
  {
    id: 2,
    title: "Smart Home Automation Server",
    des: "Feature-rich home server with AI-driven surveillance, advanced task scheduling, and seamless control",
    img: "./home-app-2.png",
    iconLists: ["./cpp.png", "./py.png", "./nd.png", "./ar.png", "./sb.png"],
    linkType: "repo",
    link: "https://github.com/czampath",
  },
  {
    id: 3,
    title: "3D low-polygon Stardome generator: THREE.js",
    des: "A module that uses Three.js to mathematically populate a cross-cut Stardome with varying star colors, densities, sizes, and scatter distances.",
    img: "./p1.png",
    iconLists: ["./vt.png", "./js.svg", "./three.svg"],
    linkType: "live",
    link: "https://czampath.github.io/vite-basic-earth/",
  },
  {
    id: 4,
    title: "FANTECH gaming peripherals ARGB CLI",
    des: "This custom command line tool, developed through reverse engineering, controls ARGB lighting for FANTECH RGB peripherals.",
    img: "./p2.png",
    iconLists: ["./py.png", "./ws.png"],
    linkType: "repo",
    link: "https://github.com/czampath/fantech-rgb-cli",
  },
];

export const testimonials = [
  {
    quote:
      "He's a very hard worker and has always willing to go the extra mile for us because he cares about the product he's working on. He's also a really competent developer and, from what I've experienced, is able to come up with solutions/ different ways of implementing development if how we want something to work doesn't fit",
    name: "Sarah Field",
    title: "General Manager - Assembly SMS",
  },
  {
    quote:
      "We just wanted to let you know how happy we are with the changes you have just introduced, in particular in Attendance under 'Registers for Today' where we can now easily see if a register has not been marked, as it displays in red writing. I also love that in the Administration Dashboard, when I search for a child by first name, all children with that first name appear but now they are colour-coded green for pending, red for left and black for current. Such great changes that really help all our Admin staff in the office here. Thanks again!!!!!",
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
    name: "cloudinary",
    img: "./cloud.svg",
    nameImg: "./cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "./app.svg",
    nameImg: "./appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "./host.svg",
    nameImg: "./hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "./s.svg",
    nameImg: "./streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "./dock.svg",
    nameImg: "./dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "./exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "./exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "./exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
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