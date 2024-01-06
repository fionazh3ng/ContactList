import React from "react";
import { useState, useEffect } from "react";
import ContactRow from "./ContactRow";

const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
  const [contact, setContact] = useState({});
  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${selectedContactId}`
        );
        const data = await response.json();
        setContact(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchContact();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan="3">Selected Contact:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{contact.name}</td>
          </tr>
          <tr>
            <td>{contact.email}</td>
          </tr>
          <tr>
            <td>{contact.phone}</td>
          </tr>
          <tr>
            <td>{contact.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SelectedContact;
