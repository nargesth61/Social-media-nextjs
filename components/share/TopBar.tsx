import { OrganizationSwitcher, SignedIn, UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Link from "next/link";

const TopBar = () => {
  return (
    <nav className="topbar">
      <div>
        <Link href="/">SOTIAL MEDIA</Link>
      </div>
      <div className="flex item-center gap-3">
        <SignedIn>
          <OrganizationSwitcher
            appearance={{
              baseTheme: dark,
              elements: {
                organizationSwitcherTrigger: "py-2 px-4",
              },
            }}
          />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default TopBar;
