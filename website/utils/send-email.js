export async function sendEmail(data) {
  const json = JSON.stringify({ ...data, access_key: "5f38275f-3266-4fd7-aa78-27b6b436a108" });

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  });

  const result = await response.json();
  if (!result.succes) {
    console.error(result);
  }
}
