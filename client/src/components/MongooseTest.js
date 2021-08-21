import { useEffect, useState } from "react";
const MongooseTest = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tests, setTests] = useState([]);
  useEffect(() => {
    async function pingMongo() {
      const res = await fetch("/api/goose");
      const data = await res.json();
      setTests(data);
      console.log(data);
    }

    pingMongo();
  }, []);

  const submitTest = async (e) => {
    e.preventDefault();
    const input = { email: email, password: password };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    };
    const response = await fetch("/api/goose", options);
    // const data = await response.json();
  };

  return (
    <>
      <form className="flex-col gap-y-2">
        <input
          className="border-2 block"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border-2 block"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={submitTest}
          className="border-2 border-red-500 rounded-md p-1"
        >
          Submit
        </button>
      </form>
      <p>Also, </p>
      <ul>
        {tests.map((test) => (
          <li key={test._id}>
            <p>{test.title}</p>
            <p>{test.message}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default MongooseTest;
