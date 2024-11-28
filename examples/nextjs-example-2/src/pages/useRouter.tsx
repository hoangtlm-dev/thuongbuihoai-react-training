import { useRouter } from "next/router";

interface ActiveLinkProps {
  href: string;
}

const ActiveLink: React.FC<ActiveLinkProps> = ({ href }) => {
  const router = useRouter();
  const style = {
    marginRight: 10,
    color: router.asPath === href ? "black" : "red",
  };

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} style={style}>
      This is link
    </a>
  );
};

export default ActiveLink;
