"use server";

import { NextResponse, userAgent } from "next/server";
import { headers } from "next/headers";

export default middleware = async (request) => {
  const url = request.nextUrl;
  const pathname = url.pathname;
  const response = NextResponse.next();

  // Detect Device
  const { device } = userAgent(request);
  const viewport = device.type === undefined ? 'desktop' : 'mobile';
  const addedTime = 24 * 60 * 60 * 1000;
  url.searchParams.set("viewport", viewport);
  response.cookies.set({
    name: "device",
    value: viewport,
    expires: Date.now() + addedTime,
    path: "/",
  });

  response.headers.append("device", viewport);

   // Get remote IP address
   const remoteIp = request.headers.get('x-forwarded-for') || request.headers.get('remote-addr') || request.ip;
   response.headers.append("x-remote-ip", remoteIp);


  if (pathname.indexOf(".") === -1) {
    const headersList = headers();
    response.headers.append("x-url", pathname);

    if (pathname.length > 0) {
      const examname =
        pathname.split("/")[process.env.NEXT_PUBLIC_EXAM_SEGMRNT_INDEX];
      response.headers.append("examname", examname);
    }

    try {
      const currentPath =
        process.env.NEXT_PUBLIC_BASE_PATH.slice(0, -1) +
        request.nextUrl.pathname;
      const responseData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}check-redirect`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ currentUrl: currentPath }),
      });

      if (!responseData.ok) {
        throw new Error("Failed to fetch redirect URL");
      }

      const data = await responseData.json();

      if (data.redirectUrl && data.redirectUrl != null) {
        return NextResponse.redirect(
          new URL(data.redirectUrl, request.url),
          data?.type
        );
      }
    } catch (error) {
      console.error("Middleware error:", error.message);
    }
  }

  return response;
};

// See "Matching Paths" below to learn more
// export const config = {
//     matcher: [
// '/dashboard:path*',
//         '/((?!forbidden).*)',
//     ],
// }
