'use client';
import { headerBlackList } from '@/lib/constant';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { memo } from 'react';

const HeaderLayout = () => {
  const currentPath = usePathname();
  const router = useRouter();

  if (headerBlackList.includes(currentPath)) {
    return <></>;
  }

  return (
    <header
      className={`fixed w-full flex items-center justify-between h-12 md:h-16 lg:h-20 px-4 xs:px-6 lg:px-8 xl:px-12 top-0 z-50`}
      style={{
        backgroundColor: '#fff',
        boxShadow: '0px 4px 4px 0px #0000000f',
      }}
    >
      <div className="h-6 md:h-8">
        <Link href="/home" className="h-full flex gap-1.5 md:gap-2 items-center z-20 relative">
          <Image
            className="w-full h-full"
            src="/favicon.png"
            width={32}
            height={32}
            alt="icon"
            style={{ objectFit: 'contain' }}
          />
          <span className="font-bold text-base md:text-lg lg:text-xl whitespace-nowrap">
            Tiny Invoice
          </span>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <div className="px-6 md:px-8 text-center">
          <span
            onClick={() => router.push('/faq')}
            className="text-[#255EFB] font-semibold text-[14px] md:text-[16px] cursor-pointer"
          >
            FAQ
          </span>
        </div>
        <Link
          href="https://tinyinvoice.onelink.me/yUqe/p4b72xo2"
          className="font-SF Pro Display font-semibold justify-center rounded-lg items-center gap-2 md:gap-4 flex w-[120px] md:w-[134px] h-[36px] md:h-[44px] bg-[#E0E8FF] text-[#255EFB] text-sm md:text-base"
        >
          Try It Free
        </Link>
      </div>
    </header>
  );
};

export default memo(HeaderLayout);
