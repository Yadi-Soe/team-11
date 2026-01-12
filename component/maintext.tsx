import { Disc2Icon, MoveUpRight } from "lucide-react";

const Maintext = () => {
  return (
    <div className="flex-1 p-30
     dark:bg-[#161615]">
      <div className="mb-5">
          <h1 className="text-xs mb-5">Let&apos;s get started</h1>
          <p className="text-gray-700 text-xs">
            Laravel has an incredibly rich ecosystem.
            <br />
            We suggest starting with the following.
          </p>
      </div>
      <ul className="mb-5 flex flex-col lg:mb-8">
        <li className="relative flex items-center gap-5 py-4">
            <Disc2Icon className="size-5 text-gray-400" />
            <span className="text-xs">
              Read the <a className="inline-flex  text-orange-600 underline" href="https://laravel.com/docs/12.x" target="blank">
                documentation
                <MoveUpRight className="size-3" />
              </a>
            </span>
        </li>
        <li className="relative flex items-center gap-5 py-4">
            <Disc2Icon className="size-5 text-gray-400" />
            <span className="text-xs">
             Watch video tutorials at<br/><a className="inline-flex gap-1 text-orange-600 underline" href="https://laracasts.com/" target="blank">
                Laracasts
                <MoveUpRight className="size-3" />
              </a>
            </span>
        </li>
      </ul>
        
        <button className="bg-black border border-black items-start text-white px-7 py-2 text-sm font-medium  hover:border-black hover:bg-[#464649] dark:hover:border-white dark:bg-white dark:text-black dark:hover:text-white">
          Deploy now
        </button>
      </div>
  )
};

export default Maintext;
