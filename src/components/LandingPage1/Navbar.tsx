import Image from "next/image"
import Link from "next/link"


const Navbar = () => {

    const links = [
        {
            title: "Guide",
            href: "#"
        }, {
            title: "Pricing",
            href: "#"
        }, {
            title: "Login",
            href: "#"
        }
    ]
  return (
    <nav className="flex items-centre justify-between py-4 px-4">
        <Link href={"/"}>
        <Image draggable={false} src={"/finta-logo-light.svg"} alt="Logo" width={70} height={70} loading={"lazy"}/>
        </Link>
        <div className="flex items-center gap-8">
            {links.map((link, idx)=>(<Link href={link.href} key={link.title + idx} className="text-neutral-800 font-medium hover:text-neutral-600 transition duration-200">{link.title}</Link>))}
            <button className="bg-[#2579F4] px-4 py-2 rounded-lg text-white font-bold shadow-lg text-shadow-md tracking-wide">Start free trial</button>
        </div>
    </nav>
  )
}

export default Navbar