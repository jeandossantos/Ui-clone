import {
  Laptop2,
  LayoutList,
  Maximize2,
  Mic2,
  Play,
  SkipForward,
} from 'lucide-react';
import { Volume } from 'lucide-react';
import { Repeat } from 'lucide-react';
import { Shuffle, SkipBack } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="flex items-center justify-between px-6 py-4 border-t bg-zinc-800 border-zinc-800">
      <div className="flex items-center gap-3">
        <Image
          src={'/album.jpg'}
          alt="Audioslave album"
          width={56}
          className="w-full"
          height={56}
        />

        <div className="flex flex-col">
          <p>Audioslave</p>
          <span className="text-xs text-zinc-400">Like a Stone</span>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex items-center gap-3">
          <Shuffle className="text-zinc-200" size={20} />
          <SkipBack className="text-zinc-200" size={20} />

          <button className="flex items-center justify-center w-10 h-10 pl-1 ml-auto text-black bg-white rounded-full">
            <Play fill="#000" />
          </button>
          <SkipForward className="text-zinc-200" size={20} />
          <Repeat className="text-zinc-200" size={20} />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:31</span>
          <div className="h-1 rounded-full w-96 bg-zinc-600">
            <div className="w-40 h-1 rounded-full bg-zinc-200"></div>
          </div>
          <span className="text-xs text-zinc-400">2:14</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Mic2 size={20} />
        <LayoutList size={20} />
        <Laptop2 size={20} />
        <div className="flex items-center gap-2">
          <Volume size={20} />
          <div className="w-24 h-1 rounded-full bg-zinc-600">
            <div className="w-10 h-1 rounded-full bg-zinc-200"></div>
          </div>
        </div>
        <Maximize2 size={20} />
      </div>
    </footer>
  );
}
