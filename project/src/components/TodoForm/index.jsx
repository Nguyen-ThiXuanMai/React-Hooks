import React, { useState } from "react";
import PropTypes from "prop-types";
//giúp kiểm tra kiểu dữ liệu của các props mà component nhận vào
//tránh những lỗi khó chịu và cải thiện đc tính năng sử dụng component

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onSubmit: null,
};

function TodoForm(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");

  function handleValueChange(e) {
    console.log(e.target.value);
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!onSubmit) return;
    const formValues = {
      title: value, //e.target.value
    };
    onSubmit(formValues);

    //reset form
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleValueChange} />
    </form>
  );
}

export default TodoForm;
