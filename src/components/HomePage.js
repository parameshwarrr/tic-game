import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  let navigate = useNavigate();
  return (
    <>
      <button
        className="home-button"
        onClick={() => {
          navigate("/playgame");
        }}
      >
        Play Game
      </button>
    </>
  );
}

export default HomePage;
