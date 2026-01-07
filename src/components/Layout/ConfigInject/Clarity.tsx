'use client';
import Clarity from '@microsoft/clarity';

export const ClarityConfig = () => {
  Clarity.init(process.env.NEXT_PUBLIC_APP_CARITY_PROJECT_ID as string);
  return <></>;
};
