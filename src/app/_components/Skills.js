export default function Skills() {
  return (
    <>
      <div className="mt-10 sm:m-20 flex flex-col items-center justify-center font-extralight sm:font-light">
        <div className="bg-black m-3 pb-5 sm:w-1/2 2xl:max-w-[800px] flex-grow">
          <div className="bg-[#161b22]">
            <div className="flex justify-between w-[10vh] sm:w-[6vh] h-8 items-center ml-5">
              <div className="bg-green-300 w-[2vh] h-[2vh] sm:w-[1vh] sm:h-[1vh] rounded-full"></div>
              <div className="bg-orange-300 w-[2vh] h-[2vh] sm:w-[1vh] sm:h-[1vh] rounded-full"></div>
              <div className="bg-red-500 w-[2vh] h-[2vh] sm:w-[1vh] sm:h-[1vh] rounded-full"></div>
            </div>
          </div>
          <div className="flex space-x-3 p-5">
            <div className="flex space-x-0">
              <div className="relative">
                <div className="bg-green-500 rounded-sm pl-1 pr-8 border-green-500 relative">
                C:\Users\pbasnet\Documents\Skills
                </div>
                <div
                  className="absolute top-0 right-0 h-full bg-black w-4"
                  style={{ transform: "skewX(30deg)" }}
                ></div>
                <div
                  className="absolute top-0 right-0 h-full bg-black w-4"
                  style={{ transform: "skewX(-30deg)" }}
                ></div>
              </div>
              <div className="pl-1">ls</div>
            </div>
          </div>

          <div>
            <div className="flex justify-center items-center pb-5 text-sm">
              Directory: C:\Users\pbasnet\Documents\Skills
            </div>
          </div>

          <div className="flex justify-around font-extralight text-sm">
            <div className="flex flex-col">
              <div>Last updated</div>
              <div>-------------</div>
              <ul>
                <li>10/10/2023</li>
                <li>10/10/2023</li>
                <li>10/10/2023</li>
                <li>10/10/2023</li>
                <li>10/10/2023</li>
                <li>10/10/2023</li>
              </ul>
            </div>
            <div>
              <div>Length Name</div>
              <div>---------------</div>
              <ul>
                <li>Next.js</li>
                <li>React</li>
                <li>Java</li>
                <li>Node.js</li>
                <li>Python</li>
                <li>Spring Boot 3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
