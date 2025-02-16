import { useState } from "react";
import { Link } from "@mui/material";

{
  /* 
    1- Grid 
      1.1 <Grid continer></Grid>
      1.2 <Grid item></Grid>
    2- Typograpy
    3- Box
    4- TextField
    5- Button
    */
}

export async function getServerSideProps() {
  try {
    const response = await fetch("https://api.genratr.com/?length=16&uppercase&lowercase&special&numbers");
    if (!response.ok) {
      throw new Error("failed to fetch data");
    }
    const data = await response.json();
    const passwdEx = data.password;
    return {
      props: { passwdEx },
    };
  } catch (error) {
    console.error("error fetchind work:", error);
    return {
      props: { passwdEx: null },
    };
  }
}

export default function Home({ passwdEx }) {
  const [reqs, setReqs] = useState("");
  return (
    <>
      <div>
        <p>Meet the Requirements</p>
        <input
          type="text"
          name="password"
          id="password"
          placeholder={passwdEx ? passwdEx : `try something strong`}
        />
        <button type="submit">Check</button>
        <Link
          href="https://www.github.com/leidorf"
          target="_blank"
        >
          github
        </Link>
      </div>
    </>
  );
}
