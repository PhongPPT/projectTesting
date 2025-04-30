// src/pages/ShowPage.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";

function ShowPage() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    const res = await axios.get("http://localhost:3001/tasks");
    setItems(res.data);
  };

  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:3001/tasks/${id}`);
    fetchData();
  };

  const handleEdit = (item) => {
    navigate("/add", { state: { item } });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Show Items</h1>
      <button>
        {/* <a href="/add">Add data</a> */}
        <Link to="/add" style={{ textDecoration: "none", color: "inherit" }}>
          Add data
        </Link>
      </button>
      <br />
      <br />
      <table className="w-full border border-collapse">
        <thead>
          <tr>
            <th className="border px-2 py-1">Title</th>
            <th className="border px-2 py-1">Type</th>
            <th className="border px-2 py-1">ແຮງມາ</th>
            <th className="border px-2 py-1">ລາຍລະອຽດ</th>
            <th className="border px-2 py-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td className="border px-2 py-1">
                {item.title ? String(item.title) : ""}
              </td>
              <td className="border px-2 py-1">
                {item.type ? String(item.type) : ""}
              </td>
              <td className="border px-2 py-1">
                {item["ແຮງມາ"] ? String(item["ແຮງມາ"]) : ""}
              </td>
              <td className="border px-2 py-1">
                {item["ລາຍລະອຽດ"] ? String(item["ລາຍລະອຽດ"]) : ""}
              </td>
              <td className="border px-2 py-1 space-x-2">
                <button
                  className="text-blue-600"
                  //   onClick={() => handleEdit(item)}
                  onClick={() => {
                    if (
                      window.confirm("Are you sure you want to edit this item?")
                    ) {
                      handleEdit(item);
                    }
                  }}
                >
                  Edit
                </button>
                <button
                  className="text-red-600"
                  //   onClick={() => deleteItem(item.id)}
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you want to delete this item?"
                      )
                    ) {
                      deleteItem(item.id);
                    }
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShowPage;
