import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";

import { Button } from "./ui/button";

const Navbar = () => {
  return (
      <div className="flex items-center">
          <Button
              variant="ghost" size='icon'
              className="md:hidden"
          >
              <Menu />
          </Button>   
          <div className="flex w-full justify-end">
              <UserButton afterSignOut="/" />
          </div>
    </div>
  )
}

export default Navbar;