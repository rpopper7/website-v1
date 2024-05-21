import Image from "next/image";
import Link from "next/link";
import DraggableItem from "./components/DraggableItem";

/*homepage
using link component prevents reloading of all
assets in the network tab when going to link */

const ComponentAsProp = () => {
  return (
    <p>hello</p>
  );
}

export default function Home() {
  return (
    <main>
      <Link href="/users/">Users</Link>
      <DraggableItem slot={<ComponentAsProp />} />
    </main>
  );
}
