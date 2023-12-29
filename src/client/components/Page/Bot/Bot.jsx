import React, { useState, useRef, useEffect } from "react";

const API_KEY = "VF.DM.654e27264501f40007f256c5.kdQTJLQ2VnzzxJ6u"; // change this to YOUR API key, it should look like this: VF.DM.XXXXXXX.XXXXXX... keep this a secret!

const RUNTIME_API_URL = `https://general-runtime.voiceflow.com/state/user/${"gilmon"}/interact`; // change this to whatever your API URL is

const Bot = ({ setObjectiveAnswer, user, subject }) => {
  const [message, setMsg] = useState("");
  const [resArr, updateArr] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef(null);
  const [modal, setModal] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  //   const handleClickSolo = async () => {
  //     updateArr(arr => [...arr, "Me: " + inputRef.current.value]);

  //     setTimeout(() => {
  //       setMsg("");
  //       inputRef.current.value = "";
  //     }, 1000);

  //     setIsTyping(true);
  //     setTimeout(() => {
  //       setIsTyping(false);
  //     }, 1100);

  //     let data = await fetch(RUNTIME_API_URL, {
  //       headers: { Authorization: API_KEY, "Content-Type": "application/json" },
  //       method: "POST",
  //       body: JSON.stringify({
  //         request: {
  //           type: "text",
  //           payload: inputRef.current.value,
  //         },
  //       }),
  //     });

  //     let postRes = await data.json();
  //     for (let i = 0; i < postRes.length; i++) {
  //       if (postRes[i].type === "text") {
  //         setTimeout(() => {
  //           updateArr(arr => [...arr, postRes[i].payload.message]);
  //         }, 1000);
  //       }
  //     }
  //   };

  useEffect(() => {
    updateArr(arr => [
      ...arr,
      ` Hello ${user} , Im here to help you create content!! make sure to type a detailed sentence how u want the post to be.`,
    ]);
  }, []);

  const handleClick = async () => {
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
    }, 1100);

    let data = await fetch(RUNTIME_API_URL, {
      headers: { Authorization: API_KEY, "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        request: {
          type: "text",
          payload: inputRef.current.value,
        },
      }),
    });

    let postRes = await data.json();
    for (let i = 0; i < postRes.length; i++) {
      if (postRes[i].type === "text") {
        setTimeout(() => {
          updateArr(arr => [...arr, postRes[i].payload.message]);
        }, 1000);
      }
    }
  };

  const handleTextDisplay = text => {
    if (text.length > 800) {
      if (isExpanded) {
        return text;
      } else {
        return text.slice(0, 800) + "...";
      }
    } else {
      return text;
    }
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleKeyDown = event => {
    if (event.keyCode === 13) {
      handleClick();
      updateArr(arr => [...arr, "Me: " + inputRef.current.value]);

      setTimeout(() => {
        setMsg("");
        inputRef.current.value = "";
      }, 1000);
    }
  };

  return (
    <div className="App bg-slate-800 phones:hidden hidden lg:block ">
      <div className="flex bg-slate-900 text-white text-center font-bold justify-center gap-7 p-2">
        <h1> {user} Chatbot </h1>
      </div>

      <section className="bg-slate-900/50 text-black  p-[20px] min-h-[600px] max-h-[600px] lg:w-[800px] xl:w-[400px] 2xl:min-h-[750px] 2xl:max-h-[750px] overflow-y-scroll overflow-x-auto flex flex-col-reverse shadow-lg">
        <section className="flex flex-row justify-center  items-center gap-3 mb-2">
          <hr />
          <input
            type="text"
            name="name"
            placeholder="Type here ..."
            ref={inputRef}
            onKeyDown={handleKeyDown}
            className="rounded-md xl:w-[800px] border-gray-400 border-2 p-2 "
          />
          {/* <button
            className="bg-blue-500 text-white rounded-md px-4 py-2"
            onClick={() => {
              inputRef.current.value = subject;
            }}
          >
            Subject
          </button> */}

          <button
            onClick={() => updateArr([])}
            className="bg-red-500 text-white rounded-md px-4 py-2"
          >
            {" "}
            Clear{" "}
          </button>
        </section>

        <div className="flex flex-col ">
          {resArr.map((item, index) => (
            <div
              key={index}
              className={`  animate-fade mt-2 animate-once animate-duration-500 flex items-end flex-row items-${
                item.includes("Me:") ? "end" : "start"
              } ${
                item.includes("Me:") ? "!flex-row-reverse" : ""
              } gap-4 mb-4  `}
            >
              {/* {item.includes("Me:") ? null : (
              <img className="w-[30px] h-[30px] rounded-xl" src={icon} />
            )} */}

              {item.startsWith("*") ? (
                <span
                  className={`flex font-bold font-sans text-white shadow-lg hover:shadow-white hover:shadow-sm shadow-black px-5 py-3 max-w-[500px] border-2 border-green-900/50 cursor-pointer bg-green-600 hover:bg-green-700 rounded-br-lg rounded-tl-lg rounded-tr-lg`}
                >
                  <button
                    className="break-words animate-fade animate-once animate-duration-500 "
                    onClick={() => {
                      inputRef.current.focus();
                      inputRef.current.value = item.slice(1);
                    }}
                  >
                    {handleTextDisplay(item.slice(1))}
                  </button>
                  <button className="ml-2" onClick={() => setModal(true)}>
                    ...
                  </button>
                </span>
              ) : (
                <div
                  className={`flex font-semi break-words text-left font-sans text-sm words-break text-white shadow-md shadow-black px-5 py-3  ${
                    item.includes("Me:")
                      ? "bg-blue-800 rounded-bl-lg rounded-tl-lg rounded-tr-lg"
                      : "bg-blue-700 rounded-br-lg rounded-tl-lg rounded-tr-lg"
                  }`}
                >
                  <ul className="break-words animate-fade animate-once animate-duration-500">
                    {" "}
                    {handleTextDisplay(item)
                      .split(". ")
                      .map((sentence, index) => (
                        <li
                          key={index}
                          style={{
                            marginTop: sentence.endsWith(".") ? "5px" : "0px",
                          }}
                        >
                          {sentence.trim() + "."}
                        </li>
                      ))}{" "}
                  </ul>
                  <button
                    className={`${item.includes("Me:") ? "hidden" : "ml-2"}`}
                    onClick={() => {
                      setObjectiveAnswer(item);
                    }}
                  >
                    ...
                  </button>
                </div>
              )}

              {item.length > 150 && (
                <button className="text-blue-500" onClick={toggleExpanded}>
                  {isExpanded ? "Hide" : "Show More"}
                </button>
              )}
            </div>
          ))}
          {isTyping ? (
            <span className="bg-blue-600 w-[200px] mb-4 rounded-xl p-3 font-sans font-semi text-sm shadow-md shadow-black ">
              {" "}
              <p className="text-white animate-shake animate-infinite animate-duration-1000  ">
                {" "}
                Bot is typing ...{" "}
              </p>{" "}
            </span>
          ) : null}
        </div>
      </section>
    </div>
  );
};
export default Bot;
