import { useState, useEffect } from "react";
export default function Main() {
  return (
    <section class="about content-wrapper" id="about">
      <h2>About Me</h2>

      <img
        class="aboutImg"
        src="me2.png"
        alt="picture of a black boy sitting infront of the computer"
      />

      <p>
        Hello World! I'm a Full-Stack Web Developer passionate about building
        modern and responsive websites that are easy to use and look great on
        all devices. I am always looking for new challenges and opportunities to
        learn and grow as a developer.
      </p>
    </section>
  );
}
