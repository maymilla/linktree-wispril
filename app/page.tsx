import LinkButton from "./button";

export default function Home() {

  return (
    <div className="shadow-inner bg-gradient-to-tr from-rose-800 to-amber-200 p-8 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="text-center sm:text-left">
          <h1 className="text-white text-3xl sm:text-4xl font-bold mb-6">Daftar Website Wisuda April ITB</h1>
          
          <div className="flex flex-col gap-4 sm:w-auto min-w-[200px]">
            <LinkButton text="Wisuda April 2025" linkWeb="https://wisudaitb.id"/>
            <LinkButton text="Wisuda April 2024" linkWeb="https://wisudaitb.id"/>
            <LinkButton text="Wisuda April 2023" linkWeb="https://wisudaitb.id"/>
            <LinkButton text="Wisuda April 2022" linkWeb="https://wisudaitb.id"/>
          </div>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-white">Made by Mayla Yaffa</p>
      </footer>
    </div>
  );
}
