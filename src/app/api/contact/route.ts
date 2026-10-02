import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.json(
    {
      message: 'Contact form endpoint placeholder for phase 2.',
    },
    {
      status: 501,
    },
  );
}
