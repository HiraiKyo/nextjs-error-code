import { MSG_CODE } from "@/constants/msgcode";
import MsgState from "../entities/sys/msg";

export const msgInfoAsObservable = MsgState.instance.msgInfoAsObservable;

export const setError = (msgCode?: MSG_CODE) => {
  MsgState.instance.setMessage(MSG_CODE.API_ERROR);
}

export const setWarning = (msgCode?: MSG_CODE) => {
  MsgState.instance.setMessage(MSG_CODE.APP_WARNING);
}

export const setInfo = (msgCode?: MSG_CODE) => {
  MsgState.instance.setMessage(MSG_CODE.APP_INFO);
}

export const confirm = () => {
  MsgState.instance.clear();
}

export const cancel = () => {
  MsgState.instance.clear();
}