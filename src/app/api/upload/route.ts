import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import pool from "../../../../service/database";
export async function POST(req:NextRequest){
    const data = await req.formData();
    const file: File | null = data.get('file') as unknown as File
    
    if(!file){
        return NextResponse.json({success: false})
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const path = `./public/upload/${file.name}`
    const pathForDB = `/upload/${file.name}`
    await writeFile(path,buffer);

    const Namebook = data.get("Namebook");
    const Titlebook = data.get('Titlebook');
    const Typebook = data.get('Typebook')
    const AuthorName = data.get('AuthorName')
    const Year_of_Marriage = data.get('Year_of_Marriage')
    const allData = {Namebook,Titlebook,Typebook,AuthorName,Year_of_Marriage,Picbook: pathForDB}
    const query = `INSERT INTO book (Namebook,Titlebook,Typebook,AuthorName,Picbook,Year_of_Marriage) 
    VALUES ('${Namebook}','${Titlebook}','${Typebook}','${AuthorName}','${pathForDB}','${Year_of_Marriage}')`;
    const rows = await pool.promise().query(query);
    return NextResponse.json({success: true,rows})
}
