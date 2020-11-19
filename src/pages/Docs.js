import DocumentsTable from '../components/DocumentsTable';
import Documents from '../utils/Documents';
// import Navbar from '../components/Navbar';
import React from 'react';
import Form from '../components/Form';
import Footer from '../components/Footer';
import Bot from '../components/Bot';


const Docs = () => {
    // created Documents state for storing Documents array
    const [documents] = React.useState(Documents);
    const [searchTerm, setSearchTerm] = React.useState('');
  
    // receive callback from Navbar and setSearchTerm
    const handleSearch = event => {
      setSearchTerm(event.target.value);
    }
  
    // search employee and return search results
    const searchedDocuments = documents.filter(result => {
      const searchByName = result.name.toLowerCase().includes(searchTerm.toLowerCase());
      const searchByType = result.type.toLowerCase().includes(searchTerm.toLowerCase());
      const searchByStatus = result.status.toLowerCase().includes(searchTerm.toLowerCase());
      const searchBySource = result.source.toLowerCase().includes(searchTerm.toLowerCase());
      const searchByContact = result.contact.toLowerCase().includes(searchTerm.toLowerCase());
      return searchByName || searchByType || searchByStatus || searchBySource || searchByContact;
    })
    return (
      <div>
        <Form onSearch={handleSearch} search={searchTerm} />
        <DocumentsTable documents={searchedDocuments} />
        <Footer/>
        <Bot/>
      </div>
    )
  };

  export default Docs;
