import { MsgInfo } from "@/constants/msgcode";

/**
 * @package
 * @param param0 
 * @returns 
 */
export const MsgDialogView = ({ msgInfo, okCallback }: { msgInfo: MsgInfo; okCallback: () => void }) => {
  return (
    <>
      <div className={"border-2 border-red-200 p-4 flex flex-col"}>
        <p>エラーレベル: {msgInfo.level}</p>
        <p>エラーダイアログ: {msgInfo.message}</p>
        <button onClick={okCallback} className="bg-blue-200 rounded-xl px-4 py-2 ">確認</button>
      </div>
    </>
  )
}