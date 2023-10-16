import dynamic from "next/dynamic";
import Link from "next/link";

const LayoutComponent = dynamic(() => import("@/layout"));

const Notes = ({ notes }) => {
  console.log("Notes data => ", notes);
  return (
    <>
      <LayoutComponent metaTitle="Notes">
        <p>
          <h1>Notes</h1>
        </p>
        {notes.data.map((item) => (
          <div>
            <Link href={`/notes/${item.id}`}>{item.title}</Link>
          </div>
        ))}
      </LayoutComponent>
    </>
  );
};
export default Notes;

export async function getStaticProps() {
  const res = await fetch("https://paace-f178cafcae7b.nevacloud.io/api/notes");
  const notes = await res.json();
  return { props: { notes }, revalidate: 10 };
}
