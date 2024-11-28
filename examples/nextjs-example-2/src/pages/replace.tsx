import { useRouter } from "next/router";

const Replace: React.FC = () => {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.replace("/about")}>
      Click me
    </button>
  );
};

export default Replace;
