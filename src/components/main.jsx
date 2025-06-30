import React, { useState, useEffect } from "react";
function Main() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    fetch(
      `https://fakestoreapi.com/products?limit=${limit}&page=${page}&q=${text}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [limit, page, text]);

  console.log("data", data);
  console.log("text", text);
  console.log("page", page);
  console.log("limit", limit);

  return (
    <div>
      <div>
        <h1>GS Shop</h1>
        <input
          type="text"
          value={text}
          placeholder="Search..."
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <h1>Product List</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
        }}
      >
        {data.map((item, index) => (
          <div
            style={{
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              padding: "20px",
            }}
          >
            <div key={index}>
              <img
                style={{ width: "200px", height: "200px" }}
                src={item.image}
                alt={item.title}
              />
              <h4>{item.title}</h4>
              <p>${item.price}</p>
              <p>{item.category}</p>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          padding: "20px",
          display: "flex",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        <p>Limit</p>
        <select
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
          style={{width:"50px", padding:"5px"}}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button style={{ width: "100px" }} onClick={() => setPage(page + 1)}>
          Next
        </button>
        <p style={{ padding: "0px 20px" }}>Current Page: {page}</p>
        <button style={{ width: "100px" }} onClick={() => setPage(page - 1)}>
          {" "}
          Previous
        </button>
      </div>
    </div>
  );
}
export default Main;
