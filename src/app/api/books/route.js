import { NextResponse } from "next/server";
import pool from "../../../../service/database";
export async function GET(){
    const query = "SELECT * FROM book";
    try{
        const [rows] = await pool.promise().query(query);
        return NextResponse.json(rows);
    }catch (error){
        return NextResponse.json({ message: 'Internal Server Error' });
    }
}