import { useEffect, useState } from "react";
import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";

export async function getServerSideProps() {
  try {
    const response = await fetch("https://api.genratr.com/?length=32&uppercase&lowercase&special&numbers");
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
    { id: 3, state: (password) => password.match(/\d/), text: "rakam içermeli", isTrue: false },
    { id: 4, state: (password) => regex.test(password), text: "özel karakter içermeli", isTrue: false },
    { id: 5, state: (password) => password.match(/yavuzlar/i), text: "'yavuzlar' içermeli", isTrue: false },
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
      state: (password) => password.match(/<script>alert\(1\)<\/script>/i),
      text: "en basit xss payloadını içermeli",
      isTrue: false,
    },
    {
      id: 10,
      state: (password) => password.match(/cve-2017-0144/i),
      text: "wannacry cve kodunu içermeli",
      isTrue: false,
    },
    {
      id: 11,
      state: (password) => password.match(/network/i),
      text: "ip adresinin bulunduğu osi layer'ın ismini içermeli",
      isTrue: false,
    },
    {
      id: 12,
      state: (password) => password.match(/\/etc\/shadow/i),
      text: "linux'ta kullanıcı şifrelerinin yer aldığı dosya yolunu içermeli",
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
      setShowPassword(!showPassword);
    }
  };

  return (
    <>
      <title>Meet the Requirements</title>
      <Grid
        container
        justifyContent={"center"}
        textAlign={"center"}
        sx={{
          minHeight: "100vh",
          paddingTop: "7.5rem",
        }}
      >
        <Grid
          item
          size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "#73cd07",
              marginBottom: "1.5rem",
            }}
          >
            Meet the Requirements
          </Typography>
          <TextField
            type="text"
            name="password"
            id="password"
            label="şifre"
            fullWidth
            color="success"
            placeholder={passwdEx ? passwdEx : "güçlü bir şey dene"}
            value={password}
            onChange={handlePasswordChange}
            size="small"
            error={!allTrue}
            sx={{
              marginBottom: "1rem",
              input: {
                color: "white",
              },
            }}
          />
          <Button
            type="submit"
            disabled={!allTrue}
            onClick={handleSubmit}
            fullWidth
            sx={{
              marginBottom: "1rem",
              textTransform: "none",
              "&.Mui-disabled": {
                color: "grey",
              },
            }}
          >
            {showPassword ? "gizle" : "göster"}
          </Button>
          <Box sx={{ marginBottom: "1rem" }}>
            <ul>
              {reqs.map((req, index) => {
                if (index === 0) {
                  return (
                    <Box
                      key={req.id}
                      style={{ color: req.isTrue ? "#73cd07" : "#F44336" }}
                      sx={{
                        paddingY: "0.25rem",
                        transition: "color 0.5s ease",
                      }}
                    >
                      {req.text}
                    </Box>
                  );
                }

                const prevMet = reqs.slice(0, index).every((r) => r.isTrue);
                if (prevMet) {
                  return (
                    <Box
                      key={req.id}
                      style={{ color: req.isTrue ? "#73cd07" : "#F44336" }}
                      sx={{
                        paddingY: `0.25rem`,
                        transition: "color 0.5s ease",
                      }}
                    >
                      {req.text}
                    </Box>
                  );
                }

                return null;
              })}
            </ul>
          </Box>
          {allTrue && (
            <Typography
              sx={{ marginBottom: "1rem" }}
            >{`bütün güvenlik isterleri karşılandı, güvenli şifrenizi artık kullanabilirsiniz :>`}</Typography>
          )}
          {allTrue && showPassword && (
            <Box>
              <Typography sx={{ color: "#73cd07" }}>şifre:</Typography>
              <Typography
                sx={{
                  flexWrap: "wrap",
                }}
              >
                {password}
              </Typography>
            </Box>
          )}
          <Link
            href="https://www.github.com/leidorf"
            target="_blank"
            sx={{
              position: "absolute",
              bottom: "2rem",
              color: "#73cd07",
              left: "50%",
              transform: "translateX(-50%)",
              textDecoration: "none",
              "&:hover": {
                color: "#509917",
                transition: "color 0.25s ease",
              },
            }}
          >
            github
          </Link>
        </Grid>
      </Grid>
    </>
  );
}
