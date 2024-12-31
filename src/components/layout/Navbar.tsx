import Hamburger from "@/components/layout/Hamburger";
import { Menu, MenuList, MenuListItem, MenuToggleButton } from "./Menu";
import { navbarItems } from "@/constants";

export default function Navbar() {
  return (
    <Menu className="relative">
      <MenuToggleButton className="size-11 relative z-50  flex flex-col items-center justify-center gap-1.5 lg:hidden bg-stone-500 rounded-full">
        <Hamburger />
      </MenuToggleButton>
      <MenuList className=" absolute text-stone-400 sm:bg-stone-900 sm:text-3xl sm:gap-0 overflow-hidden sm:p-0 sm:text-stone-200 sm:fixed sm:top-0 sm:left-0 lg:relative lg:top-auto lg:right-auto lg:z-50 lg:bg-transparent lg:border lg:border-stone-500 lg:flex-row lg:gap-10 capitalize lg:text-stone-700 lg:py-1.5 lg:px-3 lg:items-center px-5 gap-5 text-2xl lg:text-base top-0 right-0 z-40 bg-stone-500 flex items-start justify-center flex-col">
        {navbarItems.map((item) => (
          <MenuListItem
            className="w-full sm:border-t sm:border-stone-800 group sm:last:border-b lg:border-none"
            sectionName={item}
            key={item}
          />
        ))}
      </MenuList>
    </Menu>
  );
}
