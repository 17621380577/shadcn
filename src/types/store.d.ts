/**
 * @author 龙保江
 * @date 2024-06-05 13:31:31
 * @desc 全局store的类型
 */
declare namespace STORE {
  interface IState {
    user?: API.UserInfo;
    token?: string | '';
    systemConfig?: ISystemConfig;
    menus?: IMenu[];
    faxNumberHistory?: IFaxNumberHistoryItemType[];
    countrys?: ICountryItemType[];
    faxCurrentCountryIndex?: number;
    faxCoverForm?: ICoverFormType;
    /**
     * @author 龙保江
     * @date 2025-02-13 15:39:20
     * @desc 注册成功后跳转到登录页面
     */
    registerSuccess?: false;
    [key: string]: any;
  }
  interface ICoverFormType {
    senderName: string;
    receiverName: string;
    subject: string;
    comments: string;
  }

  interface IAction {
    type: string;
    payload?: any;
  }

  type IDispatch = Dispatch<IAction>;

  type IReducer = (state: IState, action: IAction) => IState;

  type ITheme = 'dark' | 'light';

  type IPlatform = 'web' | 'ios' | 'android' | 'unknown';

  interface ISystemConfig {
    theme: ITheme;
    platform: IPlatform;
    language: LanguageAbbreviationsMapping;
  }
  interface IMenu {
    id: string;
    name: string;
    icon?: JSX.Element | string;
    path: string;
    children?: IMenu[];
    meta?: { [key: string]: any };
    [key: string]: any;
  }

  interface ProviderPropsType {
    children: ReactNode;
    initialValue?: IState;
  }

  interface IFaxNumberHistoryItemType {
    date: string;
    faxNumber: string;
    countryId: string;
  }
  interface ICountryItemType {
    id: string;
    name: string;
    code: string;
    icon: string;
    diallingCode: number;
    /**
     * @author 龙保江
     * @date 2025-02-13 14:05:21
     * @desc 每页消耗的传真点数
     */
    consumptionPointsPerPage: number;
  }
}
