import HCaptcha from "@hcaptcha/react-hcaptcha";
import Turnstile from "react-turnstile";

interface CaptchaProps {
  sitekey: string;
  onVerify: (token?: string, sessionId?: string) => void;
  onExpire?: () => void;
  onClose?: () => void;
  theme?: "light" | "dark";
  type: "hCaptcha" | "reCaptcha" | "turnstile";
}

export default function Captcha(props: CaptchaProps) {
  const { theme = "dark", type, onVerify, sitekey, onExpire, onClose } = props;

  switch (type) {
    case "hCaptcha":
      return (
        <HCaptcha
          sitekey={sitekey}
          onVerify={(token, sessionId) => onVerify(token, sessionId)}
          onClose={onClose}
          theme={theme}
          onExpire={onExpire}
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
