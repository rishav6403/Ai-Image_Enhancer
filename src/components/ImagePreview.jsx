import React from "react";
import Loading from "./Loading";

const ImagePreview = (props) => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl ">

      {/* Original Image */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full h-auto">
        <h2 className="text-white font-semibold bg-blue-800 py-2 text-center">
          Original Image
        </h2>
        {props.uploaded ? <img
              src={props.uploaded}
              alt=""
              className="object-contain w-full h-auto"
            />  :<div className="h-96 bg-gray-200 flex justify-center items-center font-semibold text-gray-400">
            No image uploaded
          </div> }
      </div>


      {/* Enhanced Image */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden h-auto w-full ">
        <h2 className="text-white font-semibold bg-green-700 py-2 text-center">
          Enhanced Image
        </h2>
        {props.enhanced &&
          !props.loading &&(
            <img
              src={props.enhanced}
              alt=""
              className="object-contain w-full h-auto"
            />
          )}
          {props.loading ? <Loading/> :  <div className="h-full bg-gray-200 flex justify-center items-center font-semibold text-gray-400">
          No Enhanced Image
        </div>}
       
      </div>
    </div>
  );
};

export default ImagePreview;
