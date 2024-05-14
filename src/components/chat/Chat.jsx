import { useRef, useState, useEffect } from "react";
import "./chat.css";
import OpenAI from "openai";

const Chat = () => {
  const [chat, setChat] = useState([]);
  const [text, setText] = useState("");

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat?.messages]);

  const handleApi = async () => {
    const openai = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey:
      import.meta.env.VITE_API_KEY,
      dangerouslyAllowBrowser: true,
    });
    const completion = await openai.chat.completions.create({
      model: "gryphe/mythomist-7b:free",
      messages: [{ role: "user", content: text }],
    });
    console.log(completion.choices[0].message);

    setChat((prev) => [
      ...prev,
      { text: completion.choices[0].message.content, isUser: false },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      setChat((prev) => [...prev, { text, isUser: true }]);

      handleApi();
      setText(""); // Clear the input field after submission
    }
  };
  console.log("Chat", chat);
  return (
    <>
      <div className="chat">
        <div className="center">
          {chat.map((item, index) => (
            <div key={index} className={`message ${item.isUser ? "own" : ""} `}>
              <div className="avatar flex gap-2">
                <img src={!item.isUser ?"https://mui.com/static/images/avatar/3.jpg" : "https://mui.com/static/images/avatar/2.jpg"} alt="" />
                <p className="">{!item.isUser ?"Jessica" : "You"}</p>
              </div>
              <div className="texts">
                <p>{item.text}</p>
              </div>
            </div>
          ))}
          <div ref={endRef}></div>
        </div>
        <div className=" bottom ">
          <form
            onSubmit={handleSubmit}
            className="flex  w-full items-center justify-center gap-3 left-0 right-0 p-16  "
          >
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 w-2 bg-gray-700/50 py-2 px-4  rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
            <button
              type="submit"
              className=" rounded-full bg-white text-white font-semibold disabled:opacity-50"
            >
              <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#808080]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                  <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
                </svg>
              </span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Chat;
