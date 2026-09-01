import React from 'react'
import { Route, Routes } from "react-router";
import Chatpage from "./pages/ChatPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import { useAuthStore } from "./store/useAuthStore.js"

function App() {
  const { authUser, isLoggedIn, login } = useAuthStore();

  console.log("auth user:", authUser);
  console.log("isLoggedIn:", isLoggedIn);


  return (
    <div className="min-h-screen bg-slate-900 relative flex items-center justify-center p-4 overflow-hidden">
      {/* DECORATION - GRID BG GLOW SHAPES */}
      <div className="absolute inset-0 bg-[linear-gradient(to-right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to-bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute top-0 -left-4 size-96 bg-pink-500 opacity-20 blur-[100px]" />
      <div className="absolute bottom-0 -right-4 size-96 bg-pink-500 opacity-20 blur-[100px]" />

      <button onClick={login} className='z-10'>Click</button>
 

      <Routes>
        <Route path="/" element={<Chatpage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App

