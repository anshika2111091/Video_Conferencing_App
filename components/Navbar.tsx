import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";
import { SignedIn,UserButton,SignedOut,SignInButton } from "@clerk/nextjs";


const Navbar = () => {
  return (
    <nav className=" flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
      <Image src="/icons/logo.svg" width={32} height={32} alt="Yoom Logo" className="max-sm:size-10"/>
      <p className="text-[26px] text-white max-sm:hidden font-extrabold">Yoom</p>
      </Link>

      <div className="flex-between items-center gap-5">
        {/* clerk user management */}
        <SignedIn>
              <UserButton />
            </SignedIn>
           
       <MobileNav/>
      </div>
    </nav>
  )
}

export default Navbar
