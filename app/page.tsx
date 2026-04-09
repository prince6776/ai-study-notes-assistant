"use client";

import { useState } from "react";

export default function Home() {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function ask() {

    const res = await fetch("/api/ask", {
      method: "POST",
      body: JSON.stringify({ question }),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await res.json();

    setAnswer(data.answer);
  }

  return (

    <main style={{padding:"40px"}}>

      <h1>
        AI Study Notes Assistant
      </h1>

      <input
        style={{
          border:"1px solid black",
          padding:"10px",
          width:"300px",
          marginTop:"20px"
        }}
        value={question}
        onChange={(e)=>setQuestion(e.target.value)}
        placeholder="Ask question..."
      />

      <br/>

      <button
        onClick={ask}
        style={{
          marginTop:"10px",
          padding:"10px"
        }}
      >
        Ask AI
      </button>

      <p style={{marginTop:"20px"}}>
        {answer}
      </p>

    </main>

  );

} 