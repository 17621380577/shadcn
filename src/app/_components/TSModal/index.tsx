'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface TSModalProps {
  visible: boolean;
  title: string;
  content: string;
  okText?: string;
  onOk?: () => void;
}

const TSModal: React.FC<TSModalProps> = ({ visible, title, content, okText = 'OK', onOk }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [visible]);

  const handleOk = () => {
    if (onOk) {
      onOk();
    }
  };

  const modalContent = visible ? (
    <div className="fixed inset-0 z-[1000] overflow-y-auto">
      <div className="fixed inset-0 bg-[#000]/30 transition-opacity" />
      <div className="flex min-h-full items-center justify-center p-4 text-center">
        <div className="w-[335px] max-w-full relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
          <div className="bg-white p-8">
            <div className="flex">
              <div className="w-full">
                <h3 className="text-[20px] font-semibold leading-6 mb-3 text-center">{title}</h3>
                <div className="mt-2">
                  <p className="text-gray-700 text-[16px] text-center">{content}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 pb-6 flex justify-end">
            <button
              type="button"
              className="w-full h-10 inline-flex justify-center items-center rounded-md bg-[#F42300] px-3 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none cursor-pointer"
              onClick={handleOk}
            >
              {okText}
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;

  if (!isMounted) {
    return null;
  }

  return createPortal(modalContent, document.body);
};

export default TSModal;
