'use client';

import Link from 'next/link';
import {
  Mic,
  Headphones,
  BookOpen,
  User,
  Flame,
  Award,
  ArrowRight,
} from 'lucide-react';
import { UserButton, SignInButton, useUser } from '@clerk/nextjs';

export default function Home() {
  const { isSignedIn, isLoaded } = useUser();

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-800">
      {/* Sidebar điều hướng */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col justify-between p-6">
        <div>
          {/* Logo / Tên dự án */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
              I
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              IELTS Native
            </span>
          </div>

          {/* Menu chính */}
          <nav className="space-y-1">
            <Link
              href="/"
              className="flex items-center gap-3 px-4 py-3 bg-indigo-50 text-indigo-600 rounded-xl font-medium transition"
            >
              <BookOpen size={20} />
              <span>Tổng quan (Dashboard)</span>
            </Link>
            <Link
              href="/practice/speaking"
              className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-100 rounded-xl font-medium transition"
            >
              <Mic size={20} />
              <span>Luyện Nói & Phát Âm</span>
            </Link>
            <Link
              href="/practice/listening"
              className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-100 rounded-xl font-medium transition"
            >
              <Headphones size={20} />
              <span>Luyện Nghe & Slang</span>
            </Link>
            <Link
              href="/resources"
              className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-100 rounded-xl font-medium transition"
            >
              <User size={20} />
              <span>Kho Tài Nguyên (Clerk)</span>
            </Link>
          </nav>
        </div>

        {/* Khu vực User Profile ở chân Sidebar */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          {isLoaded &&
            (isSignedIn ? (
              <div className="flex items-center gap-3">
                <UserButton afterSignOutUrl="/" />
                <span className="text-sm font-medium text-slate-700">
                  Tài khoản của tôi
                </span>
              </div>
            ) : (
              <SignInButton mode="modal">
                <button className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-medium transition">
                  Đăng nhập / Đăng ký
                </button>
              </SignInButton>
            ))}
        </div>
      </aside>

      {/* Khu vực nội dung chính */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        {/* Header chào mừng */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
              Xin chào! 👋
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              Sẵn sàng luyện tập phát âm và ngữ điệu bản xứ hôm nay chưa?
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm flex items-center gap-2 text-sm font-medium">
              <Award size={18} className="text-amber-500" />
              <span>Band Mục tiêu: 7.5+</span>
            </div>
          </div>
        </header>

        {/* Lưới các module học tập */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Mic size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Luyện Nói & Chấm điểm AI
              </h3>
              <p className="text-slate-500 text-sm mb-4">
                Ghi âm câu trả lời, nhận phân tích chi tiết từng âm vị, lỗi nuốt
                âm, nối âm và ngữ điệu giống người bản xứ.
              </p>
            </div>
            <Link
              href="/practice/speaking"
              className="flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all"
            >
              <span>Bắt đầu luyện nói</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Headphones size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Nghe Hiểu & Cụm từ Slang
              </h3>
              <p className="text-slate-500 text-sm mb-4">
                Khám phá các đoạn hội thoại thực tế chứa đầy đủ idioms,
                connected speech và cách người bản xứ nói chuyện tự nhiên.
              </p>
            </div>
            <Link
              href="/practice/listening"
              className="flex items-center gap-2 text-purple-600 font-semibold text-sm hover:gap-3 transition-all"
            >
              <span>Khám phá kho nghe</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
