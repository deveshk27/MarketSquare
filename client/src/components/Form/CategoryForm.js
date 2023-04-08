import React from "react";

const CategoryForm = ({handleSubmit,value,setValue}) => {
  return (
    <>
      <form on onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter new category"
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit" className="btn btn-primary rehnede">
          Submit
        </button>
      </form>
    </>
  );
};

export default CategoryForm;
