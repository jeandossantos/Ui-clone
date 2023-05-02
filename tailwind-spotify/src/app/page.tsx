import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
} from 'lucide-react';
import Image from 'next/image';
import { Footer } from './components/Footer';
import { Sidebar } from './components/Aside';

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="p-1 rounded-full bg-black/40">
              <ChevronLeft />
            </button>
            <button className="p-1 rounded-full bg-black/40">
              <ChevronRight />
            </button>
          </div>

          <h1 className="mt-10 text-3xl font-semibold">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href="#"
              className="flex items-center gap-4 overflow-hidden transition-colors rounded group bg-white/10 hover:bg-white/20"
            >
              <Image
                src={'/album.jpg'}
                alt="Audioslave album"
                width={104}
                height={104}
              />
              <strong>Like a Stone</strong>

              <button className="flex items-center justify-center invisible w-12 h-12 pl-1 ml-auto mr-8 text-black bg-green-400 rounded-full group-hover:visible">
                <Play fill="#000" />
              </button>
            </a>
            <a
              href="#"
              className="flex items-center gap-4 overflow-hidden transition-colors rounded group bg-white/10 hover:bg-white/20"
            >
              <Image
                src={'/album.jpg'}
                height={104}
                alt="Audioslave album"
                width={104}
              />
              <strong>Like a Stone</strong>

              <button className="flex items-center justify-center invisible w-12 h-12 pl-1 ml-auto mr-8 text-black bg-green-400 rounded-full group-hover:visible">
                <Play fill="#000" />
              </button>
            </a>
            <a
              href="#"
              className="flex items-center gap-4 overflow-hidden transition-colors rounded group bg-white/10 hover:bg-white/20"
            >
              <Image
                src={'/album.jpg'}
                height={104}
                alt="Audioslave album"
                width={104}
              />
              <strong>Like a Stone</strong>

              <button className="flex items-center justify-center invisible w-12 h-12 pl-1 ml-auto mr-8 text-black bg-green-400 rounded-full group-hover:visible">
                <Play fill="#000" />
              </button>
            </a>
            <a
              href="#"
              className="flex items-center gap-4 overflow-hidden transition-colors rounded group bg-white/10 hover:bg-white/20"
            >
              <Image
                src={'/album.jpg'}
                height={104}
                alt="Audioslave album"
                width={104}
              />
              <strong>Like a Stone</strong>

              <button className="flex items-center justify-center invisible w-12 h-12 pl-1 ml-auto mr-8 text-black bg-green-400 rounded-full group-hover:visible">
                <Play fill="#000" />
              </button>
            </a>
            <a
              href="#"
              className="flex items-center gap-4 overflow-hidden transition-colors rounded group bg-white/10 hover:bg-white/20"
            >
              <Image
                src={'/album.jpg'}
                height={104}
                alt="Audioslave album"
                width={104}
              />
              <strong>Like a Stone</strong>

              <button className="flex items-center justify-center invisible w-12 h-12 pl-1 ml-auto mr-8 text-black bg-green-400 rounded-full group-hover:visible">
                <Play fill="#000" />
              </button>
            </a>
            <a
              href="#"
              className="flex items-center gap-4 overflow-hidden transition-colors rounded group bg-white/10 hover:bg-white/20"
            >
              <Image
                src={'/album.jpg'}
                height={104}
                alt="Audioslave album"
                width={104}
              />
              <strong>Like a Stone</strong>

              <button className="flex items-center justify-center invisible w-12 h-12 pl-1 ml-auto mr-8 text-black bg-green-400 rounded-full group-hover:visible">
                <Play fill="#000" />
              </button>
            </a>
          </div>

          <h2 className="mt-10 text-2xl font-semibold">
            Made for Jean dos Santos
          </h2>

          <div className="grid grid-cols-5 gap-4 mt-4">
            <a
              href="#"
              className="flex flex-col gap-3 p-2 transition-colors rounded-md bg-white/5 hover:bg-white/10"
            >
              <Image
                src={'/album.jpg'}
                alt="Audioslave album"
                width={120}
                className="w-full"
                height={120}
              />

              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, Coin, girl in red and more
              </span>
            </a>
            <a
              href="#"
              className="flex flex-col gap-3 p-2 transition-colors rounded-md bg-white/5 hover:bg-white/10"
            >
              <Image
                src={'/album.jpg'}
                alt="Audioslave album"
                width={120}
                className="w-full"
                height={120}
              />

              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, Coin, girl in red and more
              </span>
            </a>
            <a
              href="#"
              className="flex flex-col gap-3 p-2 transition-colors rounded-md bg-white/5 hover:bg-white/10"
            >
              <Image
                src={'/album.jpg'}
                alt="Audioslave album"
                width={120}
                className="w-full"
                height={120}
              />

              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, Coin, girl in red and more
              </span>
            </a>
            <a
              href="#"
              className="flex flex-col gap-3 p-2 transition-colors rounded-md bg-white/5 hover:bg-white/10"
            >
              <Image
                src={'/album.jpg'}
                alt="Audioslave album"
                width={120}
                className="w-full"
                height={120}
              />

              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, Coin, girl in red and more
              </span>
            </a>
            <a
              href="#"
              className="flex flex-col gap-3 p-2 transition-colors rounded-md bg-white/5 hover:bg-white/10"
            >
              <Image
                src={'/album.jpg'}
                alt="Audioslave album"
                width={120}
                className="w-full"
                height={120}
              />

              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, Coin, girl in red and more
              </span>
            </a>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
