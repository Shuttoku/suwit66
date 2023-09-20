"use client"
/* eslint-disable @next/next/no-img-element */
import Book from "../../components/book";
import { useEffect, useState } from "react";


// export async function getServerSideProps(){
//   const res = await fetch("api/books");
//   const data = await res.json();

//   return {
//     props: {data},
//   }
// }

export default function Home() {
  const [b, setB] = useState([]);
  const [book,setBook] = useState([]);
  useEffect( async () => {
    let data = await fetch("/api/books");
    data = await data.json();
    setBook(data);
    setB(data);
  },[])
  const onSearch = (text) => {
    const data = book.filter((m) => m.Namebook.toLowerCase().includes(text));
    setB(data);
  };

  return (
    <>
    
      <div
        className=""
        style={{
          backgroundColor: "white",
        }}
      >
        <header>
          <div className="overlay">
            <h1>วรรณกรรมไทย</h1>
            <div
              className=""
              style={{
                textAlign: "center",
              }}
            >
              <h2>วรรณกรรมคืออะไร </h2>
              <p>
                วรรณกรรมหรือวรรณคดี คือ งานเขียนที่แต่งขึ้นทุกชนิด
                ทั้งประเภทร้อยแก้วและร้อยกรอง โดยมีคุณค่าทาง “วรรณศิลป์”
                ที่ทำให้งานเขียนนั้นเป็นวรรณกรรม <br />
                ซึ่งแตกต่างจากงานเขียนประเภทอื่น ๆ
                วรรณกรรมเป็นความหมายกว้างที่หมายถึง งานเขียนทุกประเภท
                เมื่อมีการประเมินค่าจึงมีการแบ่งประเภทเป็นวรรณกรรมและวรรรคดี
              </p>
              <div className="adddata">
              <button><a className="link" href="/adddata">
              เพิ่มวรรณกรรม
                </a></button>
              </div>
            </div>
          </div>
        </header>

        <div className="container">
          <form className="search-bar">
            <input
              name="search"
              id="search"
              className="form-control search"
              type="text"
              placeholder="ค้นหา วรรณกรรมไทยที่คุณสนใจ..."
              onChange={(e) => onSearch(e.currentTarget.value)}
            />
          </form>
        </div>
        <div className="book-list d-flex flex-wrap">
          {b ? b.map((index, key) => <Book book={index} key={key} />) : null}
        </div>
      
<div className="up">
  
<button>
        <a href="#" >
        <img
          src="/pic/up-arrow.png"
          style={{
            width: "30px",
          }}
        />

        </a>
    </button>
</div>

      <div
        className="footer"
        style={{
          backgroundColor: "#e27821",
          height: "auto",
          textAlign: "center",
          padding: "15px",
        }}
      >
        <p>จัดทำโดย</p>
        <h6>นางสาวกรรณธิดากร ก้อนทอง 630406400562</h6>
        <h6>นางสาววรดา จินดาวงศ์ 630406404764</h6>

      </div>
      </div>
    </>
  );
}
