import { useState } from "react"
import { Button } from "../ui/button";


const FileUploader = () => {
  const [ fileUrl, setFileUrl ] = useState('');

  return (
    <div className="flex flex-center flex-col bg-dark-3 rounded-xl cursor-pointer">
      {fileUrl ? (
        <div>

        </div>
      ) : (
        <div className="file_uploader-box">
         
         <img 
          src="/assets/icons/file-upload.svg" 
          width={96}
          alt="file-upload"
          />

          <h3 className="base-medium text-light-2 mb-2 mt-6">Drag photo here</h3>

          <p className="text-light-4 small-regular mb-6">SVG, PNG, JPG</p>
      

          <Button className="shad_button_dark_4">
            Select from computer
          </Button>
        </div>
      )}
    </div>
  )
}

export default FileUploader
