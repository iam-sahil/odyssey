import { NextResponse } from 'next/server';
import metaData from '@/content/docs/components/meta.json';

export async function GET() {
  return NextResponse.json(metaData);
}
