import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
    
    const token = request.cookies.get('token')
    if(!token) return NextResponse.redirect(new URL('/login', request.url))
    

  return NextResponse.next()
}
 
export const config = {
  matcher: '/dashboard/:path*',
}