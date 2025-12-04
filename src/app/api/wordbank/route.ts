import {NextResponse} from "next/server";

export const GET = (request: Request) => {
    const words = ["hello", "world"];

    return NextResponse.json(words, {status: 200});
}