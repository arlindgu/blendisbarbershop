import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Set this variable to true when on vacation, false otherwise
const VACATION_MODE = false;

// The path to your vacation mode page
const VACATION_PATH = '/vacation';

export function middleware(request: NextRequest) {
  if (VACATION_MODE) {
    const allowedPaths = ['/services', '/location', VACATION_PATH];
    const isAllowed = allowedPaths.some((path) => request.nextUrl.pathname.startsWith(path));
    if (!isAllowed) {
      const url = request.nextUrl.clone();
      url.pathname = VACATION_PATH;
      return NextResponse.redirect(url);
    }
  } else {
    // Wenn Vacation Mode aus ist, darf /vacation nicht aufgerufen werden
    if (request.nextUrl.pathname.startsWith(VACATION_PATH)) {
      const url = request.nextUrl.clone();
      url.pathname = '/';
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next|favicon.ico|api).*)',
  ],
};
