import MsgState from '@/domains/entities/sys/msg';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  // シングルトンクラス初期化
  const msgState = MsgState.instance;

  return <Component {...pageProps} />
}
