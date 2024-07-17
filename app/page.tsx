import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-6">
        <h1 className="text-center p-2 text-[24px] font-bold">Training Movie List</h1>
        <Link className ="px-5 py-2 rounded-lg bg-white border border-1 border-black text-center" href="/now-playing" >Now Playing</Link>
        <Link className ="px-5 py-2 rounded-lg bg-white border border-1 border-black text-center"href="/upcoming" >Upcoming</Link>
        <Link className ="px-5 py-2 rounded-lg bg-white border border-1 border-black text-center"href="/popular" >Popular</Link>
      </div>
    </main>
  );
}
