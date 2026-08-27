import type {Metadata} from "next"; import "./globals.css";
export const metadata:Metadata={title:"CHEOPS Sales Copilot",description:"Copilote commercial Amoïn"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr"><body>{children}</body></html>}