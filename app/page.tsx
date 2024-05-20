import Image from "next/image";
import Link from "next/link";
import DraggableItem from "./components/DraggableItem";

//homepage
//using link component prevents reloading of all
//assets in the network tab when going to link
export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/users/">Users</Link>
      <DraggableItem text={"test"} />
    </main>
  );
}
