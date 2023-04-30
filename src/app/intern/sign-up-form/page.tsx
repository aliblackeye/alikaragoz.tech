"use client";
import FormInput from "@/components/form-elements/FormInput";
import Toast from "@/components/miscs/toast/Toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface FormValues {
  [key: string]: string;
}

export default function SignUpForm() {
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

    // eğer datanın tüm gerekli alanları dolu ise toast gözüksün
    if (Object.keys(data).length === inputs.length) {
      setSubmitted(true);
      // kullanıcıyı anasayfaya yönlendirme kodu
      setTimeout(() => {
        
        router.push("/");
      }, 1000);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.currentTarget.name]: e.currentTarget.value });
  };

  type Inputs = {
    name: string;
    type?: string;
    placeholder?: string;
    errorMessage?: string;
    required?: boolean;
    pattern?: string;
  }[];

  // Patterns
  // Şifre en az 1 büyük harf, 1 küçük harf ve 1 rakam içermelidir ve en az 8 karakter olmalıdır.
  const patterns = {
    firstName: "^[a-zA-Z]{3,30}$",
    lastName: "^[a-zA-Z]{3,30}$",
    email: "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
    password: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,50}$",
  };

  const inputs: Inputs = [
    {
      name: "firstName",
      placeholder: "First Name",
      errorMessage: "Please enter a valid input.",
      pattern: patterns.firstName,
      required: true,
    },

    {
      name: "lastName",
      placeholder: "Last Name",
      errorMessage: "Please enter a valid input.",
      pattern: patterns.lastName,
      required: true,
    },
    {
      name: "email",
      type: "email",
      placeholder: "Email Address",
      errorMessage: "Please enter a valid email address.",
      pattern: patterns.email,
      required: true,
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
      pattern: patterns.password,
      errorMessage: "Please enter a valid password.",
      required: true,
    },
  ];

  return (
    <form className="sign-up-form" onSubmit={handleSubmit}>
      <div className="left">
        <h1>Learn to code by watching others</h1>
        <p>
          {`See how experienced developers solve problems in real-time. Watcing
          scripted tutorials is great, but understanding how developers think is
          invaluable.`}
        </p>
      </div>
      <div className="right">
        <h6 className="promotion">
          <span>Try it free 7 days </span> then S20/mo. thereafter
        </h6>
        <div className="form-elements">
          {inputs?.map((input, key) => (
            <FormInput
              key={key}
              {...input}
              onChange={onChange}
              value={values[input.name]}
            />
          ))}

          <button type="submit">CLAIM YOUR FREE TRIAL</button>
          <p className="terms">
            By clicking the button, you are agreeing to our{" "}
            <span>Terms and Services</span>
          </p>
        </div>
      </div>
      {submitted && (
        <Toast
          message="Form submitted successfully!"
          type="success"
          duration={3000}
          position="bottom-right"
          onClose={() => setSubmitted(false)}
          show={submitted}
        />
      )}
    </form>
  );
}
