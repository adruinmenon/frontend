import React, { useState } from "react";
import Logo from "../components/Logo";

export function ChatBox() {

  return (
    <div className="bg-black rounded-lg p-10">
      {/* User chats */}
      <div className="flex items-start justify-center mb-5">
        <Avatar src="https://img.freepik.com/premium-photo/3d-avatar-cartoon-character_113255-103130.jpg"></Avatar>
        <div className="ml-2">
          {/* User Info */}
          <div className="flex items-center justify-start ml-2">
            <h1 className="text-red-500 font-bold">Salvi0</h1>
            <h2 className="text-gray-500 ml-2">Today at 4:45 PM</h2>
          </div>
          {/* Chat Messages */}
          <div className="flex items-start justify-center">
            <div className="flex flex-col gap-1 ml-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <div>
                  <ChatMessage message="I'm spamming the same message!"></ChatMessage>
                </div>
              ))}
            </div>
          </div>
          {/*  */}
        </div>
      </div>

      {/* Bot chats */}
      <div className="flex items-start justify-center">
        <div className="w-10 h-10 rounded-full bg-white">
          <Logo></Logo>
        </div>
        <div className="ml-2">
          {/* User Info */}
          <div className="flex items-center justify-start ml-2">
            <h1 className="text-blue-500 font-bold">Adruinmenon</h1>
            <h2 className="text-gray-500 ml-2">Today at 4:45 PM</h2>
          </div>
          {/* Chat Messages */}
          <div className="flex items-start justify-start">
            <div
              className="flex bg-gray-800 rounded-lg p-2 px-6 ml-2 my-2"
              style={{ borderLeft: "4px solid  blue" }}
            >
              <div className="ml-2">
                <h1 className="text-white font-bold">
                  Salvi0 has been silenced for 30m!
                </h1>
                <h2 className="text-gray-500 ml-2">
                  REASON: Similar Message Spam
                </h2>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
}

function ChatMessage({ message }: { message: string }) {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full h-full rounded-lg p-1">{message}</div>
    </div>
  );
}

function Avatar({ src }: { src: string }) {
  return (
    <div className="w-10 h-10 rounded-full bg-white">
      <img src={src} alt="idk" className="w-full h-full rounded-full" />
    </div>
  );
}
