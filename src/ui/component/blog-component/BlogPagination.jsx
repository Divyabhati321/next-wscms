import React from "react";
import {Pagination} from "@nextui-org/react";

const BlogPagination = ({totalPages, handlePageChange, currentPage, device}) => {
  
  return (
    <div className="w-full flex justify-center pt-10 lg:pt-14">
        <Pagination 
        classNames={{
            wrapper: "",
            item: " text-sm sm:text-base rounded-lg bg-[#066ac41a] text-[#066AC9] font-medium !size-10 hover:!bg-[#066ac94d]",
            cursor:"text-base rounded-lg text-white font-medium !size-10",
            prev:"bg-[#066ac41a] text-[#066AC9] font-medium text-sm sm:text-base rounded-lg !size-10 hover:!bg-[#066ac94d]",
            next:"bg-[#066ac41a] text-[#066AC9] font-medium text-sm sm:text-base rounded-lg !size-10 hover:!bg-[#066ac94d]",
        }}
        page={currentPage}
        onChange={handlePageChange}
        variant="flat" loop         
        showControls
        siblings={device == 'desktop' ? 1 : 0}
         color="primary" total={totalPages} initialPage={1}  />        
    </div>
  );
}


export default BlogPagination