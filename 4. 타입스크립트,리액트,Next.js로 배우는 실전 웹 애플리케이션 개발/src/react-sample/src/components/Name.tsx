import React from "react";

const Name = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <label htmlFor="name">이름</label>
      <input type="text" id="name" className="input-name" onChange={onChange} />
    </div>
  );
};

export default Name;
