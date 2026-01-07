'use client';

import Image from 'next/image';
import { useLayoutEffect, useRef, useState } from 'react';

const FirstScreenLoadingComp = () => {
  const [countdown, setCountdown] = useState(100);
  const intervalId = useRef<NodeJS.Timeout>(null);
  useLayoutEffect(() => {
    intervalId.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 0 && intervalId.current) {
          clearInterval(intervalId.current);
        }
        return prev - 10;
      });
    }, 100);
    return () => {
      intervalId.current && clearInterval(intervalId.current);
    };
  }, []);
  if (countdown <= 0) {
    return <></>;
  }
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-[#F5F6F8] flex items-center justify-center z-100">
      <div className="w-[300px] text-[#333] text-[24px] pb-[50px]">
        <Image
          className="w-[80px] h-[80px] rounded-2xl mx-auto"
          src={'/assets/logo.png'}
          width={320}
          height={320}
          alt="logo"
        />
        <div className="w-full flex items-center text-[#0F1F4B] text-[20px] font-bold mt-[30px] justify-center">
          Tiny Invoice
        </div>
        <div className="w-full h-2 bg-[#E0E8FF] flex items-center p-[1px] rounded-[2px] mt-5">
          <div
            className="h-full bg-[#255EFB] rounded-[1px] transition-all"
            style={{ width: `${100 - countdown}%` }}
          />
        </div>
      </div>
    </div>
  );
};
export default FirstScreenLoadingComp;
