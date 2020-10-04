interface IHTMLElementOption {
    className: string;
}
export declare const div: (option: IHTMLElementOption) => HTMLDivElement & IHTMLElementOption;
/**
 * 小数点第何位を指定して使者五入
 * @param num
 * @param fixed 切り上げる桁数
 */
export declare const round: (num: number, fixed?: number) => number;
export {};
//# sourceMappingURL=util.d.ts.map