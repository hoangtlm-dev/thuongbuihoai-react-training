import Link from "next/link";

const LinkTest: React.FC = () => {
  return (
    <nav>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  );
};

export default LinkTest;
