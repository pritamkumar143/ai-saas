import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidebar";


const Navbar = () => {
  return (
      <div className="p-4 flex items-center">
          <MobileSidebar />
          <div className="flex w-full justify-end">
              <UserButton afterSignOut="/" />
          </div>
    </div>
  )
}

export default Navbar;