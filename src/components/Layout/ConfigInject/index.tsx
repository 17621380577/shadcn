'use client';
import { ClarityConfig } from './Clarity';
import { SPMConfig } from './SPMConfig';
if (!Promise.withResolvers) {
  (Promise.withResolvers as any) = function () {
    let resolve;
    let reject;
    const promise = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });
    return { promise, resolve, reject };
  };
}
const ConfigInject = () => {
  return (
    <>
      <SPMConfig />
      <ClarityConfig />
    </>
  );
};
export default ConfigInject;
