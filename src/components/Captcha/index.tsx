import Turnstile from "react-turnstile";

interface CaptchaProps {
  sitekey: string;
  onVerify: () => void;
  onExpire?: () => void;
  theme?: "light" | "dark";
}

export default function Captcha(props: CaptchaProps) {
  const { theme = "dark" } = props;
  return (
    <Turnstile
      {...props}
      theme={theme}
    />
  );
}
