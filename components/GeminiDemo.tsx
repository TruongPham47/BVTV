import React, { useState } from 'react';
import { generateMarketingSlogan } from '../services/geminiService';
import { Button } from './Button';
import { LoadingState } from '../types';
import { Sprout, Copy, Check, Stethoscope } from 'lucide-react';

export const GeminiDemo: React.FC = () => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [result, setResult] = useState('');
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!productName || !description) return;

    setStatus(LoadingState.LOADING);
    setResult('');
    try {
      const slogan = await generateMarketingSlogan(productName, description);
      setResult(slogan);
      setStatus(LoadingState.SUCCESS);
    } catch (error) {
      console.error(error);
      setStatus(LoadingState.ERROR);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="demo" className="py-24 bg-emerald-900 relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500 rounded-full blur-3xl opacity-20"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white">Bác Sĩ Cây Trồng AI</h2>
            <p className="text-emerald-200 mt-2">Mô tả bệnh hại, AI sẽ tư vấn giải pháp ngay lập tức cho bạn.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
            
            {/* Input Side */}
            <div className="flex-1 p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-100 bg-slate-50">
                <div className="flex items-center gap-2 mb-6">
                    <Stethoscope className="h-6 w-6 text-emerald-600" />
                    <h2 className="text-xl font-bold text-slate-800">Chẩn đoán bệnh</h2>
                </div>

                <form onSubmit={handleGenerate} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Loại cây trồng</label>
                        <input 
                            type="text" 
                            className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                            placeholder="Ví dụ: Lúa, Cà phê, Sầu riêng..."
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Triệu chứng bệnh / Vấn đề</label>
                        <textarea 
                            className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all h-32 resize-none"
                            placeholder="Mô tả chi tiết: Vàng lá, đốm nâu, sâu ăn lá, rễ bị thối..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <Button 
                        type="submit" 
                        fullWidth 
                        disabled={status === LoadingState.LOADING || !productName || !description}
                        className="relative"
                    >
                        {status === LoadingState.LOADING ? (
                            <span className="flex items-center gap-2">
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Đang phân tích...
                            </span>
                        ) : 'Nhận Tư Vấn Ngay'}
                    </Button>
                </form>
            </div>

            {/* Output Side */}
            <div className="flex-1 bg-white p-8 md:p-12 flex flex-col justify-center relative">
                {status === LoadingState.IDLE && (
                    <div className="text-center text-slate-400">
                        <div className="mx-auto w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                            <Sprout className="h-8 w-8 text-slate-300" />
                        </div>
                        <p>Kết quả tư vấn sẽ hiển thị tại đây</p>
                    </div>
                )}

                {status === LoadingState.SUCCESS && (
                    <div className="w-full animate-fade-in-up">
                        <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-3 block bg-emerald-50 w-fit px-2 py-1 rounded">Lời khuyên chuyên gia</span>
                        <div className="relative group bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <div className="prose prose-emerald text-slate-700 leading-relaxed whitespace-pre-wrap">
                                {result}
                            </div>
                            <button 
                                onClick={copyToClipboard}
                                className="absolute top-2 right-2 p-2 text-slate-400 hover:text-emerald-600 transition-colors"
                                title="Sao chép"
                            >
                                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                            </button>
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
                             <Check className="h-3 w-3 text-emerald-500" /> Được hỗ trợ bởi công nghệ Gemini AI
                        </div>
                    </div>
                )}

                {status === LoadingState.ERROR && (
                    <div className="text-center text-red-500">
                        <p>Có lỗi xảy ra. Vui lòng kiểm tra kết nối mạng.</p>
                    </div>
                )}
            </div>
          </div>
        </div>
    </section>
  );
};