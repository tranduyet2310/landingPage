import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import "./Category.scss";
import { updateCategory, updateCategoryInfo, updateListSubcategory,} from "../../../services/CategoryService";

const ModalEditCategory = (props) => {
  const { show, handleClose, dataCategoryEdit, handleEditCategoryFromModal } =
    props;
  const [categoryName, setCategoryName] = useState("");
  const [categoryImage, setCategoryImage] = useState(null);

  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([{}]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, { id: 0, subcategoryName: inputValue }]);
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

  const handleEditCategory = async () => {
    console.log(">>> check items, ",items)
    if (isString(categoryImage)) {
      let res = await updateCategoryInfo(dataCategoryEdit.id, categoryName);
      if (res && res.data.id) {
        let response = await updateListSubcategory(res.data.id, items);
        if (response && response.data.successful) {
          handleClose();
          toast.success("Cập nhật danh mục thành công");
          handleEditCategoryFromModal({
            categoryName: categoryName,
            id: res.id,
          });
        } else {
          // error
          toast.error("Có lỗi xuất hiện ...");
        }
      } else {
        // error
        toast.error("Có lỗi xuất hiện ...");
      }
    } else {
      let res = await updateCategory(
        dataCategoryEdit.id,
        categoryName,
        categoryImage,
        true
      );
      if (res && res.data.id) {
        let response = await updateListSubcategory(res.data.id, items);
        if (response && response.data.successful) {
          handleClose();
          toast.success("Cập nhật danh mục thành công");
          handleEditCategoryFromModal({
            categoryName: categoryName,
            id: res.id,
          });
        } else {
          // error
          toast.error("Có lỗi xuất hiện ...");
        }
      } else {
        // error
        toast.error("Có lỗi xuất hiện ...");
      }
    }
  };

  useEffect(() => {
    if (show) {
      setCategoryName(dataCategoryEdit.categoryName);
      setCategoryImage(dataCategoryEdit.categoryImage);

      let subCategoryList = dataCategoryEdit.subCategoryList;
      let subCategoryNameList = subCategoryList.map((item) => ({
        id: item.id,
        subcategoryName: item.subcategoryName,
      }));
      setItems(subCategoryNameList);
    }
  }, [dataCategoryEdit]);

  const isString = (value) => {
    return typeof value === "string";
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
          <Modal.Title>Cập nhật danh mục</Modal.Title>
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
                  <li
                    className="list-group-item"
                    key={`subcategory-${index.subcategoryName}`}
                  >
                    <input
                      className="form-check-input me-1"
                      type="checkbox"
                      value={item.subcategoryName}
                      id={`checkbox-${index.subcategoryName}`}
                      onChange={() => handleCheckboxChange(index)}
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`checkbox-${index.subcategoryName}`}
                    >
                      {item.subcategoryName}
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
                    src={
                      isString(categoryImage)
                        ? categoryImage
                        : URL.createObjectURL(categoryImage)
                    }
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
          <Button variant="primary" onClick={() => handleEditCategory()}>
            Cập nhật
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalEditCategory;
