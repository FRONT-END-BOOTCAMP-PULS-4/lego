"use client";

import Image from "next/image";

export default function LoginPage() {
  const handleSocialLogin = (provider: "github" | "google") => {
    const clientId =
      provider === "github"
        ? process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID
        : process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

    const redirectUri = `${window.location.origin}/auth/callback?provider=${provider}`;

    let url = "";

    if (provider === "github") {
      url = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}`;
    } else if (provider === "google") {
      const scope = "openid profile email";
      url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;
    }

    window.open(url, "_blank", "width=500px,height=600px");
  };

  return (
    <main className="flex flex-col items-center justify-center">
      <div className="w-[448px] h-[660px] flex flex-col justify-center">
        <div className="h-[380px]">
          <div className="h-[200px] flex flex-col justify-center items-center">
            <Image src="/assets/image/Logo.svg" width={82} height={82} alt="logo" />
            <h2 className="txt-4xl-b mb-[8px]" style={{ color: "var(--blue-01)" }}>
              로그인
            </h2>
            <p className="text-center">레고와 함께하세요!</p>
          </div>
          <div className="h-[180px] mt-[24px] flex flex-col items-center justify-center">
            <div className="mb-[24px]">
              <button
                onClick={() => handleSocialLogin("github")}
                className="flex items-center justify-center w-[345px] h-[54px] border-2 border-solid mb-[8px] py-[15px] cursor-pointer rounded-md"
              >
                <Image
                  src="/assets/image/github.svg"
                  width={24}
                  height={24}
                  className="mr-[8px]"
                  alt="github icon"
                />
                <span className="txt-lg">Continue with GitHub</span>
              </button>
              <button
                onClick={() => handleSocialLogin("google")}
                className="flex items-center justify-center w-[345px] h-[54px] border-2 border-solid mb-[8px] py-[15px] cursor-pointer rounded-md"
              >
                <Image
                  src="/assets/image/google.svg"
                  width={24}
                  height={24}
                  className="mr-[8px]"
                  alt="google icon"
                />
                <span className="txt-lg">Continue with Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
