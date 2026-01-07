'use client';
import { footerBlackList } from '@/lib/constant';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const currentPath = usePathname();
  if (footerBlackList.includes(currentPath)) {
    return <></>;
  }
  return (
    <footer className="w-full bg-[#F9F9F9]">
      <div className="max-w-[366px] lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[430px] mx-auto py-6 sm:py-9 md:py-19 text-[14px] md:text-[16px]">
        {/* 在小屏幕下使用 flex-col 布局 */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-2 sm:gap-6 md:gap-0">
          {/* Logo 部分 */}
          <div className="flex justify-start">
            <div className="flex items-center md:items-start gap-2 md:mt-[-10px]">
              <Image
                src="/favicon.png"
                alt="Tiny Invoice"
                width={48}
                height={48}
                className="w-[32px] h-[32px] md:w-[48px] md:h-[48px]"
              />
              <span className="text-xl font-bold md:h-[48px] leading-[48px]">Tiny Invoice</span>
            </div>
          </div>

          {/* 小屏幕下的第二行容器 */}
          <div className="flex justify-between gap-8 md:contents">
            {/* 第二列：隐私协议链接 */}
            <div className="flex flex-col gap-3">
              <Link
                href="/termsOfService"
                className="text-gray-600 hover:text-blue-600 cursor-pointer"
              >
                Terms of service
              </Link>
              <Link
                href="/privacyPolicy"
                className="text-gray-600 hover:text-blue-600 cursor-pointer"
              >
                Privacy policy
              </Link>
              <Link
                href="/cookiePolicy"
                className="text-gray-600 hover:text-blue-600 cursor-pointer"
              >
                Cookie Policy
              </Link>
            </div>

            {/* 第三列：下载按钮 */}
            <div className="flex flex-col gap-2 md:gap-4">
              <h3 className="">Download free for iOS and Android</h3>
              <div className="flex md:flex-col w-[206px] justify-between md:gap-3">
                <div className="block relative w-[100px] md:w-[224px] h-[30px] md:h-[56px]">
                  <a href="https://apps.apple.com/cn/app/tiny-invoice-invoice-maker/id679572722">
                    <Image
                      src="/assets/home/app-store.svg"
                      alt="Download on App Store"
                      fill
                      className="object-contain block md:hidden"
                    />
                    <Image
                      src="/assets/home/app-store2.png"
                      alt="Get it on Google Play"
                      fill
                      className="object-contain hidden md:block"
                    />
                  </a>
                </div>
                <div className="block relative w-[100px] md:w-[224px] h-[30px] md:h-[56px]">
                  <a href="https://play.google.com/store/apps/details?id=com.appxy.tinyinvoice&pcampaignid=web_share">
                    <Image
                      src="/assets/home/google-play.svg"
                      alt="Get it on Google Play"
                      fill
                      className="object-contain block md:hidden"
                    />
                    <Image
                      src="/assets/home/google-play2.png"
                      alt="Get it on Google Play"
                      fill
                      className="object-contain hidden md:block"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 版权信息 */}
      <div className="h-[44px] md:h-[60px] flex justify-center items-center bg-[#0444CB] mt-2 sm:mt-5 md:mt-1">
        <div className=" w-[366px] sm:w-[430px] md:w-[768px] lg:w-[1024px] flex justify-between items-center gap-2 text-[12px] md:text-[16px] text-[#fff]">
          <span>Copyright © {new Date().getFullYear()} TinyWork Apps.</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
