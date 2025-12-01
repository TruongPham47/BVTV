import React from 'react';
import { Leaf, Facebook, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 text-slate-300" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-6 w-6 text-emerald-500" />
              <span className="text-xl font-bold text-white">AgriGreen</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Đồng hành cùng nhà nông Việt Nam. Chúng tôi cam kết mang đến những sản phẩm chất lượng nhất cho mùa màng bội thu.
            </p>
            <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 123 Đường Nông Nghiệp, Hà Nội</div>
                <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> 0987 654 321</div>
                <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> hotro@agrigreen.vn</div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Sản Phẩm</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Thuốc trừ sâu</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Thuốc trừ bệnh</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Phân bón lá</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Chế phẩm sinh học</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Hỗ Trợ</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Kỹ thuật canh tác</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Chẩn đoán bệnh</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Chính sách đại lý</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Vận chuyển & Thanh toán</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Pháp Lý</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Điều khoản sử dụng</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Chính sách bảo mật</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} AgriGreen Vietnam. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};