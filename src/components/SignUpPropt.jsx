import React from "react";

const SignUpPropt = ({close}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 z-10  ">
    <div className="relative bg-dark-700 max-w-[540px] w-full z-10 rounded-3xl overflow-hidden border border-gray-700 shadow-xl">
      {/* Close Button */}
      <button
        onClick={close}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-300 transition-colors text-2xl"
        aria-label="Close Modal"
      >
        <i className="bi bi-x"></i>
      </button>
  
      {/* Modal Content */}
      <div className="px-8 py-12">
        <h1 className="mb-6 text-3xl font-bold text-center text-white">
          Sign in
        </h1>
        <p className="mb-4 text-base text-center text-gray-400 font-medium">
          You need to sign in first
        </p>
        <p className="text-base text-center text-gray-300 font-medium">
          After you sign in, you can create posts, subscribe, comment, add to
          favorites, or participate in challenges.
        </p>
        <button className="mt-8 w-full px-4 py-3 flex items-center justify-center gap-2 rounded-lg text-base font-semibold bg-gray-700 hover:bg-gray-600 text-white transition-all">
          <i className="bi bi-github"></i>
          Sign in with GitHub
        </button>
      </div>
    </div>
  </div>
  
  );
};

export default SignUpPropt;
