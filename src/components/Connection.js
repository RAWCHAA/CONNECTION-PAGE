import React, { useState } from "react";
import Navbar from "./Navbar";
import $ from "jquery";

export default function Connection() {
  const [name, setName] = useState("");
  const [purpose, setPurpose] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
      <Navbar />
      <div id="container">
        <h1>Lets Link Up!!!</h1>
        <div className="underline"></div>
        <div className="icon_wrapper"></div>
        <form action="#" method="post" id="contact_form">
          <div className="photo">
            <fieldset>
              <label>Show Your Face</label>
              <input
                type="file"
                name="photo"
                id="photo"
                onchange="loadPhoto(event);"
              />
              <img className="preview" id="preview" alt="" />
            </fieldset>
          </div>
          <div className="name">
            <label for="name"></label>
            <input
              type="text"
              placeholder="Enter name."
              name="name"
              id="name_input"
              required
            />
          </div>
          <div className="email">
            <label for="email"></label>
            <input
              type="email"
              placeholder="Enter email."
              name="email"
              id="email_input"
              required
            />
          </div>
          <div className="url">
            <label for="url"></label>
            <input
              type="text"
              placeholder="Enter web page"
              name="url"
              id="url_input"
              required
            />
          </div>
          <div className="telephone">
            <label for="name"></label>
            <input
              type="text"
              placeholder="My number is"
              name="telephone"
              id="telephone_input"
              required
            />
          </div>
          <div className="subject">
            <label for="subject"></label>
            <select
              placeholder="Subject Matter"
              name="subject"
              id="subject_input"
              required
            >
              <option disabled hidden selected>
                Subject Matter
              </option>
              <option>I'd like to start a project</option>
              <option>I'd like to ask a question</option>
              <option>I'd like to make a proposal</option>
            </select>
          </div>
          <div className="message">
            <label for="message"></label>
            <textarea
              name="message"
              placeholder="Message"
              id="message_input"
              cols="30"
              rows="5"
              required
            ></textarea>
          </div>
          <div className="submit">
            <input type="submit" value="Send Message" id="form_button" />
          </div>
        </form>
      </div>
    </div>
  );
}
