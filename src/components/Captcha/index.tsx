import HCaptcha from "@hcaptcha/react-hcaptcha";
import Turnstile from "react-turnstile";

interface CaptchaProps {
  sitekey: string;
  onVerify: (token?: string, ekey?: string) => void;
  onExpire?: () => void;
  theme?: "light" | "dark";
  type: "hCaptcha" | "reCaptcha" | "turnstile";
}

export default function Captcha(props: CaptchaProps) {
  const { theme = "dark", type, onVerify, sitekey, onExpire } = props;

  switch (type) {
    case "hCaptcha":
      return (
        <HCaptcha
          sitekey={sitekey}
          onVerify={(token, ekey) => onVerify(token, ekey)}
        />
      );
    case "reCaptcha":
      return <div></div>;
    case "turnstile":
      return (
        <Turnstile
          sitekey={sitekey}
          onVerify={onVerify}
          onExpire={onExpire}
          theme={theme}
        />
      );
  }

  return <></>;
}
