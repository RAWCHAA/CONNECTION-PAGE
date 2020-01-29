import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";

export default function Contacts() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const res = await axios.get("/api/user");
      setUsers(res.data);
    };
    loadUsers();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="jar">
        <h1>Contacts</h1>
        {users.map(user => (
          <div>
            {user.image ? (
              <img
                src={`data:${user.image.mimeType};base64,${new Buffer(
                  user.image.data
                ).toString("base64")}`}
                alt="user"
                width="100"
                className="trap"
              />
            ) : null}
            <h2>{user.name}</h2>
            <h2>{user.subject}</h2>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
