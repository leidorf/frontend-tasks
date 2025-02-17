import { useEffect, useState } from "react";
import { Button, colors, Link, TextField } from "@mui/material";

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
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  const weakUsernames = ["admin", "root", "tomcat", "user", "guest", "test", "info", "administrator"];
  const [rnd1] = useState(Math.floor(Math.random() * 100));
  const [rnd2] = useState(Math.floor(Math.random() * 100));

  const [reqs, setReqs] = useState([
    { id: 1, state: (password) => password.length >= 16, text: "en az 16 karakter olmalı", isTrue: false },
    { id: 2, state: (password) => password.match(/[A-Z]/), text: "büyük harf içermeli", isTrue: false },
    { id: 3, state: (password) => password.match(/\d/), text: "harf içermeli", isTrue: false },
    { id: 4, state: (password) => regex.test(password), text: "özel karakter içermeli", isTrue: false },
    { id: 5, state: (password) => password.includes("yavuzlar"), text: "'yavuzlar' içermeli", isTrue: false },
    {
      id: 6,
      state: (password) => weakUsernames.some((uname) => password.includes(uname)),
      text: "en çok kullanılan kullanıcı adlarından birini içermeli",
      isTrue: false,
    },
    { id: 7, state: (password) => password.includes(67), text: "zonguldak plaka kodunu içermeli", isTrue: false },
    { id: 8, state: (password) => password.includes(rnd1 + rnd2), text: rnd1 + ` + ` + rnd2 + ` = ?`, isTrue: false },
    {
      id: 9,
      state: (password) => password.includes("<script>alert(1)</script>"),
      text: "en basit xss payloadını içermeli",
      isTrue: false,
    },
    {
      id: 10,
      state: (password) => password.includes("CVE-2017-0144"),
      text: "wannacry cve kodunu içermeli",
      isTrue: false,
    },
  ]);
  const [allTrue, setAllTrue] = useState(false);

  useEffect(() => {
    const updatedReqs = reqs.map((req) => ({ ...req, isTrue: req.state(password) }));
    setReqs(updatedReqs);

    const checkTrue = updatedReqs.every((req) => req.isTrue);
    setAllTrue(checkTrue);
  }, [password]);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    if (allTrue) {
      setShowPassword(true);
    }
  };

  return (
    <>
      <div>
        <p className="title">Meet the Requirements</p>
        <TextField
          color=""
          type="text"
          name="password"
          id="password"
          label="password"
          placeholder={passwdEx ? passwdEx : "güçlü bir şey dene"}
          value={password}
          onChange={handlePasswordChange}
          size="small"
          error={!allTrue}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "grey.500" },
              "&:hover fieldset": { borderColor: "grey.300" },
              "&.Mui-focused fieldset": { borderColor: "secondary.main" },
              color: "white",
              "& input::placeholder": {
                color: "#a0a0a0",
                opacity: 1,
              },
            },
          }}
        />
        <Button
          type="submit"
          disabled={!allTrue}
          onClick={handleSubmit}
        >
          göster
        </Button>
        <div>
          <ul>
            {reqs.map((req, index) => {
              if (index === 0) {
                return (
                  <li
                    key={req.id}
                    style={{ color: req.isTrue ? "green" : "red" }}
                  >
                    {req.text}
                  </li>
                );
              }

              const prevMet = reqs.slice(0, index).every((r) => r.isTrue);
              if (prevMet) {
                return (
                  <li
                    key={req.id}
                    style={{ color: req.isTrue ? "green" : "red" }}
                  >
                    {req.text}
                  </li>
                );
              }

              return null;
            })}
          </ul>
          {allTrue && <p>{`bütün güvenlik isterleri karşılandı, güvenli şifrenizi artık kullanabilirsiniz :>`}</p>}
          {allTrue && showPassword && (
            <div>
              <p>şifre:</p>
              <p>{password}</p>
            </div>
          )}
        </div>
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
