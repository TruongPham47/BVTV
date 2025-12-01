import React from 'react';
import { Button } from './Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-emerald-100/50 rounded-full blur-3xl z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-amber-100/50 rounded-full blur-3xl z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            Giải pháp nông nghiệp 4.0
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            Bảo vệ mùa màng <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
              Nâng tầm giá trị nông sản
            </span>
          </h1>

          <p className="mt-4 text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Cung cấp thuốc bảo vệ thực vật chính hãng, chế phẩm sinh học an toàn và hiệu quả cao. 
            Đồng hành cùng bà con nông dân hướng tới một nền nông nghiệp bền vững.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
            <Button size="lg" className="group">
              Xem Sản Phẩm
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="secondary" size="lg">
              Tư vấn miễn phí
            </Button>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-6 text-sm font-medium text-slate-500">
            <div className="flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Chính hãng 100%
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" /> An toàn sinh học
            </div>
            <div className="flex items-center gap-1">
               <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Giao hàng toàn quốc
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 w-full max-w-[600px]">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                    src="https://dongangia.com/files/upload/images/Tin%20tuc/Dong%20An%20Gia/ca%20phe%20thu%20hoach%20vao%20thang%20may%20(2).jpg" 
                    alt="Cánh đồng nông nghiệp xanh tốt" 
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
                    <p className="font-bold text-lg">Mùa màng bội thu</p>
                    <p className="text-sm opacity-90">Với giải pháp từ AgriGreen</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};