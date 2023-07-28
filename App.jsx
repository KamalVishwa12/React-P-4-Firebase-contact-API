import Navbar from "./components/Navbar";
import {FiSearch} from "react-icons/fi";
import {AiFillPlusCircle} from "react-icons/ai";
import { useEffect, useState } from "react";
import {collection, getDocs} from "firebase/firestore";
import {HiOutlineUserCircle} from "react-icons/hi";


const App = () => {

const [contacts, setContacts] = useState([]);

useEffect(() => {
  const getContacts = async () => {
    try {
      const contactsRef = collection(db, "contacts");
      const contactsSnapshot = await getDocs(contactsRef);
      const contactLists = contactsSnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setContacts(contactLists);
      // console.log(contactsSnapshot);
    } catch (error) {
      // console.log(error);
    }
  };

  getContacts();
}, []);

  return(
    <div className="mx-auto max-w-[370px] px-4">
      <Navbar/>
      <div className="flex gap-2">
      <div className="flex relative items-center flex-grow">
      <FiSearch className="text-white text-3xl absolute ml-1"/>
        <input type="text"
        className="h-10 rounded-md border border-white bg-transparent flex-grow text-white pl-9" />
      </div>
        <AiFillPlusCircle className="text-5xl text-white cursor-pointer"/>
      </div>
      <div>
      {contacts.map((contact) => (
  <div key={contact.id}>
    <HiOutlineUserCircle />
  </div>
))
}</div>
    </div>
  )
};

export default App;