import { NextResponse } from "next/server";

import CONFIG from "@/config.json";

export async function POST(req: Request) {
  // Get the token and email from the request body
  const { token } = await req.json();

  // Verify the token and email
  let formData = new FormData();
  formData.append("secret", CONFIG.SECRET_KEY);
  formData.append("response", token);

  const url = `https://challenges.cloudflare.com/turnstile/v0/siteverify`;
  const result = await fetch(url, {
    method: "POST",
    body: formData,
  });

  try {
    const outcome = await result.json();
    NextResponse.json(
      {
        success: true,
        message: "You have been claimed your stack.",
        outcome,
      },
      { status: 200 }
    );
  } catch (error) {
    NextResponse.json(
      {
        success: false,
        message: "Invalid reCAPTCHA token",
      },
      { status: 403 }
    );
  }
}
