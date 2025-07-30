import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { LuX } from 'react-icons/lu';

const MenuDetailModal = ({ menuId, onClose }) => {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const formatPrice = (price) => {
    if (typeof price !== 'number') return '';
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  useEffect(() => {
    if (!menuId) return;

    const fetchMenuDetail = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`http://localhost:8080/api/menu/${menuId}`);
        if (response.data && response.data.data) {
          setDetail(response.data.data);
        } else {
          throw new Error('Format data detail API tidak valid');
        }
      } catch (err) {
        console.error('Gagal mengambil detail menu:', err);
        setError('Gagal memuat detail menu. Silakan coba lagi.');
      } finally {
        setLoading(false);
      }
    };

    fetchMenuDetail();
  }, [menuId]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-11/12 max-w-2xl max-h-[90vh] overflow-y-auto p-6 md:p-8 relative transition-all transform scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Tutup modal"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors"
        >
          <LuX size={24} />
        </button>

        {loading && <p className="text-center py-16">Memuat detail...</p>}
        {error && <p className="text-center py-16 text-red-500">{error}</p>}
        {detail && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <img
              src={detail.imageUrl}
              alt={`Hidangan ${detail.menuName}`}
              className="w-full h-64 md:h-auto object-cover rounded-lg"
            />
            <div className="flex flex-col">
              <h2 className="text-2xl md:text-3xl font-bold font-poppins text-gray-900">
                {detail.menuName}
              </h2>
              <p className="text-2xl font-semibold text-orange-500 mt-2">
                {formatPrice(detail.price)}
              </p>
              <p className="mt-4 text-base text-gray-600 flex-grow">
                {detail.menuDescription}
              </p>
              <a
                href="#kontak"
                onClick={onClose}
                className="mt-6 w-full text-center bg-orange-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-orange-600 transition"
              >
                Pesan Sekarang
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuDetailModal;