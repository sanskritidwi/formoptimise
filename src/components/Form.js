import React, { useState } from "react";
import data from "../MOCK_DATA";
import Input from "./Input";
import Select from "./Select";
import Checkbox from "./Checkbox";

function Form() {
  const [formValues, setFormValues] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const visibleData = data.slice(startIndex, endIndex);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  const handleChange = (field, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button key={i} onClick={() => handlePageChange(i)}>
          {i}
        </button>
      );
    }

    return pageNumbers;
  };


  return (
    <>
    <form onSubmit={handleFormSubmit} className="form">
      {visibleData.map((item, index) => {
        console.log(item.attributes);
        switch (item.type) {
          case "input":
            return (
              <Input attributes={item.attributes} onChange={handleChange} />
            );
          case "select":
            return (
              <Select attributes={item.attributes} onChange={handleChange} />
            );

          case "checkbox":
            return (
              <Checkbox attributes={item.attributes} onChange={handleChange} />
            );
          default:
            return null;
        }
      })}
      <button type="submit">Submit</button>
    </form>
    <div className="pagination">
        {currentPage > 1 && (
          <button type="button" onClick={handlePreviousPage}>
            Previous
          </button>
        )}
        {renderPageNumbers()}
        {endIndex < data.length && (
          <button type="button" onClick={handleNextPage}>
            Next
          </button>
        )}
      </div></>
  );
}

export default Form;
