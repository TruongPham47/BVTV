import React from 'react';
import { Sprout, ShieldCheck, Truck, Microscope, Leaf, Users, LucideIcon } from 'lucide-react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    title: 'Hiệu Quả Tức Thì',
    description: 'Sản phẩm đặc trị các loại sâu bệnh hại phổ biến, tác dụng nhanh chóng, bảo vệ cây trồng kịp thời.',
    iconName: 'Zap' // Mapped below manually since type expects specific strings
  },
  {
    title: 'An Toàn Sinh Học',
    description: 'Ưu tiên các dòng chế phẩm sinh học, an toàn cho người sử dụng và thân thiện với môi trường đất.',
    iconName: 'Shield'
  },
  {
    title: 'Công Nghệ Nano',
    description: 'Ứng dụng công nghệ hạt Nano giúp thuốc thẩm thấu nhanh, không bị rửa trôi khi trời mưa.',
    iconName: 'Cpu'
  },
  {
    title: 'Giao Hàng Tận Nơi',
    description: 'Hệ thống phân phối rộng khắp, giao hàng nhanh chóng đến tận vườn cho bà con.',
    iconName: 'Globe'
  },
  {
    title: 'Chuyên Gia Tư Vấn',
    description: 'Đội ngũ kỹ sư nông nghiệp sẵn sàng hỗ trợ kỹ thuật 24/7 qua điện thoại và ứng dụng.',
    iconName: 'Users'
  },
  {
    title: 'Nguồn Gốc Rõ Ràng',
    description: 'Cam kết 100% sản phẩm chính hãng, đầy đủ giấy tờ kiểm định chất lượng.',
    iconName: 'BarChart'
  }
];

// Mapping to new icons visually, keeping type compatibility or casting
const iconDisplay: Record<string, React.ReactNode> = {
  Zap: <Leaf className="h-6 w-6 text-emerald-600" />,
  Shield: <ShieldCheck className="h-6 w-6 text-emerald-600" />,
  Cpu: <Microscope className="h-6 w-6 text-emerald-600" />,
  Globe: <Truck className="h-6 w-6 text-emerald-600" />,
  Users: <Users className="h-6 w-6 text-emerald-600" />,
  BarChart: <Sprout className="h-6 w-6 text-emerald-600" />
};

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-emerald-600 tracking-wide uppercase">Tại sao chọn chúng tôi?</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Giải pháp toàn diện cho nhà nông
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Chúng tôi không chỉ bán sản phẩm, chúng tôi mang đến giải pháp bảo vệ mùa màng bền vững.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            return (
              <div 
                key={index}
                className="relative group bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-emerald-500/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-t-2xl origin-left"></div>
                
                <div className="inline-flex items-center justify-center p-3 bg-white rounded-lg mb-5 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                  {iconDisplay[feature.iconName]}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};