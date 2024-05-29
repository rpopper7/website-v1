import Image from "next/image";
import Link from "next/link";
import DraggableArea from "./components/DraggableArea";

/*homepage
using link component prevents reloading of all
assets in the network tab when going to link */

/*const ComponentAsProp = () => {
  return (
    <>
      <p>hello</p>
      <p>How are you?</p>
    </>
  );
}*/

//
//<Link href="/users/">Users</Link>
//<DraggableArea slot={<ComponentAsProp />} />
export default function Home() {
  return (
    <main>
      <DraggableArea />
    </main>
  );
}
