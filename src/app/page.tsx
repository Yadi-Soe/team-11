import Main from "../../component/main";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center p-5  lg:p-8">
      <header className="w-full text-xs max-w-4xl mb-5">
        <nav className="flex items-center justify-end gap-5">
          <a href="" className="inline-block border border-transparent hover:border-gray-300 px-7 py-2">Log in</a>
          <a href="" className="inline-block border border-gray-300 px-7 py-2">Register</a>
        </nav>
      </header>
      <Main />
    </div>
  );
}
