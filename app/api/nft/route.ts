import { NextRequest, NextResponse } from "next/server";

const API_ALCHEMY = process.env.NEXT_PUBLIC_ALCHEMY_KEY;

export const GET = async (request: NextRequest) => {
    const ownerAddress = request.nextUrl.searchParams.get("ownerAddress");

    if (!ownerAddress) {
        return NextResponse.json({ error: 'ownerAddress is required' }, { status: 400 });
    }

    const response = await fetch(`https://eth-mainnet.g.alchemy.com/nft/v3/${API_ALCHEMY}/getNFTsForOwner?owner=${ownerAddress}&withMetadata=true&pageSize=100`, {
        method: 'GET',
        headers: {
            accept: 'application/json'
        },
    });

    if (!response.ok) {
        throw new Error(`Error fetching NFTs: ${response.statusText}`);
    }

    const data = await response.json();

    return NextResponse.json(data);
}
