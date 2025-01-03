import Navbar from "./Navbar";
import Logo from "./Logo";
import Button from "../ui/Button";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md z-50">
      <div className="container !max-w-full">
        <nav className="flex justify-between items-center h-20 w-full">
          <Logo />
          <div className="flex items-center gap-4 justify-center">
            <Navbar />
            <Button
              text="contact me"
              href={"https://wa.me/+201064467975"}
              variant="primary"
              className="hidden sm:inline-flex lg:hidden z-50"
            />
          </div>
        </nav>
      </div>
    </header>
  );
}
