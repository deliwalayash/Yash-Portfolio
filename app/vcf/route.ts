import { NextResponse } from "next/server";

export async function GET() {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "FN:Yash Deliwala",
    "N:Deliwala;Yash;;;",
    "ORG:Sure Marketing",
    "TITLE:Digital Marketing Consultant",
    "TEL;TYPE=CELL:+919712952456",
    "URL:https://suremarketing.in",
    "NOTE:Google Ads, Social Media Marketing, Website Design, Mobile App Development",
    "END:VCARD"
  ].join("\r\n");

  return new NextResponse(vcard, {
    status: 200,
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="Yash-Deliwala.vcf"',
    },
  });
}
