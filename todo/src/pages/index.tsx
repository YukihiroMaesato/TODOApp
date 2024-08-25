import { Inter } from "next/font/google";
import InputForm from "../components/inputForm";
import ListItemProps from "@/components/listItemProps"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <main
      className={`flex flex-col min-h-screen items-center p-24 ${inter.className} `}
    >
      <InputForm />
      <div className="flex flex-col h-[400px] items-center p-4 w-full max-w-[360px] overflow-y-auto overflow-x-hidden">
        <div className="w-full max-w-[400px] text-center text-[2rem] text-green-500">
          L I S T
        </div>
        <ListItemProps />
      </div>
    </main>
  );
}
