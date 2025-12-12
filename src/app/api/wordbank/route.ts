import {NextRequest, NextResponse} from "next/server";
import pool from "../../../lib/db";

export const GET = (request: Request) => {
    const words = ["hello", "world"];

    return NextResponse.json(words, {status: 200});
}

export const POST = async (request: NextRequest) => {
    try {
        const word = await request.json();
        console.log("***word in POST endpoint***", word);

        const result = await pool.query(`INSERT INTO words (word)
                                         VALUES ($1)
                                         RETURNING *`, [word]);
        return NextResponse.json({success: true, data: result.rows[0]})
    } catch (err) {
        console.log(err);
        // @ts-ignore
        return NextResponse.json({error: err.message}, {status: 500})
    }
}