'use client'
import { sidebarLinks } from "../../constants"
import { usePathname } from 'next/navigation'
import { useAuth } from '@clerk/nextjs';
import Link from 'next/link';


const LeftSideBar = () => {
    const pathname = usePathname()
    const { userId } = useAuth()

    return (
        <section className="bg-gradient-to-br  from-gray-900 to-gray-800 bg-transparent shadow-none  rounded-xl p-4">
            <div className=" leftsidebar">
                {
                    sidebarLinks.map((link) => {
                        const isActive = (pathname.includes(link.route) && link.route.length > 1 || pathname === link.route)

                        if (link.route === '/profile') {
                            link.route = `${link.route}/${userId}`
                        }

                        return (
                            <Link
                                href={link.route}
                                key={link.label}
                                className={`leftsidebar_link ${
                                    isActive ? 'bg-white text-black' : 'text-gray-400 hover:bg-blue-500 hover:text-white'
                                }`}
                            >
                                {link.icon}
                                <p className="text-lg font-semibold">{link.label}</p>
                            </Link>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default LeftSideBar
