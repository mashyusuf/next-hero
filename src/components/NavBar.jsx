"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const NavBar = () => {
    const pathName = usePathname();
    const router = useRouter();
    
    const links = [
        {
            title: 'Meals',
            path: '/meals'
        },
        {
            title: 'Blogs Era',
            path: '/blogs'
        },
        {
            title: 'Dashboard',
            path: '/dashboard'
        },
        {
            title: 'Posts',
            path: '/posts'
        },
        {
            title: 'Gellery',
            path: '/gellary'
        },
    ];

    const handler = () => {
        router.push('/login');
    };
    if(pathName.includes('dashboard'))
        return (
    <div className="bg-green-500 p-6">
        Dashboard Layout Nav Only for navBar
    </div>
    )

    return (
        <nav className="bg-orange-600 flex justify-between items-center py-8"> 
            <h1 className="text-3xl font-bold">This Is Yusuf House</h1>
            <ul className="flex justify-between items-center space-x-10">
                {links.map((link) => (
                    <Link 
                        className={`${pathName === link.path ? 'text-sky-700' : ''}`} 
                        key={link.path} 
                        href={link.path}
                    >
                        {link.title}
                    </Link>
                ))}
            </ul>
            <button onClick={handler} className="btn bg-slate-500">Login</button>
        </nav>
    );
};

export default NavBar;
