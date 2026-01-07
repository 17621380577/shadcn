// import FirstScreenLoadingComp from '../_components/FirstScreenLoading';
export default function PublicLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen h-screen bg-[#F5F6F8] overflow-hidden">
      {/* <FirstScreenLoadingComp /> */}
      {children}
    </div>
  );
}
