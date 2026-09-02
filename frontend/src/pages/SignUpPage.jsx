import React, { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore';
import BorderAnimatedContainer from "../components/BorderAnimatedContainer.jsx";
import { MessageCircleIcon, LockIcon, MailIcon, UserIcon, LoaderIcon } from 'lucide-react';
import { Link } from 'react-router';

function signupPage() {
    const [ formData, setForData ] = useState({fullName: "", email: "", password: ""})
    const { signup, isSigningUp } = useAuthStore()

    const handleSubmit = (e) => {
        e.preventDefault();

        signup(formData);
    }
  return (
    <div className="w-full flex items-center justify-center p-4 bg-state-900">
      <div className="relative w-full max-w-6xl md:h-[800px] h-[650px]">
        <BorderAnimatedContainer>
          <div className="w-full flex flex-col md:flex-row">
            {/* FROM CLOUMN - LEFT SIDE */}
            <div className="md:w-1/2 p-8 flex items-center justify-center md:border-r border-slate-600/30">
              <div className="w-full max-w-md">
                {/* the heading text */}
                <div className="text-center mb-8">
                  <MessageCircleIcon className="w-12 h-12 mx-auto text-slate-400 mb-4" />
                  <h2 className="text-2xl font-bold text-slate-200 mb-2">
                    Create Account
                  </h2>
                  <p className="text-slate-400">Sign Up for a new account</p>
                </div>

                {/* form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    {/* creating a  class inside the className called "auth-input-label" */}
                    <label className="auth-input-label">Full Name</label>
                    <div className="relative">
                      <UserIcon className="auth-input-icon" />
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) =>
                          setForData({ ...formData, fullName: e.target.value })
                        }
                        className="auth-input"
                        placeholder="Enter your Name"
                      />
                    </div>
                  </div>
                  <div>
                    {/* Email */}
                    <label className="auth-input-label">Email</label>
                    <div className="relative">
                      <MailIcon className="auth-input-icon" />
                      <input
                        type="text"
                        value={formData.email}
                        onChange={(e) =>
                          setForData({ ...formData, email: e.target.value })
                        }
                        className="auth-input"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div>
                    {/* Password */}
                    <label className="auth-input-label">Password</label>
                    <div className="relative">
                      <LockIcon className="auth-input-icon" />
                      <input
                        type="text"
                        value={formData.password}
                        onChange={(e) =>
                          setForData({ ...formData, password: e.target.value })
                        }
                        className="auth-input"
                        placeholder="Enter your password"
                      />
                    </div>
                  </div>
                  {/* Submit Button */}
                  <button
                    className="auth-btn"
                    type="submit"
                    disabled={isSigningUp}
                  >
                    {isSigningUp ? (
                      <LoaderIcon className="w-full h-5 animate-spin text-center" />
                    ) : (
                      "Create Account"
                    )}
                  </button>

                  <div className="mt-6 text-center">
                    <Link to="/login" className="auth-link">
                      Already have an account ? login
                    </Link>
                  </div>
                </form>
              </div>
            </div>
            {/* Form illustration - Right side */}
            <div className="hidden mid:w-1/2 md:flex item-center justify-center p-6 bg-gradient-to-bl from-slate-800/20 to-transparent">
              <div>
                <img
                  src="../../../public/image/register.png"
                  alt="Unlocking great Grace from God"
                  className="w-full h-auto object-contain"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-medium text-cyan-400">
                    Start your journey today
                  </h3>
                  <div className="mt-4 flex justify-center gap-4">
                    <span className="auth-badge">Free</span>
                    <span className="auth-badge">Easy SetUp</span>
                    <span className="auth-badge">Private</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BorderAnimatedContainer>
      </div>
    </div>
  );
}

export default signupPage