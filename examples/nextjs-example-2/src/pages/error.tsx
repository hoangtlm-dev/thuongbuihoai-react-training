import Error from "next/error";
import { BASE_URL } from "@src/constants/url";

interface ErrorPageProps {
  errorCode: any;
  stars: string;
}
export const getServerSideProps = async () => {
  const res: any = await fetch(BASE_URL);
  const errorCode = res.ok ? false : res.statusCode;
  const json = await res.json();

  return {
    props: { errorCode, stars: json.stargazers_count },
  };
};

const ErrorPage: React.FC<ErrorPageProps> = ({ errorCode, stars }) => {
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  return <div>Next stars: {stars}</div>;
};

export default ErrorPage;
