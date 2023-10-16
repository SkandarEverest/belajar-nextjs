import dynamic from "next/dynamic";

const LayoutComponent = dynamic(() => import("@/layout"));

const Posts = ({ posts }) => {
  return (
    <>
      <LayoutComponent metaTitle="Posts">
        <p>
          <h1>Posts</h1>
        </p>
        {posts.map((item) => {
          console.log(item);
          return (
            <div>
              <p>{item.id}</p>
              <p>
                <b>{item.title} </b>
              </p>
              <p>{item.body}</p>
            </div>
          );
        })}
      </LayoutComponent>
    </>
  );
};
export default Posts;

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return { props: { posts } };
}
