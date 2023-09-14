import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// axios.defaults.baseUrl = "http://localhost:8080";

const EditProduct = () => {
  const [product, setProduct] = useState({});
  const params = useParams();

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    handleEdit(product);
  };

  const handleEdit = async (product) => {
    const res = await axios.get(
      `http://localhost:4000/products/${params.id}`,
      product
    ); // In axios 2nd parameters is OBJECT that i want to send

    console.log(res);
  };

  useEffect(() => {
    console.log(params);
    handleEdit();
  }, []);

  return (
    <form className="form-horizontal" onSubmit={handleSubmit}>
      <fieldset>
        {/* Form Name */}
        <legend> Edit Product</legend>
        {/* Text input*/}
        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="title">
            Title
          </label>
          <div className="col-md-4">
            <input
              id="title"
              name="title"
              type="text"
              placeholder="title"
              className="form-control input-md"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="thumbnail">
            Thumbnail
          </label>
          <div className="col-md-4">
            <input
              id="thumbnail"
              name="thumbnail"
              type="text"
              placeholder="thumbnail"
              className="form-control input-md"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="price">
            Price
          </label>
          <div className="col-md-4">
            <input
              id="price"
              name="price"
              type="number"
              placeholder="price"
              className="form-control input-md"
              onChange={handleChange}
            />
          </div>
        </div>
        {/* Select Basic */}
        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="category">
            Category
          </label>
          <div className="col-md-4">
            <select
              id="category"
              name="category"
              className="form-control"
              onChange={handleChange}
            >
              <option value="">Choose</option>
              <option value="smartphone">SmartPhone</option>
              <option value="laptops">Laptops</option>
            </select>
          </div>
        </div>
        {/* Select Basic */}
        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="brand">
            Brand
          </label>
          <div className="col-md-4">
            <select
              id="brand"
              name="brand"
              className="form-control"
              onChange={handleChange}
            >
              <option value="">Choose</option>
              <option value="apple">Apple</option>
              <option value="samsung">SamSung</option>
            </select>
          </div>
        </div>
        {/* Text input*/}
        <div className="form-group">
          <label
            className="col-md-4 control-label"
            htmlFor="discountPercentage"
          >
            Discount
          </label>
          <div className="col-md-4">
            <input
              id="discountPercentage"
              name="discountPercentage"
              type="number"
              placeholder="discountPercentage"
              className="form-control input-md"
              onChange={handleChange}
            />
            <span className="help-block">help</span>
          </div>
        </div>
        {/* Button */}
        <div className="form-group">
          <div className="col-md-4">
            <button
              id="singlebutton"
              name="singlebutton"
              className="btn btn-primary"
              onClick={() => console.log("product updated")}
            >
              Add
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default EditProduct;
// 07:50:30
