type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

function getEnv(key: string) {
  return (import.meta as any).env?.[key] as string | undefined;
}

export async function sendContact(payload: ContactPayload) {
  const serviceId = getEnv("VITE_EMAILJS_SERVICE_ID");
  const templateId = getEnv("VITE_EMAILJS_TEMPLATE_ID");
  const publicKey = getEnv("VITE_EMAILJS_PUBLIC_KEY");

  if (!serviceId || !templateId || !publicKey) {
    return { ok: false as const, mode: "mailto" as const };
  }

  const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: payload.name,
        from_email: payload.email,
        message: payload.message
      }
    })
  });

  if (!res.ok) {
    return { ok: false as const, mode: "emailjs" as const };
  }
  return { ok: true as const, mode: "emailjs" as const };
}

