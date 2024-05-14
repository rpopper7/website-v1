import Image from "next/image";
//import AboutMe from "./AboutMe"; add to html <AboutMe />

export default function Home() {
  return (
    <main className="text-center text-xs">
      <div>
        <div className="my-40">
          <div>Hi, I'm</div>
          <h1 className="text-xl font-extrabold">Rebecca Popper</h1>
          <div>A creative software engineer building interactive digital products.</div>
          <h1 className="text-xl font-extrabold">Welcome to my portfolio!</h1>
          <div>(Keep scrolling)</div>
        </div>
        <div className="mb-40 mx-5">
          <h2 className="uppercase tracking-widest mb-3">About Me</h2>
          <div className="flex gap-x-3 text-justify mb-5">
            <p className="flex-1">Back in 2009, at the age of 12, I taught myself coding in the language ActionScript so I could make Flash Games (RIP, Flash). Flash forward to today, and... </p>
            <p className="flex-1">I am a Software Engineer with a frontend focus, making the internet more interactive and exciting with my 5+ years of professional experience and 15 years of coding passion. During my time as a Software Engineer at ListenFirst, I built data visualizations and overhauled UI/UX systems with ReactJS, JavaScript, and D3.js.</p>
            <p className="flex-1">I love to learn new programming languages and do game development as a hobby. I'm currently learning C# and 3D modeling.</p>
          </div>
        </div>
        <div className="mb-40 mx-5">
          <h2 className="uppercase tracking-widest mb-3">Projects</h2>
          <div className="flex">
            <div className="flex-1">
              <div className="font-bold">Portfolio Website - You are here!</div>
              <p>A fully responsive React app made with NextJS, Tailwind CSS, and TypeScript, from scratch.</p>
            </div>
            <div className="flex-1">
              <a className="font-bold" href="https://github.com/rpopper7/layered-image-manipulator" target="_blank">Image Manipulator</a>
              <p>A fork of the Python Pillow library using PIL to cut up images, reformat them, and save as PNGs - ready to post on different social media platforms.</p>
            </div>
          </div>
        </div>
        <div className="mb-40 mx-5">
          <h2 className="uppercase tracking-widest mb-3"> Contact Me </h2>
          <a className="mr-2" href="https://www.linkedin.com/in/rebeccapopper">LinkedIn</a>
          <a href="https://www.github.com/rpopper7/">GitHub</a>
        </div>
      </div>
      <div className="mb-5 mx-5">
        Designed in <a href="https://www.figma.com/" target="_blank">Figma</a>, coded in NeoVim, built with <a href="https://nextjs.org/" target="_blank">Next.js</a> and <a href="https://www.tailwindcss.com/" target="_blank">Tailwind CSS</a>, deployed with <a href="https://www.vercel.com/" target="_blank">Vercel</a>.
      </div>
    </main>
  );
}
