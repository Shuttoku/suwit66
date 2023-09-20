"use client";
import { useState } from "react";
import { Spinner } from "@chakra-ui/react";
import { GlobalStyle } from "@chakra-ui/react";

export default function AddData() {
  const [namebook, setNamebook] = useState();
  const [titlebook, setTitlebook] = useState([]);
  const [typebook, setTypebook] = useState();
  const [authorName, setAuthorName] = useState([]);
  const [picbook, setPicbook] = useState();
  const [yearbook, setYearbook] = useState([]);
  const [waiting, setWaiting] = useState(false);
  async function onSubmit(e) {
    e.preventDefault();
    if (!picbook) return;
    setWaiting(true);
    try {
      const data = new FormData();
      data.append("file", picbook);
      data.append("Namebook", namebook);
      data.append("Titlebook", titlebook);
      data.append("Typebook", typebook);
      data.append("AuthorName", authorName);
      data.append("Year_of_Marriage", yearbook);
      let result = await fetch("/api/upload", {
        method: "POST",
        body: data,
      });
      if (!result.ok) throw new Error(await result.text());
      result = await result.json();
      alert("อัปโหลดสำเร็จ.");
      location.reload();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="adddata">
        <>
          <div className="login-root">
            <div
              className="box-root flex-flex flex-direction--column"
              style={{ minHeight: "100vh", flexGrow: 1 }}
            >
              <div className="loginbackground box-background--white padding-top--64">
                <div className="loginbackground-gridContainer">
                  <div
                    className="box-root flex-flex"
                    style={{ gridArea: "top / start / 8 / end" }}
                  >
                    <div
                      className="box-root"
                      style={{
                        backgroundImage:
                          "linear-gradient(white 0%, rgb(247, 250, 252) 33%)",
                        flexGrow: 1,
                      }}
                    ></div>
                  </div>
                  <div
                    className="box-root flex-flex"
                    style={{ gridArea: "4 / 2 / auto / 5" }}
                  >
                    <div
                      className="box-root box-divider--light-all-2 animationLeftRight tans3s"
                      style={{ flexGrow: 1 }}
                    />
                  </div>
                  <div
                    className="box-root flex-flex"
                    style={{ gridArea: "6 / start / auto / 2" }}
                  >
                    <div
                      className="box-root box-background--blue800"
                      style={{ flexGrow: 1 }}
                    />
                  </div>
                  <div
                    className="box-root flex-flex"
                    style={{ gridArea: "7 / start / auto / 4" }}
                  >
                    <div
                      className="box-root box-background--blue animationLeftRight"
                      style={{ flexGrow: 1 }}
                    />
                  </div>
                  <div
                    className="box-root flex-flex"
                    style={{ gridArea: "8 / 4 / auto / 6" }}
                  >
                    <div
                      className="box-root box-background--gray100 animationLeftRight tans3s"
                      style={{ flexGrow: 1 }}
                    />
                  </div>
                  <div
                    className="box-root flex-flex"
                    style={{ gridArea: "2 / 15 / auto / end" }}
                  >
                    <div
                      className="box-root box-background--cyan200 animationRightLeft tans4s"
                      style={{ flexGrow: 1 }}
                    />
                  </div>
                  <div
                    className="box-root flex-flex"
                    style={{ gridArea: "3 / 14 / auto / end" }}
                  >
                    <div
                      className="box-root box-background--blue animationRightLeft"
                      style={{ flexGrow: 1 }}
                    />
                  </div>
                  <div
                    className="box-root flex-flex"
                    style={{ gridArea: "4 / 17 / auto / 20" }}
                  >
                    <div
                      className="box-root box-background--gray100 animationRightLeft tans4s"
                      style={{ flexGrow: 1 }}
                    />
                  </div>
                  <div
                    className="box-root flex-flex"
                    style={{ gridArea: "5 / 14 / auto / 17" }}
                  >
                    <div
                      className="box-root box-divider--light-all-2 animationRightLeft tans3s"
                      style={{ flexGrow: 1 }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="box-root padding-top--24 flex-flex flex-direction--column"
                style={{ flexGrow: 1, zIndex: 9 }}
              >
                <div className="checkoutBack">
                  <a
                    href="javascript:history.back()"
                    className="cartBack"
                    style={{
                      float: "right",
                      marginRight: "30px",
                    }}
                  >
                    <span className="text">กลับไปหน้าที่แล้ว</span>
                  </a>
                </div>
                
                <div className="formbg-outer mb-5 mt-5">
                  <div className="formbg">
                    <div className="formbg-inner padding-horizontal--48">
                      <span
                        className="padding-bottom--15"
                        style={{
                          fontSize: "20px", 
                        }}
                      >
                        กรอกข้อมูลวรรณคดี
                      </span>
                      <form id="stripe-login" onSubmit={onSubmit}>
                        <div className="field padding-bottom--24">
                          <label>ชื่อวรรณคดี</label>
                          <input
                            type="text"
                            onChange={(e) => setNamebook(e.target.value)}
                          />
                        </div>
                        <div className="field padding-bottom--24">
                          <div className="grid--50-50">
                            <label>เนื้อเรื่องย่อ</label>
                          </div>
                          <textarea
                            type="text"
                            rows={3}
                            style={{
                              width: "100%",
                              borderColor: "white",
                              backgroundColor: "rgba(0,0,0,.03)"
                            }}
                            onChange={(e) => setTitlebook(e.target.value)}
                          />
                        </div>
                        <div className="field padding-bottom--24">
                          <div className="grid--50-50">
                            <label>ประเภท</label>
                          </div>
                          <input
                            type="text"
                            onChange={(e) => setTypebook(e.target.value)}
                          />
                        </div>
                        <div className="field padding-bottom--24">
                          <div className="grid--50-50">
                            <label>ผู้แต่ง</label>
                          </div>
                          <input
                            type="text"
                            onChange={(e) => setAuthorName(e.target.value)}
                          />
                        </div>
                        <div className="field padding-bottom--24">
                          <div className="grid--50-50">
                            <label>ปีที่พิมพ์</label>
                          </div>
                          <input
                            type="text"
                            onChange={(e) => setYearbook(e.target.value)}
                          />
                        </div>
                        <div
                          className=""
                          style={{
                            marginBottom: "20px",
                          }}
                        >
                          <label for="avatar">เลือกรูปภาพ :</label>

                          <input
                            type="file"
                            id="avatar"
                            name="avatar"
                            accept="image/png, image/jpeg"
                            onChange={(e) => setPicbook(e.target.files?.[0])}
                            style={{
                              marginTop: "10px",
                            }}
                          />
                        </div>
                        <div className="field padding-bottom--24 " style={{
                          textAlign: "center"
                        }}>
                          <button className="bg-transparent  hover:bg-blue-500 text-blue-700 font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded" disabled={waiting} type="submit">Submit</button>
                        </div>
                        {waiting && "กำลังอัปโหลด...."}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

        </>
      </div>
    </>
  );
}
