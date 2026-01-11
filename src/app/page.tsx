// import Image from "next/image";

import { Disc2Icon, MoveUpRight } from "lucide-react";
import Image from "next/image";


export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-8 py-11">
      <div className="flex justify-end gap-5">
        <div className="border border-black px-5 py-2 inline-block text-sm">
          Log in
        </div>
        <div className="border border-black px-5 py-2 inline-block text-sm">
          Register
        </div>
      </div>
      <main className=" grid grid-cols-2 border border-black w-auto mt-10">
        <div className="flex flex-col items-start p-20">
          <h3 className="text-xs mb-4">Let&apos;s get started</h3>
          <p className="text-gray-700 text-xs mb-7">
            Laravel has an incredibly rich ecosystem.
            We suggest starting with the following.
          </p>
          <div className="flex flex-col mb-8 gap-5">
              <div className="flex gap-5 text-xs mb-5">
              <Disc2Icon className="size-4 text-gray-400"/>
              <p>Read the <span className="text-orange-600 underline">
                  documentation<MoveUpRight className="size-4 text-orange-600"/>
                </span>
              </p>
            </div>
            <div className="flex gap-5 text-xs">
              <Disc2Icon className="size-4 text-gray-400"/>
              <p>Watch video tutorials at <span className="text-orange-600 underline">
                Laracast
                </span><MoveUpRight className="size-4 text-orange-600"/>
              </p>
            </div>
          </div>
          <button className="bg-black text-white px-7 py-2 text-sm">Deploy now</button>
        </div>
        <div className="relative h-auto w-full">
          <Image src="/dTOMI3nTXkkRLlAPSTlMPakchMPgst2khW74zLIS.png" alt="Laravel" fill className="object-cover"/>
        </div>
      </main>
    </div>
  );
}
