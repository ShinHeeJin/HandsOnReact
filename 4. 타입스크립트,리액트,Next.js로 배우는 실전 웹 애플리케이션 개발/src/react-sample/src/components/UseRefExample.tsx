import React, { useState, useRef } from "react";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const UPLOAD_DELAY = 5000;

const ImageUpload = () => {
  const inputImageRef = useRef<HTMLInputElement | null>(null);

  const fileRef = useRef<File | null>(null);
  const [message, setMessage] = useState<string | null>("파일을 선택해주세요");

  const onClickButton = () => {
    if (inputImageRef.current !== null) {
      inputImageRef.current.click();
    }
  };

  const onChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files !== null && files.length > 0) {
      fileRef.current = files[0]; //  fileRef.current가 변경되도 재렌더링 되지 않는다!!!
      setMessage(`${fileRef.current.name} 업로드할 준비가 되었습니다.`);
    }
  };

  const onClickUpload = async () => {
    if (fileRef.current !== null) {
      // 보통은 여기서 파일을 서버에 업로드 한다.
      await sleep(UPLOAD_DELAY);
      alert("업로드 완료!");
      setMessage(`${fileRef.current.name} 업로드 되었습니다.`);
      fileRef.current = null;
    } else alert("업로드할 이미지를 선택해주세요");
  };
  console.log(`fileRef : ${fileRef.current}`);
  return (
    <div>
      <button onClick={onClickButton}>이미지 업로드</button>
      <input
        ref={inputImageRef}
        accept="image/*"
        onChange={onChangeImage}
        type="file"
        style={{ visibility: "hidden" }}
      />
      <br />
      <button onClick={onClickUpload}>업로드한다.</button>
      <p>{message}</p>
    </div>
  );
};

export default ImageUpload;
