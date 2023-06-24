  /**
   * エラーメッセージ管理ドメイン
   *
   * このファイルでやりたい事:
   * メッセージコードを入れると、エラーレベルとエラーメッセージが返ってくる関数を作りたい。
   * エラーの内容はひとまとめにしたい。
   * 配列で管理すると並び替えが面倒になったり挿入・削除できなくなるので、辞書型で管理したい。
   */

  // メッセージコード
  // USECASEごとがいい？
export const enum MSG_CODE {
    DEFAULT     = 0x00000, // デフォルト
    API         = 0x10000, // API関連
    API_ERROR   = 0x10001,
    APP         = 0x20000, // アプリ関連
    APP_WARNING = 0x20001, // 警告
    APP_INFO    = 0x20002, // 確認
  }

  // メッセージレベル
  export const enum MSG_LEVEL {
    None      = 0, // メッセージ解除
    Info      = 1, // 情報表示メッセージ
    Warning   = 2, // 警告メッセージ
    Error     = 3, // エラーメッセージ
  }

  // メッセージのレベルとテキストを指定する型、この型でメッセージを通知する。
  export type MsgInfo = {
    level: MSG_LEVEL;
    message: string;
  };

  // これは公開しない
  // TODO: MSG_CODEでエラーコードを0x0000とかで書いて、それもセットでメッセージに表示した方が良い？
  const messageDict: Record<MSG_CODE, MsgInfo> = {
    [MSG_CODE.DEFAULT]:     { level: MSG_LEVEL.None, message: '初期値' },
    [MSG_CODE.API]:         { level: MSG_LEVEL.None, message: 'API関連' },
    [MSG_CODE.API_ERROR]:   { level: MSG_LEVEL.Error, message: 'APIエラーダイアログ' },
    [MSG_CODE.APP]:         { level: MSG_LEVEL.None, message: 'APP関連' },
    [MSG_CODE.APP_WARNING]: { level: MSG_LEVEL.Warning, message: '警告ダイアログ' },
    [MSG_CODE.APP_INFO]:    { level: MSG_LEVEL.Info, message: '確認ダイアログ' },
  };

  /**
   * エラーコードをエラーレベルとメッセージに変換する関数
   * @param code
   * @returns msgInfo
   */
  export const getMessageByCode = (code: MSG_CODE): MsgInfo => {
    const msgInfo = messageDict[code];
    return msgInfo;
  };
