import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import "./Category.scss";
import { createCategory, createListSubcategory,} from "../../../services/CategoryService";

const ModalAddCategory = (props) => {
  const { show, handleClose, handleUpdateTable } = props;
  const [categoryName, setCategoryName] = useState("");
  const [categoryImage, setCategoryImage] = useState(null);

  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddItem();
    }
  };

  const handleCheckboxChange = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const handleFileChange = (event) => {
    console.log("event ", event);
    const file = event.target.files[0];
    if (file) {
      setCategoryImage(file);
    }
  };

  const handleSaveCategory = async () => {
    if (categoryImage) {
      let res = await createCategory(categoryName, categoryImage);
      console.log(" items: ", items);
      console.log(" res:", res);
      if (res && res.data.id) {
        // success
        if (items.length > 0) {
          let response = await createListSubcategory(res.data.id, items);
          if (response && response.data) {
            handleClose();
            setCategoryName("");
            setCategoryImage(null);
            setInputValue("");
            setItems([]);
            toast.success("Thêm danh mục thành công");
            handleUpdateTable({ categoryName: categoryName, id: res.id });
          }
        } else {
          handleClose();
          setCategoryName("");
          setCategoryImage(null);
          setInputValue("");
          setItems([]);
          toast.success("Thêm danh mục thành công");
          handleUpdateTable({ categoryName: categoryName, id: res.id });
        }
      } else {
        // error
        toast.error("Có lỗi xuất hiện ...");
      }
    } else {
      toast.error("Vui lòng chọn hình ảnh");
    }
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Thêm mới danh mục</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="body-add-new">
            <form>
              <div className="mb-3">
                <label className="form-label">Tên danh mục</label>
                <input
                  type="text"
                  className="form-control"
                  value={categoryName}
                  onChange={(event) => setCategoryName(event.target.value)}
                />
              </div>

              <label className="form-label">Danh mục con</label>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nhập tên danh mục con"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                />
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={handleAddItem}
                >
                  <i class="fa-solid fa-circle-plus"></i>
                </button>
              </div>

              <ul className="list-group">
                {items.map((item, index) => (
                  <li className="list-group-item" key={`subcategory-${index}`}>
                    <input
                      className="form-check-input me-1"
                      type="checkbox"
                      value={item}
                      id={`checkbox-${index}`}
                      onChange={() => handleCheckboxChange(index)}
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`checkbox-${index}`}
                    >
                      {item}
                    </label>
                  </li>
                ))}
              </ul>

              <div className="mb-3">
                <label className="form-label">Chọn hình ảnh</label>
                <input
                  type="file"
                  className="form-control"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>
              {categoryImage && (
                <div>
                  <h6>Hình ảnh đã chọn:</h6>
                  <img
                    src={URL.createObjectURL(categoryImage)}
                    alt="Selected"
                    style={{ width: "80px", height: "80px", marginTop: "10px" }}
                  />
                </div>
              )}
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={() => handleSaveCategory()}>
            Lưu
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalAddCategory;
