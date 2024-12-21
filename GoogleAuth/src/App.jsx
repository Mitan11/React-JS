import React from "react";
import Home from "./components/Home";
import { useEffect, useState } from "react"
import { auth, provider } from "./config/Firebase";
import { signInWithPopup } from "firebase/auth";
function App() {
  let [data, setData] = useState('');
  let [loading, setLoading] = useState(false);

  function GoogleAuth() {
    setLoading(true);
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res.user);
        setData(res.user);
        localStorage.setItem("user", JSON.stringify(data));
      })
      .catch((err) => {
        console.log(err);
        alert("Authentication failed. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div>
      {!data?<button onClick={GoogleAuth} disabled={loading}>
        {loading ? "Signing in..." : "Google Sign In"}
      </button>:<Home user={data}/>}
    </div>
  );
}

export default App;
