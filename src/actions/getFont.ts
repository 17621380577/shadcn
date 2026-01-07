'use server';

// 该文件只会在服务端执行
import fs from 'fs';
import path from 'path';
const fontMapping = new Map();
/**
 * 读取字体文件并转换为 Base64 编码
 * @param fontPath - 字体文件的相对路径（相对于 /public 目录）
 * @returns Base64 编码的字符串
 */
export const fetchFontAsBase64Server = async (fontPath: string) => {
  console.log(fontPath);

  try {
    const cacheBase64 = fontMapping.get(fontPath);
    if (cacheBase64) {
      return cacheBase64;
    }
    const publicDir = path.join(process.cwd(), 'public');
    const filePath = path.join(publicDir, fontPath);

    const fileBuffer = fs.readFileSync(filePath);
    const base64 = fileBuffer.toString('base64');
    fontMapping.set(fontPath, base64);
    return base64;
  } catch (error) {
    console.log(error);

    return '';
  }
};
