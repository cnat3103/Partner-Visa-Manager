import React from "react";
import { Table, Button } from 'react-bootstrap';

const useSortableData = (documents, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...documents];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [documents, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { documents: sortedItems, requestSort, sortConfig };
};

// EmployeesTable returns the table
const DocumentsTable = (props) => {
  const { documents, requestSort, sortConfig } = useSortableData(props.documents);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th><Button 
          onClick={() => requestSort('id')}
          className={getClassNamesFor('id')}
          >ID</Button></th>
          <th><Button 
          onClick={() => requestSort('name')}
          className={getClassNamesFor('name')}
          >Name</Button></th>
          <th><Button 
          onClick={() => requestSort('type')}
          className={getClassNamesFor('type')}
          >Type</Button></th>
          <th><Button 
          onClick={() => requestSort('status')}
          className={getClassNamesFor('status')}
          >Value</Button></th>
          <th><Button 
          onClick={() => requestSort('source')}
          className={getClassNamesFor('source')}
          >Source</Button></th>
          <th>Contact</th>
        </tr>
      </thead>
      <tbody>
        {documents.map(document => {
          return (
            <tr key={document.id}>
              <td>{document.id}</td>
              <td>{document.name}</td>
              <td>{document.type}</td>
              <td>{document.status}</td>
              <td>{document.source}</td>
              <td>{document.contact}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  );
}

export default DocumentsTable;