export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold">YourName</h1>
        <div className="flex gap-6 text-sm">
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="https://github.com/yourusername" target="_blank">
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}
