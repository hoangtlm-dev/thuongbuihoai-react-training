import { useEffect } from "react";
import { useRouter } from "next/router";

// Current URL is '/'
function Page() {
  const router = useRouter();

  useEffect(() => {
    // Always do navigations after the first render
    router.push("/?posts=1", "/about", { shallow: true });
  }, []);

  useEffect(() => {
    // The counter changed!
  }, [router.query.counter]);
}

export default Page;
