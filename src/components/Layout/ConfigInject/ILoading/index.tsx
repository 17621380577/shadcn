import Image from 'next/image';
import React from 'react';
import { createPortal } from 'react-dom';
import { Root, createRoot } from 'react-dom/client';

export interface ILoadingPropsType {
  loading?: boolean;
}
const ILoading: React.FC<ILoadingPropsType> = (props) => {
  if (!props.loading) {
    return <></>;
  }
  return createPortal(
    <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen">
      <Image
        className="w-[60px] h-[60px]"
        src={'/assets/icon/loading.svg'}
        width={42}
        height={42}
        alt="loading"
      />
    </div>,
    document.body,
  );
};
const useILoading = () => {
  let root: Root | null = null;
  const createDoc = (props: ILoadingPropsType) => {
    const doc = document.createElement('div');
    root = createRoot(doc);
    root.render(<ILoading {...props} />);
  };
  const removeDoc = () => {
    root && root.unmount();
  };

  const show = () => {
    createDoc({
      loading: true,
    });
  };
  const hide = () => {
    removeDoc();
  };
  return { show, hide };
};
export { ILoading, useILoading };
