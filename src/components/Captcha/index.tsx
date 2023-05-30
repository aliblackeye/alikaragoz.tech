import Turnstile, { TurnstileProps } from "react-turnstile";

interface CaptchaProps extends TurnstileProps {}

export default function Captcha(props: CaptchaProps) {
  return (
    <Turnstile
      {...props}
    />
  );
}
