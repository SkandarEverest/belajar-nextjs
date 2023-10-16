import Layout from "@/layout";
import Image from "next/image";
import dynamic from "next/dynamic";

const LayoutComponent = dynamic(() => import("@/layout"));

export default function Main() {
  return (
    <>
      <LayoutComponent metaTitle="Home">
        <h1>Home</h1>
        {/* <img src="/nextlogo.png" alt="vektor" width={400} height={400} /> */}
        {/* <Image src="/nextlogo.png" alt="vektor" width={400} height={400} /> */}
      </LayoutComponent>
    </>
  );
}
