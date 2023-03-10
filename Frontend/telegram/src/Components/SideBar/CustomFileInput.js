import React, { useState, useRef } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';


function CustomFileInput() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [cropData, setCropData] = useState('#');

  const cropperRef = useRef(null);

  function handleFileInputChange(event) {
    setSelectedFile(event.target.files[0]);
  }
  function handleCrop() {
    setCropData(cropperRef.current.getCroppedCanvas().toDataURL());
  }

  return (
    <div className="relative flex items-center justify-center">
      {selectedFile ? (
        <div className="relative">

          <Cropper
            ref={cropperRef}
            src={URL.createObjectURL(selectedFile)}
            aspectRatio={1}
            guides={false}
            viewMode={1}
            zoomable={false}
            cropBoxResizable={false}
            cropBoxMovable={false}
            dragMode="move"
            autoCropArea={1}
          />
          <button onClick={handleCrop}>Crop</button>
        </div>
      ) : (
        <label htmlFor="file-input" className="block h-[100px] w-[100px]  px-4 py-2  rounded-full cursor-pointer bg-skin-fill
         dark:bg-skin-fill-inverted ">
          <div className="flex items-center justify-center text-5xl">
          &#x1F4F7;       
          </div>
          <input id="file-input" type="file" onChange={handleFileInputChange} className="sr-only" />
        </label>
      )}
       <div className="relative">
        <img src={cropData} alt="Cropped" />
      </div>
    </div>
  );
}

export default CustomFileInput;
