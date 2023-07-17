const QRCode = require('qrcode');

async function generateQRCode(url) {
  try {
    const qrCodeDataUrl = await QRCode.toDataURL(url);
    return qrCodeDataUrl;
  } catch (error) {
    throw new Error('Failed to generate QR code');
  }
}

module.exports = {
  generateQRCode,
};
