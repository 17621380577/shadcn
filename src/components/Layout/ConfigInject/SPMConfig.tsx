'use client';
import spm from '@/lib/spm';

export const SPMConfig = () => {
  spm.initConfig({
    app_id: 'com.appxy.tinyinvoicewebapp',
    app_name: 'TinyInvoice',
    app_version: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',
    exclude_browse_pathname_list: ['/faq/list', '/faq/detail'],
  });
  return <></>;
};
