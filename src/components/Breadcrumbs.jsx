import React from "react";
import { Link } from "react-router-dom";
import "./Breadcrumbs.css";

const Breadcrumbs = ({ paths }) => {
  const lastItemIndex = paths.length - 1; // Get the index of the last item

  return (
    <nav aria-label="breadcrumb" className="breadcrumb-top">
      <ol className="breadcrumb">
        {paths.map((path, index) => (
          <React.Fragment key={index}>
            {index < lastItemIndex ? (
              // Render link for all items except the last one
              <>
                <li className="breadcrumb-item ">
                  <Link to={path.href}>{path.name}</Link>
                </li>
                <span className="separator"> / </span>
              </>
            ) : (
              // Render plain text for the last item
              <li
                className="breadcrumb-item active text-[#4575FF]"
                aria-current="page"
              >
                {path.name}
              </li>
            )}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );

  // return (
  //   <nav aria-label="breadcrumb" className="breadcrumb-top">
  //     <ol className="breadcrumb">
  //       {paths.map((path, index) => (
  //         <React.Fragment key={index}>
  //           {index < lastItemIndex ? (
  //             // Render link for all items except the last one
  //             <>
  //               <li className="breadcrumb-item">
  //                 <Link to={path.href}>{path.name}</Link>
  //               </li>
  //               <span className="separator"> / </span>
  //             </>
  //           ) : (
  //             // Render plain text for the last item
  //             <li
  //               className="breadcrumb-item active text-[#4575FF]"
  //               aria-current="page"
  //             >
  //               {path.name}
  //             </li>
  //           )}
  //         </React.Fragment>
  //       ))}
  //     </ol>
  //   </nav>
  // );
};

export default Breadcrumbs;
