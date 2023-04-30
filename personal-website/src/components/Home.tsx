import React from "react";
import Typewriter from "typewriter-effect";

function Home() {
  const [typing, setTyping] = React.useState("");
  var txt = "Hello, I am Noel Gonzalez. I am a Freelance Web Developer.";
  React.useEffect(() => {
    typeWriter();
  });

  function typeWriter() {
    for (let i = 0; i < txt.length; i++) {
      setTyping(typing + txt.charAt(i));
      setTimeout(() => {}, 50);
    }
  }

  return (
    <section className="home">
      <h1 id="home">
        <Typewriter
          options={{
            strings: [txt],
            autoStart: true,
            loop: true,
            delay: 30,
          }}
        />
      </h1>
    </section>
  );
}

export default Home;
