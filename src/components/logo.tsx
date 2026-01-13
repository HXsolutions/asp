import Image from 'next/image';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image src="https://i.postimg.cc/JhxK53BS/image.png" alt="Amazon Solutions Pro Logo" width={28} height={28} className="h-7 w-7" />
      <span className="text-lg font-semibold text-black tracking-tighter">
        ASP.
      </span>
    </div>
  );
}
