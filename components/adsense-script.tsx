import Script from "next/script";

export function AdsenseScript() {
  const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "ca-pub-4010004205574660";

  if (!adsenseClient) {
    return null;
  }

  return (
    <Script
      id="adsense-script"
      async
      crossOrigin="anonymous"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
      strategy="lazyOnload"
    />
  );
}
