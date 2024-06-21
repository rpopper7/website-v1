//import Image from "next/image";
//import Link from "next/link";
import DraggableArea from "./components/DraggableArea";

const ComponentAsProp1 = () => {
  return (
    <>
      <p>hello</p>
      <p>How are you?</p>
    </>
  );
};

const ComponentAsProp2 = () => {
  return (
    <>
      <p>Resume</p>
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
