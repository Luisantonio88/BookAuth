import { Button } from "@/components/ui/button";
import Image from "next/image";
import { actionLogout } from "./actions/auth";

export default function Home() {
  return (
    <main>
      <div className="bg-sky-800 fixed left-0 right-0 top-0 flex flex-row items-center p-0">
        <div className="flex flex-row p-2 items-center">
          <Image
            alt="menu"
            src="/menu.svg"
            width={50}
            height={50}
            className="ml-2 mr-4 rounded hover:bg-sky-600 transition duration-500 p-2"
          />
          <h1 className="text-white text-4xl font-extralight">book</h1>
          <h1 className="text-orange-500 text-4xl">journey</h1>
        </div>
      </div>

      <div className=" bg-amber-100 flex flex-col items-center justify-center h-screen">
        <Image
          alt="logo"
          src="/logoq.svg"
          width={200}
          height={200}
          className="p-6"
        />
        <form className="" action={actionLogout}>
          <Button>Logout</Button>
        </form>
      </div>
    </main>
  );
}
