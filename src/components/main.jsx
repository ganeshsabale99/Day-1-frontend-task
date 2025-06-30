import React, { useState, useEffect } from "react";
function Main() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=${limit}&page=${page}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [limit, page]);

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
          <div style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
            <div key={index}>
              <img
                style={{ width: "200px", height: "200px" }}
                src={item.image}
                alt={item.title}
              />
              <h4>{item.title}</h4>
              <p>{item.price}</p>
              <p>{item.category}</p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <select
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>

      <div>
        <button onClick={() => setPage(page + 1)}>Next</button>
        <button onClick={() => setPage(page - 1)}> Previous</button>
        <p>Current Page: {page}</p>
      </div>
    </div>
  );
}
export default Main;
