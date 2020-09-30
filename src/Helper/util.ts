//*****************************************************************************
// ユーティリティ
// 雑多な便利関数群を定義するところ
//*****************************************************************************
interface IHTMLElementOption {
  className:string
};

export const div = (option:IHTMLElementOption) => 
{
  const elm = document.createElement('div');
  return Object.assign(elm, option);
}