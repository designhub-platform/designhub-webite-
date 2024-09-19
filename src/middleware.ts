import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";

import { AppConfig } from "./utils/AppConfig";
import { updateSession } from "./lib/supabase/middleware";

const intlMiddleware = createMiddleware({
 locales: AppConfig.locales,
 localePrefix: AppConfig.localePrefix,
 defaultLocale: AppConfig.defaultLocale,
});

export default async function middleware(
 request: NextRequest,
 //event: NextFetchEvent,
) {
 await updateSession(request);

 return intlMiddleware(request);
}

export const config = {
 matcher: ["/((?!.+\\.[\\w]+$|_next|monitoring).*)", "/", "/(api|trpc)(.*)"], // Also exclude tunnelRoute used in Sentry from the matcher
};
