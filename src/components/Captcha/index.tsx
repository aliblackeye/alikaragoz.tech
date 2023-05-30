export default function Captcha({ siteKey }: { siteKey: string }) {
  return (
    <div
      className="cf-turnstile"
      data-sitekey={siteKey}
      data-theme="dark"
    ></div>
  );
}
