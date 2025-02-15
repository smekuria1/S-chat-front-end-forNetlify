import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";
import JoinBackground from "../JoinBackground/JoinBackground";

export default function SignIn() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <>
      <div className="joinOuterContainer">
        <JoinBackground />
        <div className="joinInnerContainer">
          <h1 className="heading">Welcome to S-chat</h1>
          <div>
            <input
              placeholder="Name"
              className="joinInput"
              type="text"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <input
              placeholder="Room"
              className="joinInput mt-20"
              type="text"
              onChange={(event) => setRoom(event.target.value)}
            />
          </div>
          <Link
            onClick={(e) => (!name || !room ? e.preventDefault() : null)}
            to={`/chat?name=${name}&room=${room}`}
          >
            <button className={"button mt-20"} type="submit">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
