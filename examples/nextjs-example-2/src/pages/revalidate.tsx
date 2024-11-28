import { useState } from "react";

interface RevalidateProps {
  timestamp: string;
}

const Revalidate: React.FC<RevalidateProps> = ({ timestamp }) => {
  const [result, setResult] = useState("");

  const revalidate = async () => {
    await fetch("/api/revalidate?secret=supersecret");
    setResult("Done. Try to refresh the page");
  };

  return (
    <div className="root">
      <div className="timestamp">{timestamp}</div>
      <div>{result}</div>
      <div className="actions">
        <button
          onClick={() => {
            revalidate();
          }}>
          Revalidate
        </button>
        <a href="/about">Refresh</a>
      </div>
    </div>
  );
};

// This function gets called at build time
export async function getStaticProps() {
  return {
    props: {
      timestamp: new Date().toISOString(),
    },
  };
}

export default Revalidate;
