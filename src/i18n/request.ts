import { getUserLocale } from '@/services/locale';
import { getRequestConfig } from 'next-intl/server';
import faqEn from '../../messages/en/faq.json';
import npsEn from '../../messages/en/nps.json';
import faqZh from '../../messages/zh/faq.json';
import npsZh from '../../messages/zh/nps.json';

export default getRequestConfig(async () => {
  let nps = npsEn;
  let faq = faqEn;
  const locale = await getUserLocale();

  switch (locale) {
    case 'en':
      nps = npsEn;
      faq = faqEn;
      break;
    case 'zh':
      nps = npsZh;
      faq = faqZh;
      break;
    default:
  }

  return {
    locale,
    messages: {
      nps,
      faq,
    },
  };
});
