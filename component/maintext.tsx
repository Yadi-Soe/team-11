import { Disc2Icon, MoveUpRight } from "lucide-react";

const Maintext = () => {
  return (
    <div className="flex-1 p-24 pb-12">
      <div className="mb-5">
          <h3 className="text-sm mb-5">Let&apos;s get started</h3>
          <p className="text-gray-700 text-sm">
            Laravel has an incredibly rich ecosystem.
            <br />
            We suggest starting with the following.
          </p>
      </div>
        <div className="flex gap-5 mb-5">
            <Disc2Icon className="size-4 text-gray-400" />
            <p className="text-sm">
              Read the <span className="inline-flex gap-1 text-orange-600 underline">
                documentation
                <MoveUpRight className="size-3" />
              </span>
            </p>
        </div>
        <div className="flex gap-5 mb-5">
            <Disc2Icon className="size-4 text-gray-400" />
            <p className="text-sm">
             Watch video tutorials at<br/><span className="inline-flex gap-1 text-orange-600 underline">
                Laracasts
                <MoveUpRight className="size-3" />
              </span>
            </p>
        </div>

        <button className="bg-black items-start text-white px-7 py-2 text-sm font-medium">
          Deploy now
        </button>
      </div>
  )
};

export default Maintext;
