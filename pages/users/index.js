import Layout from "@/layout";
import { useEffect } from "react";

export default function Users() {
  useEffect((res) => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((res) => console.log("response: ", res))
      .catch((err) => console.log("error: ", err));
  }, []);
  return (
    <>
      <Layout metaTitle="Users" metaDescription="Halaman utama dari menu users">
        <p>Users</p>
      </Layout>
    </>
  );
}
