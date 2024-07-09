import Header from '../components/header'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm ">
        <Header title={'fumiyaのページ'}/>
        <div className="h-32 w-full bg-white shadow-md rounded-lg my-8 py-2 px-4 flex justify-between h-full">
          <div className='flex'>
            <div className='flex items-center mr-2'>
              <div className='text-2xl text-red-700 '>●</div>
            </div>        
            <div className='text-4xl'>トップページ</div>
          </div> 
        </div>
        <img
        src="/icon.png"
        width={200}
        height={200}
        alt={"icon"}
        />
        <p className="fixed left-0 bottom-0 py-6 flex w-full justify-center border-t border-gray-300 bg-gradient-to-b from-zinc-200  to-white">
          制作：fumiya
        </p>
      </div>
    </main>
  );
}
