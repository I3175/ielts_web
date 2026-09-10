'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Headphones,
  Play,
  Pause,
  Bookmark,
  Sparkles,
  Volume2,
} from 'lucide-react';

export default function ListeningPracticePage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  // Dữ liệu mẫu transcript chứa từ lóng (slang) và nối âm
  const transcriptTokens = [
    { text: 'Well, ', type: 'normal' },
    { text: 'to be honest, ', type: 'normal' },
    { text: 'last night I was ', type: 'normal' },
    {
      text: 'dead tired',
      type: 'slang',
      note: 'Thành ngữ: Cực kỳ mệt mỏi sau một ngày dài.',
    },
    { text: ' so I just ', type: 'normal' },
    {
      text: 'hit the sack',
      type: 'slang',
      note: 'Cụm từ lóng (Idiom): Đi ngủ ngay lập tức.',
    },
    { text: ' early instead of studying.' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-6 md:p-10">
      {/* Nút quay lại */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-slate-600 hover:text-indigo-600 font-medium mb-6 transition"
      >
        <ArrowLeft size={18} />
        <span>Quay lại Dashboard</span>
      </Link>

      <div className="max-w-4xl mx-auto">
        {/* Tiêu đề bài học */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm mb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-xs font-semibold uppercase tracking-wider">
              IELTS Listening & Slang
            </span>
            <span className="text-xs text-slate-400 font-medium">
              Chủ đề: Daily Routine & Idioms
            </span>
          </div>

          <h1 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
            Podcast Bản Xứ: Cách người bản địa diễn tả sự mệt mỏi
          </h1>
          <p className="text-slate-500 text-sm">
            Nghe đoạn hội thoại tốc độ thật và phân tích các cụm từ ăn điểm cho
            tiêu chuẩn Lexical Resource trong IELTS.
          </p>
        </div>

        {/* Trình phát Audio giả lập */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 md:p-8 rounded-2xl text-white shadow-md mb-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 w-full">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-14 h-14 bg-white text-purple-600 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition shrink-0"
            >
              {isPlaying ? (
                <Pause size={24} />
              ) : (
                <Play size={24} className="ml-1" />
              )}
            </button>
            <div className="w-full">
              <div className="flex justify-between text-xs text-purple-200 mb-2">
                <span>0:12</span>
                <span>1:45</span>
              </div>
              {/* Thanh sóng âm giả lập */}
              <div className="h-2 bg-purple-900/40 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-white transition-all duration-300 ${
                    isPlaying ? 'w-1/3 animate-pulse' : 'w-1/12'
                  }`}
                ></div>
              </div>
            </div>
          </div>
          <button
            onClick={() => setBookmarked(!bookmarked)}
            className={`px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 shrink-0 transition ${
              bookmarked
                ? 'bg-amber-400 text-slate-900'
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            <Bookmark size={18} />
            <span>{bookmarked ? 'Đã lưu Resource' : 'Lưu vào Clerk'}</span>
          </button>
        </div>

        {/* Vùng Transcript tương tác bóc tách Slang & Nối âm */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Sparkles size={18} className="text-purple-600" />
            <span>Transcript & Bóc tách Slang bản xứ</span>
          </h3>

          <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 text-lg leading-relaxed text-slate-700 mb-6">
            {transcriptTokens.map((token, index) =>
              token.type === 'slang' ? (
                <span
                  key={index}
                  className="group relative inline-block mx-1 cursor-pointer bg-purple-100 text-purple-700 px-2 py-0.5 rounded-md font-semibold border border-purple-200"
                >
                  {token.text}
                  {/* Tooltip giải nghĩa */}
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 p-3 bg-slate-900 text-white text-xs rounded-xl shadow-xl z-10 font-normal">
                    💡 {token.note}
                  </span>
                </span>
              ) : (
                <span key={index}>{token.text}</span>
              )
            )}
          </div>

          <p className="text-xs text-slate-400 italic">
            * Mẹo: Nhấp hoặc rê chuột vào các từ được highlight màu tím để xem
            giải thích chi tiết ý nghĩa văn hóa và cách dùng.
          </p>
        </div>
      </div>
    </div>
  );
}
