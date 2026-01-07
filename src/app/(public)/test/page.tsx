"use client"
import { PaginationContainer } from "@/app/_components/Pagination"

export default function TestPage() {
  return (
    <PaginationContainer total={100} pageSize={10} initialPage={1} onPageChange={() => {}} maxVisible={10} showFirstLast={true} />
  )
}
