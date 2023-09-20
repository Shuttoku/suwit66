export default function Book({ book }) {
  return (
    <div className="">
      <div className="body-flip-card m-4">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={book?.Picbook} alt="Card Front Image"  />
              {/* {book?.Picbook} */}
            </div>
            <div className="flip-card-back">
              <div className="card-content">
                <h4>{book?.Namebook}</h4>
                <h5>{book?.Titlebook}</h5>
                <h5>
                  ประเภท : {book?.Typebook}
                  <br />
                  <h3> ผู้แต่ง : {book?.AuthorName}</h3>
                  <br />
                  ปี่ที่พิมพ์ : {book?.Year_of_Marriage}
                  <br />
                </h5>
                <div className=" text-center  "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
