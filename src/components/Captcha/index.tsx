interface CaptchaProps {
  siteKey: string;
}

export default function Captcha(props: CaptchaProps) {
  const { siteKey } = props;
  console.log("SITE_KEY:",siteKey);
    return (
      <div
        className="cf-turnstile"
        data-sitekey={siteKey}
        data-theme="dark"
      ></div>
    );

}
