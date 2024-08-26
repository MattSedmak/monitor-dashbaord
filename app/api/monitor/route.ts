import { NextResponse } from 'next/server';

export async function GET() {
  //SchelduleChecks()
  console.log('Checking status...');
  return NextResponse.json({ message: 'hello from Monitor' });
}
