import React, { useEffect, useState } from "react";
import MenuCard from "../common/MenuCard.jsx";
import useAnimateOnScroll from "../../hooks/useAnimateOnScroll.js";
import axios from "axios";
import MenuDetailModal from "../common/MenuDetailModal.jsx";

const MenuSection = () => {
  const sectionRef = useAnimateOnScroll();

  const [filter, setFilter] = useState("main");
  const [menuItems, setMenuItems] = useState([]);
  const [paging, setPaging] = useState(null);

  const [page, setPage] = useState(0);
  const [size] = useState(10); // Bisa ubah jika ingin lebih banyak per page
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMenuId, setSelectedMenuId] = useState(null);

  const handleOpenModal = (menuId) => {
    setSelectedMenuId(menuId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedMenuId(null), 300);
  };

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:8080/api/menu", {
          params: {
            page: page,
            size: size,
            isMainMenu: filter === "main",
          },
        });

        console.log("Menu Response: ", response.data);

        if (response.data && response.data.data) {
          setMenuItems(response.data.data);
        } else {
          setMenuItems([]);
        }

        setPaging(response.data.paging);
        setError(null);
      } catch (err) {
        console.error("Gagal mengambil data menu:", err);
        setError("Gagal memuat menu. Silakan coba lagi.");
      } finally {
        setLoading(false);
      }
    };

    fetchMenuData();
  }, [filter, page, size]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleNextPage = () => {
    if (paging && paging.hasNext) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (paging && paging.hasPrevious && page > 0) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <>
      <section
        id="menu"
        ref={sectionRef}
        className="fade-in-section py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins">
              Menu Kami
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              Jelajahi hidangan lezat kami, yang disiapkan dengan bahan-bahan
              segar dan diantarkan langsung ke depan pintu Anda.
            </p>
          </div>

          <div className="mb-10 flex justify-start">
            <div className="inline-flex rounded-lg shadow-sm">
              <button
                onClick={() => {
                  setPage(0);
                  setFilter("main");
                }}
                className={`px-4 py-2 text-sm font-medium border border-gray-200 rounded-l-lg transition-colors duration-200 ${
                  filter === "main"
                    ? "bg-orange-500 text-white"
                    : "bg-white text-gray-800 hover:bg-gray-50"
                }`}
              >
                Menu Utama
              </button>
              <button
                onClick={() => {
                  setPage(0);
                  setFilter("side");
                }}
                className={`px-4 py-2 text-sm font-medium border-t border-b border-r border-gray-200 rounded-r-lg transition-colors duration-200 ${
                  filter === "side"
                    ? "bg-orange-500 text-white"
                    : "bg-white text-gray-800 hover:bg-gray-50"
                }`}
              >
                Menu Tambahan
              </button>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-10">
              <p className="text-gray-500">Memuat menu...</p>
            </div>
          ) : error ? (
            <div className="text-center py-10 text-red-500">
              <p>{error}</p>
            </div>
          ) : menuItems.length > 0 ? (
            <>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12">
                {menuItems.map((item) => (
                  <MenuCard
                    key={item.menuId}
                    image={item.imageUrl}
                    title={item.menuName}
                    price={formatPrice(item.price)}
                    description={item.menuDescription}
                    onCardClick={() => handleOpenModal(item.menuId)}
                  />
                ))}
              </div>

              {/* Pagination Controls */}
              <div className="flex justify-center mt-10 space-x-4">
                <button
                  onClick={handlePrevPage}
                  disabled={!paging?.hasPrevious}
                  className={`px-4 py-2 border rounded-md ${
                    !paging?.hasPrevious
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-white hover:bg-gray-100 text-gray-800"
                  }`}
                >
                  Prev
                </button>
                <span className="flex items-center text-sm text-gray-600">
                  Halaman {paging?.currentPage} dari {paging?.totalPage}
                </span>
                <button
                  onClick={handleNextPage}
                  disabled={!paging?.hasNext}
                  className={`px-4 py-2 border rounded-md ${
                    !paging?.hasNext
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-white hover:bg-gray-100 text-gray-800"
                  }`}
                >
                  Next
                </button>
              </div>
            </>
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-500">
                Menu belum tersedia untuk kategori ini.
              </p>
            </div>
          )}
        </div>
      </section>

      {isModalOpen && (
        <MenuDetailModal menuId={selectedMenuId} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default MenuSection;