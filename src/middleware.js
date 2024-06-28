

import { NextResponse } from "next/server"

// ------------ next() -------------------

// export const middleware = (request) => {
//     return NextResponse.next()
// }
// export const config = {
//     matcher: '/user-profile'
// }

// ------------redirect()-----------
// export const middleware = (request) => {
//     return NextResponse.redirect(new URL('/about', request.url))
// }
// export const config = {
//     matcher: '/user-profile'
// }

// ------------rewrite()-----------

// export const middleware = (request) => {
//     return NextResponse.rewrite(new URL('/dashboard', request.url))
// }
// export const config = {
//     matcher: ['/about', '/contacts']
// }

// ------------condition-----------

// export const middleware = (request) => {
//     if (request.nextUrl.pathname.startsWith('/about')) {
//         return NextResponse.rewrite(new URL('/dashboard', request.url))
//     }

// }

// ----------chack user-----------

// const user = false
// const user = true
// export const middleware = (request) => {
//     if (!user) {
//         return NextResponse.rewrite(new URL('/login', request.url))
//     }
//     return NextResponse.next()

// }

// export const config = {
//     matcher: ['/about', '/dashboard']
// }


// -----------chack cookies------------

// export const middleware = (request) => {
//     const cookies = request.cookies.get('token')
//     if (!cookies) {
//         return NextResponse.rewrite(new URL('/login', request.url))
//     }
//     return NextResponse.next()

// }

// export const config = {
//     matcher: ['/about', '/dashboard']
// }

const cook = 'next-superHero'
export const middleware = (request) => {
    const cookies = request.cookies.get('token')
    if (!cookies || cookies.value !== cook) {
        return NextResponse.rewrite(new URL('/login', request.url))
    }
    return NextResponse.next()

}

export const config = {
    matcher: ['/about', '/dashboard']
}


