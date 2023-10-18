import Link from "next/link";

const Header = () => {
  return (
    <>
      <div style={{ backgroundColor: "#FF0000" }}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/users">Users</Link>
          </li>
          <li>
            <Link href="/notes">Notes</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Header;
