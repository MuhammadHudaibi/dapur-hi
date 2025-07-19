import React from "react";
import NavBar from "../components/layout/NavBar";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <main>
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900">
            Selamat Datang di DapurHi
          </h1>
          <p className="mt-2 text-gray-600">
            Ini adalah konten halaman utama Anda.
          </p>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
