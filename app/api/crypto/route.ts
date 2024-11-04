import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    const symbol = req.nextUrl.searchParams.get('symbol');

    if (!symbol) {
        return NextResponse.json({ error: 'Symbol is required' }, { status: 400 });
    }

    const res = await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?symbol=${symbol.toUpperCase()}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-CMC_PRO_API_KEY': process.env.CMC_API_KEY || '40ca06ad-e462-4bf4-8e59-09a5b5a16f09' // Use environment variable
        }
    });

    if (!res.ok) {
        const errorData = await res.json();
        return NextResponse.json({ error: errorData.status.error_message }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
}
