import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Hotels..."
      />
    </>
  );
}

export default App;
