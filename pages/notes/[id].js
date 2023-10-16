import dynamic from "next/dynamic";

const LayoutComponent = dynamic(() => import("@/layout"));
const DetailNotes = ({ notes }) => {
  let data = notes.data;

  return (
    <>
      <LayoutComponent metaTitle="Detail Notes">
        <div>
          <p>title: {data.title}</p>
          <p>desc: {data.description}</p>
          <p>update at: {data.updated_at}</p>
        </div>
      </LayoutComponent>
    </>
  );
};
export default DetailNotes;

export async function getStaticPaths() {
  const res = await fetch("https://paace-f178cafcae7b.nevacloud.io/api/notes");
  const notes = await res.json();

  const paths = notes.data.map((item) => ({
    params: {
      id: item.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch(
    `https://paace-f178cafcae7b.nevacloud.io/api/notes/${id}`
  );
  const notes = await res.json();
  return { props: { notes }, revalidate: 10 };
}
