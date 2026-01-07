import React, { useMemo, useState, useCallback } from "react"  
import {  
  Pagination,  
  PaginationContent,  
  PaginationEllipsis,  
  PaginationItem,  
  PaginationLink,  
  PaginationNext,  
  PaginationPrevious,  
} from "@/components/ui/pagination"  

type Props = {  
  total: number  
  pageSize: number  
  initialPage?: number  
  onPageChange?: (page: number) => void  
  maxVisible?: number // 可选，保留用于扩展  
  showFirstLast?: boolean // 可选，是否显示首页/末页按钮  
}  

function usePagination(total: number, pageSize: number, currentPage: number) {  
  const totalPages = Math.max(1, Math.ceil(total / pageSize))  

  // 生成带省略号的页码序列  
  const pages = useMemo<(number | string)[]>(() => {  
    const result: (number | string)[] = []  
    if (totalPages <= 7) {  
      for (let i = 1; i <= totalPages; i++) result.push(i)  
    } else {  
      const around = 1 // 当前页左右各显示1页  
      const start = Math.max(2, currentPage - around)  
      const end = Math.min(totalPages - 1, currentPage + around)  

      result.push(1)  
      if (start > 2) result.push("…")  
      for (let i = start; i <= end; i++) result.push(i)  
      if (end < totalPages - 1) result.push("…")  
      result.push(totalPages)  
    }  
    return result  
  }, [totalPages, currentPage])  

  return { totalPages, pages }  
}  

/**  
 * 封装一个“自带分页逻辑”的组件  
 * 外部只需要提供 total/pageSize、initialPage、onPageChange  
 */  
export function PaginationContainer({  
  total,  
  pageSize,  
  initialPage = 1,  
  onPageChange,  
  maxVisible = 4,  
  showFirstLast = false,  
}: Props) {  
  const [currentPage, setCurrentPage] = useState<number>(initialPage)  

  const { totalPages, pages } = usePagination(total, pageSize, currentPage)  

  const handlePageChange = useCallback(  
    (pageOrIndex: number) => {  
      const clamped = Math.max(1, Math.min(totalPages, pageOrIndex))  
      if (clamped !== currentPage) {  
        setCurrentPage(clamped)  
        onPageChange?.(clamped)  
      }  
    },  
    [currentPage, totalPages, onPageChange]  
  )  

  const goPrev = useCallback(() => {  
    handlePageChange(currentPage - 1)  
  }, [currentPage, handlePageChange])  

  const goNext = useCallback(() => {  
    handlePageChange(currentPage + 1)  
  }, [currentPage, handlePageChange])  

  return (  
    <Pagination currentPage={initialPage} aria-label="pagination" total={total} pageSize={pageSize} onPageChange={handlePageChange}>  
      <PaginationContent>  
        <PaginationItem>  
          <PaginationPrevious onClick={goPrev} />  
        </PaginationItem>  

        {pages.map((p, idx) =>  
          typeof p === "number" ? (  
            <PaginationItem key={idx}>  
              <PaginationLink  
                href="#"  
                isActive={p === currentPage}  
                onClick={(e) => {  
                  e.preventDefault()  
                  handlePageChange(p)  
                }}  
              >  
                {p}  
              </PaginationLink>  
            </PaginationItem>  
          ) : (  
            <PaginationItem key={idx}>  
              <PaginationEllipsis />  
            </PaginationItem>  
          )  
        )}  

        <PaginationItem>  
          <PaginationNext onClick={goNext} aria-label="Go to next page" />  
        </PaginationItem>  
      </PaginationContent>  
    </Pagination>  
  )  
}  