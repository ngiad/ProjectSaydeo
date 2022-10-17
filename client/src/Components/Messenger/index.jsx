import React, { useEffect, useRef, useState } from "react";
import * as socketIoClient from "socket.io-client";

const Messenger = () => {
  const [id, setId] = useState(test);
  const [mess, setMess] = useState([]);
  const [message, setMessage] = useState("");

  const socketClient = useRef();
  const ScrollMessageNew = useRef();

  useEffect(() => {
    socketClient.current = socketIoClient.connect(
      "http://localhost:7000/messenger"
    );

    socketClient.current.on("getId", (res) => {
      setId(res);
    });

    socketClient.current.on("sendDataServer", (res) => {
      setMess((oldMsgs) => [...oldMsgs, res.data]);
      scrollToBottom();
    });

    return () => {
      socketClient.current.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (!message) {
      const msg = {
        content: message,
        id: id,
      };
      socketClient.current.emit("sendDataClient", msg);
      setMessage("");
    }
  };

  const scrollToBottom = () => {
    ScrollMessageNew.current.scrollIntoView({ behavior: "smooth" });
  };

  const renderMess = mess.map((user, index) => (
    <div
      key={index}
      className={`${
        user.id === id ? "your-message" : "other-people"
      } chat-item`}
    >
      {user.content}
    </div>
  ));

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const onEnterPress = (e) => {
    console.log("e.keyCode :: ",e.keyCode);
    if (e.keyCode == 13 && e.shiftKey === false) {
      sendMessage();
    }
  };

  return (
    <div class="box-chat">
      <div class="box-chat_message">
        {renderMess}
        <div style={{ float: "left", clear: "both" }} ref={ScrollMessageNew}></div>
      </div>

      <div class="send-box">
        <textarea
          value={message}
          onKeyDown={onEnterPress}
          onChange={handleChange}
          placeholder="Nhập tin nhắn ..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Messenger;
