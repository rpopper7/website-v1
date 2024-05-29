import Image from "next/image";
import Link from "next/link";
import DraggableItem from "./components/DraggableItem";

/*homepage
using link component prevents reloading of all
assets in the network tab when going to link */

const ComponentAsProp = () => {
  return (
    <>
      <p>hello</p>
      <p>How are you?</p>
    </>
  );
}

//
//<Link href="/users/">Users</Link>
export default function Home() {
  return (
    <main>
      <DraggableItem slot={<ComponentAsProp />} />
    </main>
  );
}
