import { sendEmail } from "@/utils/send-email";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const { register, reset, handleSubmit } = useForm();

  const Submit = (data) => {
    sendEmail(data);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(Submit)}>
        <TextField
          type="text"
          id="name"
          label="Gönderen"
          placeholder="Deniz Yılmaz"
          margin="normal"
          {...register("name", { required: true })}
        />
        <TextField
          type="email"
          id="email"
          label="Email"
          placeholder="dnzyilmaz@email.com"
          {...register("email", { required: true })}
        />
        <TextField
          type="text"
          id="subject"
          label="Konu"
          placeholder="Hal/hatır sorgu"
          {...register("subject", { required: true })}
        />
        <TextField
          type="text"
          id="message"
          label="Mesaj"
          placeholder="Merhabalar, kodlarınızı ailecek severek okuyoruz..."
          multiline
          rows={6}
          {...register("message", { required: true })}
        />
        <Button
          type="submit"
          variant="outlined"
        >
          Gönder
        </Button>
      </form>
    </>
  );
};

export default ContactForm;
