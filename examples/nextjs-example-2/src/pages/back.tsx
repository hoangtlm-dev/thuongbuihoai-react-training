import { useRouter } from "next/router";

const Back: React.FC = () => {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.back()}>
      Click here to go back
    </button>
  );
};

export default Back;
