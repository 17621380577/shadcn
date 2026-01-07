/**
 * @author 龙保江
 * @date 2024-06-05 10:31:02
 * @desc 请求返回格式
 */
declare namespace API {
  /**
   * 接口响应统一返回格式
   */
  interface IResponse<T = any> {
    /**
     * int，200代表成功，非200代表失败
     */
    code: number;
    /**
     * String，异常时的异常消息
     */
    error: string;
    /**
     * Object，返回数据
     */
    data: T;
  }

  /**
   * 分页通用返回格式
   */
  interface IPage<T = any> {
    /**
     * long，数据总条数
     */
    total: number;
    /**
     * int，当前页码
     */
    currentPage: number;
    /**
     * int，每页数据条数
     */
    pageSize: number;
    /**
     * List，数据详情
     */
    items: T[];
  }
  interface IGeneralSearchParams {
    pageSize: number;
    pageNumber: number;
    /**
     * @author 龙保江
     * @date 2025-01-13 17:35:10
     * @desc 排序字段
     */
    sort: string;
    /**
     * @author 龙保江
     * @date 2025-01-13 17:34:57
     * @desc 1：升序，-1：降序
     */
    sortOrder: 1 | -1;
  }
}
