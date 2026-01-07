import FooterLayout from '@/components/Layout/Footer/Footer';
import HeaderLayout from '@/components/Layout/Header/Header';
export default function DefaultLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen h-full ">
      <HeaderLayout />
      {children}
      <FooterLayout />
    </div>
  );
}
