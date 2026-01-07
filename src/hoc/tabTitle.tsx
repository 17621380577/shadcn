import spm from '@/lib/spm';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import React, { useLayoutEffect } from 'react';

interface WithTitleProps {
  title: string;
  Component: React.ComponentType<any>;
}

const WithTitleComponent: React.FC<WithTitleProps> = ({ title, Component, ...props }) => {
  const t = useTranslations();
  const router = useRouter();

  useLayoutEffect(() => {
    document.title = title || t('faq.app');
  }, [router, title]);

  return <Component {...props} />;
};

export const WithTitle = (Component: React.ComponentType<any>) => {
  return (props: any & WithTitleProps) => {
    return <WithTitleComponent title={props.title} {...props} Component={Component} />;
  };
};

export const handleChangeTabTitle = (title: string) => {
  // 由接口获取的title需手动触发
  document.title = title;
  // 埋点
  spm.browserEvent();
};
