function Second() {
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
                src="data:image/png;base64,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"
              />
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Second;
