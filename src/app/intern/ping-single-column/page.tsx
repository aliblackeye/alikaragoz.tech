"use client";

import FormInput, { FormValues } from "@/components/form-elements/FormInput";
import Toast from "@/components/miscs/toast/Toast";
import { useRouter } from "next/navigation";

import { useState } from "react";

export default function PingSingleColumn() {
  const router = useRouter();

  const [values, setValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Formu gönder
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const temp = new FormData(e.currentTarget);
    const data = Object.fromEntries(temp.entries());

    setSubmitted(true);
    // kullanıcıyı anasayfaya yönlendirme kodu
    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

  return (
    <div className="centered-page">
      <div className="ping-single-column">
      <h3 className="brand">
        PING
        <div className="square"></div>
      </h3>
      <h1 className="title">
        We are launching <span className="bold">soon!</span>
      </h1>
      <p className="description">Subscribe and get notified</p>
      <form className="subscribe-input" onSubmit={handleSubmit}>
        <FormInput
          name="email"
          pattern="^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"
          placeholder="Your email"
        />
        <button className="btn subscribe-button">Notify Me</button>
      </form>

      {submitted && (
        <Toast
          message="Subscribed successfully!"
          type="success"
          duration={3000}
          position="top-center"
          onClose={() => setSubmitted(false)}
          show={submitted}
        />
      )}
    </div>
    </div>
  );
}
