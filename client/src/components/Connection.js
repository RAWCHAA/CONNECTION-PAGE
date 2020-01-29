import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import $ from "jquery";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

export default function Connection() {
  const [name, setName] = useState("");
  const [sub, setSub] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");
  const [photo, setPhoto] = useState("");

  const params = useParams();
  const history = useHistory();

  // useEffect(() => {
  //   const getUser = async () => {
  //     const res = await axios.get(`/api/user/${params.id}`);
  //     setEmail(res.data.email);
  //     setName(res.data.displayName);
  //     setPhoto(res.data.image);
  //   };
  //   getUser();
  // }, []);

  const handleUpload = async id => {
    const formData = new FormData();
    formData.append("file", photo);
    const res = await axios.post(`/api/image/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    setPhoto(res.data);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const res = await axios.post("/api/user", {
      email,
      name,
      webPage: url,
      number: tel,
      subject: sub,
      message: message
    });

    const user = res.data;
    handleUpload(user._id);

    history.push("/Contacts");
  };

  return (
    <div>
      <Navbar />
      <div id="container">
        <h1>Lets Link Up!!!</h1>
        <div className="underline"></div>
        <div className="icon_wrapper"></div>
        <form
          onSubmit={handleSubmit}
          action="#"
          method="post"
          id="contact_form"
        >
          <div className="photo">
            <fieldset>
              <label>Show Your Face</label>
              <input
                type="file"
                name="photo"
                id="photo"
                onChange={e => {
                  setPhoto(e.target.files[0]);
                }}
              />
              {photo ? (
                <img
                  className="preview"
                  id="preview"
                  alt=""
                  src={URL.createObjectURL(photo)}
                />
              ) : null}
            </fieldset>
          </div>
          <div className="name">
            <label htmlFor="name"></label>
            <input
              type="text"
              placeholder="Enter name."
              name="name"
              id="name_input"
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
          <div className="email">
            <label htmlFor="email"></label>
            <input
              type="email"
              placeholder="Enter email."
              name="email"
              id="email_input"
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="url">
            <label htmlFor="url"></label>
            <input
              type="text"
              placeholder="Enter Social Site"
              name="url"
              id="url_input"
              onChange={e => setUrl(e.target.value)}
            />
          </div>
          <div className="telephone">
            <label htmlFor="tel"></label>
            <input
              type="text"
              placeholder="My number is"
              name="tel"
              id="tel_input"
              onChange={e => setTel(e.target.value)}
              required
            />
          </div>
          <div className="subject">
            <label htmlFor="subject"></label>
            <select
              placeholder="Subject Matter"
              name="sub"
              id="sub_input"
              onChange={e => setSub(e.target.value)}
              required
              defaultValue=""
            >
              <option disabled hidden value="">
                Subject Matter
              </option>
              <option value="start a project">
                I'd like to start a project
              </option>
              <option value="ask a question">I'd like to ask a question</option>
              <option value="make a proposal">
                I'd like to make a proposal
              </option>
            </select>
          </div>
          <div className="message">
            <label htmlFor="message"></label>
            <textarea
              name="message"
              placeholder="Message"
              id="message_input"
              cols="30"
              rows="5"
              onChange={e => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="submit">
            <input type="submit" value="Send" id="form_button" />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
