import { sendEmail } from "@/utils/send-email";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const { register, reset, handleSubmit } = useForm();
  const [message, setMessage] = useState("");

  const Submit = (data) => {
    sendEmail(data);
    setMessage("Mesajınız gönderildi!");
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(Submit)}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <TextField
            type="text"
            id="name"
            label="gönderen"
            placeholder="Deniz Yılmaz"
            margin="normal"
            {...register("name", { required: true })}
            color="secondary"
            variant="filled"
            focused
            sx={{ mb: "1.5rem", input: { color: "var(--secondaryText)" } }}
          />
          <TextField
            type="email"
            id="email"
            label="email"
            placeholder="dnzyilmaz@email.com"
            {...register("email", { required: true })}
            color="secondary"
            variant="filled"
            focused
            sx={{ mb: "1.5rem", input: { color: "var(--secondaryText)" } }}
          />
          <TextField
            type="text"
            id="subject"
            label="konu"
            placeholder="Hal/hatır sorgu"
            {...register("subject", { required: true })}
            color="secondary"
            variant="filled"
            focused
            sx={{ mb: "1.5rem", input: { color: "var(--secondaryText)" } }}
          />
          <TextField
            type="text"
            id="message"
            label="mesaj"
            placeholder="Merhabalar, kodlarınızı ailecek severek okuyoruz..."
            multiline
            rows={6}
            {...register("message", { required: true })}
            color="secondary"
            variant="filled"
            focused
            sx={{
              mb: "1.5rem",
              "& .MuiInputBase-input": { color: "var(--secondaryText)" },
            }}
          />
          <Button
            type="submit"
            variant="outlined"
            color="secondary"
            sx={{ marginY: "1rem", textTransform: "lowercase" }}
          >
            gönder
          </Button>
          <Typography sx={{ textAlign: "center", color: "var(--secondaryText)" }}>{message}</Typography>
        </Box>
      </form>
    </>
  );
};

export default ContactForm;
