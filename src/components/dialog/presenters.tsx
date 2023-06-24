import { MSG_LEVEL, MsgInfo } from "@/constants/msgcode";
import { msgInfoAsObservable, confirm } from "@/domains/usecases/manage-error";
import { useEffect, useState } from "react";
import { MsgDialogView } from "./views";

/**
 * @package
 * @returns 
 */
export const MsgDialogPresenter = () => {
  const [msgInfo, setMsgInfo] = useState<MsgInfo>()
  useEffect(() => {
    const subscriber = msgInfoAsObservable.subscribe((_) => { setMsgInfo(_) });

    // コンポーネント破棄時にイベントリスナー破棄
    return () => subscriber.unsubscribe();
  }, []);

  return (<>
    {msgInfo && msgInfo?.level !== MSG_LEVEL.None && (
      // eslint-disable-next-line react/jsx-no-undef
      <MsgDialogView msgInfo={msgInfo} okCallback={() => confirm()} />
    )}
  </>)
}