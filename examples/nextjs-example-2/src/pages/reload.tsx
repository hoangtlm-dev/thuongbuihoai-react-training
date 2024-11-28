import { useRouter } from "next/router";

const Reload: React.FC = () => {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.reload()}>
      Click here to reload
    </button>
  );
};

export default Reload;
