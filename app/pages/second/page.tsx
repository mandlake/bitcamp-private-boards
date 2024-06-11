"use client";

import { useRouter } from "next/navigation";

function Second() {
  const router = useRouter();
  return (
    <>
      <div className=" px-[10vw]">
        <div className=" flex flex-row justify-between items-center">
          <h1 className="text-[8vw] font-normal">Examples 2</h1>
        </div>
        <div className="flex flex-col gap-3">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <div key={item} className="w-[80vw] h-[30vh] border-2 border-black">
              <img
                className="w-[80vw] h-[20vh]"
                src="https://www.shutterstock.com/image-illustration/abstract-watercolor-smear-blot-painting-260nw-1976207843.jpg"
                onClick={() => router.push(`/pages/second/details/${item}`)}
              />
              {item}
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <button onClick={() => router.push("/pages/first")}>
            이전 게시판으로 이동
          </button>
          <button onClick={() => router.push("/")}>목록으로 돌아가기</button>
        </div>
      </div>
    </>
  );
}

export default Second;
