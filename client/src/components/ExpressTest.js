import { useEffect, useState } from "react";

const ExpressTest = () => {
  const [expressTest, setExpressTest] = useState({});
  useEffect(() => {
    async function pingExpress() {
      const res = await fetch("/api");
      const data = await res.json();
      setExpressTest(data);
      console.log(data);
    }

    pingExpress();
  }, []);

  return <p>Also, {expressTest.message}</p>;
};
export default ExpressTest;