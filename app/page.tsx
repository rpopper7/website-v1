//import Image from "next/image";
//import Link from "next/link";
import DraggableArea from "./components/DraggableArea";

const ComponentAsProp1 = () => {
  return (
    <>
      <p className="italic">Hi, I'm Rebecca. A software engineer.</p>
      <p className="italic">This website is a Work-In-Progress.</p>
    </>
  );
};

const ComponentAsProp2 = () => {
  return (
    <>
      <p className="font-bold text-35 p-20">
        Feel free to drag this box around.
      </p>
    </>
  );
};

//<Link href="/users/">Users</Link> - prevents reloading of all assets in network tab when going to link
export default function Home() {
  return (
    <main>
      <DraggableArea slots={[<ComponentAsProp1 />, <ComponentAsProp2 />]} />
    </main>
  );
}
