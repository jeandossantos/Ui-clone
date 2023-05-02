import { HomeIcon, Library, Search } from 'lucide-react';

export function Sidebar() {
  return (
    <aside className="p-6 w-72 bg-zinc-950">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      <nav className="mt-10 space-y-5 ">
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <HomeIcon /> Home
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Search /> Search
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Library /> Your Library
        </a>
      </nav>

      <nav className="flex flex-col gap-3 pt-6 mt-6 border-t border-zinc-800">
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Hot Hits Brasil
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Aniver Funk
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          My Playlist #10
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Todo brasil
        </a>
      </nav>
    </aside>
  );
}
