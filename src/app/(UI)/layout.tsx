import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-8">
        <Button variant="ghost" asChild>
          <a href="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            返回导航
          </a>
        </Button>
      </div>
      {children}
    </div>
  );
}