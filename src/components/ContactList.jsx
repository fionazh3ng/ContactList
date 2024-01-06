import React from "react";
import ContactRow from "./ContactRow";
import { useState, useEffect } from "react";

const ContactList = ({ setSelectedContactId }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchContacts();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {contacts.map((contact) => {
          return (
            <ContactRow
              key={contact.id}
              setSelectedContactId={setSelectedContactId}
              contact={contact}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default ContactList;
