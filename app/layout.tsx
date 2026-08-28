import type { Metadata } from 'next'; import './globals.css';
export const metadata:Metadata={title:'李思婧 — 个人作品集',description:'李思婧的内容策划、品牌传播、视觉设计与数字项目作品集。'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="zh-CN"><body>{children}</body></html>}
