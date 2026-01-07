/**
 * @author 龙保江
 * @date 2024-06-05 13:31:31
 * @desc 全局router的类型
 */
declare namespace ROUTER {
  interface IRouters {
    path?: string;
    index?: boolean;
    element?: JSX.Element;
    errorElement?: JSX.Element;
    children?: IRouters[];
    redirect?: string;
  }
}
