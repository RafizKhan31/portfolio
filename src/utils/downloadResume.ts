import { assets } from '../config/assets';

/**
 * Utility to reliably trigger the download of Md. Rafej Khan's Resume PDF.
 */
export const downloadResumePdf = () => {
  const link = document.createElement('a');
  link.href = assets.resume;
  link.setAttribute('download', 'Md-Rafej-Khan-Resume.pdf');
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  setTimeout(() => {
    document.body.removeChild(link);
  }, 150);
};
