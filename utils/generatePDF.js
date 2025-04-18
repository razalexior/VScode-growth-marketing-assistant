import PDFDocument from 'pdfkit';
import getStream from 'get-stream';

export async function generatePDF(data) {
  const doc = new PDFDocument();
  doc.fontSize(14).text(`Business Summary: ${data.summary}\n\n`);
  doc.text('Marketing Channels:\n');
  data.channels.forEach((c) => {
    doc.text(`- ${c.name}: ${c.budget}`);
  });
  doc.text('\nInfluencer Suggestions:\n');
  data.influencers.forEach((i) => {
    doc.text(`- ${i.name} (${i.platform} – ${i.followers})`);
  });
  doc.end();
  const buffer = await getStream.buffer(doc);
  return buffer.toString('base64');
}
