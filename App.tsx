import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { GeminiDemo } from './components/GeminiDemo';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-emerald-200">
      <Header />
      <main>
        <Hero />
        <Features />
        
        {/* Product Highlight Section (SEO Focus) */}
        <section className="py-20 bg-white" id="products">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Sản Phẩm Nổi Bật</h2>
                <p className="text-slate-600 max-w-2xl mx-auto mb-12">Được tin dùng bởi hơn 10.000 bà con nông dân trên cả nước.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Fake Products for UI Demo */}
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="border border-slate-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                            <div className="h-48 bg-slate-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                                <img src={`https://picsum.photos/seed/agri${i}/400/300`} alt="Product" className="object-cover w-full h-full hover:scale-105 transition-transform" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Siêu Phẩm Trừ Sâu {i}</h3>
                            <p className="text-sm text-slate-500 mb-4">Đặc trị sâu cuốn lá, rầy nâu, bọ trĩ. Hiệu quả kéo dài.</p>
                            <div className="flex items-center justify-between">
                                <span className="text-emerald-600 font-bold">150.000đ</span>
                                <button className="text-sm text-white bg-emerald-600 px-3 py-1.5 rounded hover:bg-emerald-700">Mua ngay</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <GeminiDemo />
        
        {/* CTA Section */}
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <div className="bg-gradient-to-r from-emerald-800 to-teal-900 p-12 rounded-3xl shadow-2xl relative overflow-hidden">
                     {/* Abstract shape */}
                     <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                     
                     <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Bà con cần tư vấn kỹ thuật?</h2>
                     <p className="text-emerald-100 mb-8 max-w-xl mx-auto relative z-10">
                        Đừng ngần ngại liên hệ với chúng tôi để được đội ngũ kỹ sư hỗ trợ miễn phí.
                     </p>
                     <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                        <button className="bg-white text-emerald-900 px-8 py-3 rounded-lg font-bold hover:bg-emerald-50 transition-colors">
                            Gọi Hotline: 0987 654 321
                        </button>
                        <button className="bg-transparent border border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors">
                            Chat Zalo
                        </button>
                     </div>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;