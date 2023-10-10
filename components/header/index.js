import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="text-3xl font-bold underline">
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
        </ul>
      </div>
    </>
  );
};
export default Header;
