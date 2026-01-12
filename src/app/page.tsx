import Main from "../../component/main";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center p-6  lg:p-10">
      <header className="w-full text-xs max-w-4xl">
        <nav className="flex items-center justify-end gap-5">
          <a href="" className="inline-block border border-transparent hover:border-gray-300 px-8 py-3">Log in</a>
          <a href="" className="inline-block border border-gray-300 px-8 py-3 dark:border-white/10">Register</a>
        </nav>
      </header>
      <Main />
    </div>
  );
}
