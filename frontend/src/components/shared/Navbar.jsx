import { Popover } from "@/components/ui/popover";
import Avatar from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const user = false;

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">Job<span className="text-[#F83002]">Potent</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>

          {!user ? (
            <div className="flex items-center gap-2">
              <Button variant="outline">Sign In</Button>
              <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">Sign Up</Button>
            </div>
          ) : (
            <Popover>
              <Popover.Trigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </Popover.Trigger>
              <Popover.Content className="w-80">
                <div className="">
                  <div className="flex gap-2 space-y-2">
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                    </Avatar>
                    <div>
                      <h4 className="font-medium">Yuno Mashle</h4>
                      <p className="text-sm text-muted-foreground">AAAAA</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 text-gray-600">
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      {/* <User2/>*/}
                      <Button variant="link">View Profile</Button>
                    </div>
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      {/* <LogOut/>*/}
                      <Button variant="link">Logout</Button>
                    </div>
                  </div>
                </div>
              </Popover.Content>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
