import { useEffect } from 'react';

interface WithScrollToTopProps {
  WrappedComponent: React.ComponentType<any>;
}

const WithScrollToTopComponent: React.FC<WithScrollToTopProps> = ({
  WrappedComponent,
  ...props
}) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0 });
    }
  }, []);

  return <WrappedComponent {...props} />;
};

export const WithScrollToTop = (WrappedComponent: React.ComponentType<any>) => {
  return (props: any) => {
    return <WithScrollToTopComponent WrappedComponent={WrappedComponent} {...props} />;
  };
};
