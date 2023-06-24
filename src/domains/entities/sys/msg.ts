import { MSG_CODE, MsgInfo, getMessageByCode } from "@/constants/msgcode";
import { getMaxListeners } from "process";
import { BehaviorSubject } from "rxjs";

/**
 * エラー状態管理ステートクラス
 */
export default class MsgState {
  private static _instance: MsgState;
  private _msgInfo: MsgInfo;
  public msgInfoAsObservable: BehaviorSubject<MsgInfo>;
  constructor() {
    this._msgInfo = getMessageByCode(MSG_CODE.DEFAULT);
    this.msgInfoAsObservable = new BehaviorSubject<MsgInfo>(this._msgInfo);
  }

  public static get instance() {
    if (!this._instance) {
      this._instance = new MsgState();
    }
    return this._instance;
  }

  public setMessage(code: MSG_CODE) {
    let msgInfo = getMessageByCode(code);
    if (msgInfo === undefined) {
      msgInfo = getMessageByCode(MSG_CODE.DEFAULT);
    }
    this._msgInfo = msgInfo;
    this.msgInfoAsObservable.next(msgInfo);
  }

  public clear() {
    const msgInfo = getMessageByCode(MSG_CODE.DEFAULT);
    this._msgInfo = msgInfo;
    this.msgInfoAsObservable.next(msgInfo);
  }
}