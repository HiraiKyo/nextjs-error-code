import { MsgDialogPresenter } from '@/components/dialog'
import { MsgInfo } from '@/constants/msgcode'
import { msgInfoAsObservable, setError, setInfo, setWarning } from '@/domains/usecases/manage-error'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [msgInfo, setMsgInfo] = useState<MsgInfo>()
  useEffect(() => {
    const subscriber = msgInfoAsObservable.subscribe((_) => { setMsgInfo(_) });

    // コンポーネント破棄時にイベントリスナー破棄
    return () => subscriber.unsubscribe();
  }, []);

  const buttonCss = "bg-blue-200 rounded-xl px-4 py-2"

  return (
    <main
      className={`flex min-h-screen flex-col items-center gap-2 ${inter.className}`}
    >
      <p>現在のエラーレベル: {msgInfo && msgInfo.level}</p>
      <p>現在のエラーメッセージ: {msgInfo && msgInfo.message}</p>
      <button className={buttonCss} onClick={() => setError()}>エラーを起こす</button>
      <button className={buttonCss} onClick={() => setWarning()}>警告レベルのエラーを起こす</button>
      <button className={buttonCss} onClick={() => setInfo()}>確認ダイアログを起こす</button>
      <MsgDialogPresenter />
    </main>
  )
}

