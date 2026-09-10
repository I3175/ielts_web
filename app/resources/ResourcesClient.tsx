'use client';

import Link from 'next/link';
import {
  ArrowLeft,
  User,
  Bookmark,
  ExternalLink,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { useUser, UserProfile } from '@clerk/nextjs';

export default function ResourcesClient() {
  const { user, isLoaded } = useUser();

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
        {/* Tiêu đề trang */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-indigo-600 font-semibold text-xs uppercase tracking-wider mb-1">
              <ShieldCheck size={16} />
              <span>Clerk Resource Management</span>
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-slate-900">
              Kho Tài Nguyên & Hồ Sơ Cá Nhân
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              Quản lý thông tin tài khoản bảo mật và các cụm từ Slang/Bài tập
              bạn đã bookmark.
            </p>
          </div>
          {isLoaded && user && (
            <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
              <img
                src={user.imageUrl}
                alt="Avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold text-sm text-slate-800">
                  {user.fullName || user.username || 'Học viên IELTS'}
                </h4>
                <p className="text-xs text-slate-500">
                  {user.primaryEmailAddress?.emailAddress}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Danh sách tài nguyên đã lưu (Mock Resources từ Clerk/Database) */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm mb-6">
          <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Bookmark size={18} className="text-indigo-600" />
            <span>Các cấu trúc & Slang đã lưu gần đây</span>
          </h3>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-indigo-200 transition">
              <div>
                <span className="inline-block px-2 py-0.5 bg-purple-100 text-purple-700 text-xs font-semibold rounded mb-1">
                  Slang / Idiom
                </span>
                <h4 className="font-semibold text-sm text-slate-800">
                  "Hit the sack" - Cụm từ diễn tả việc đi ngủ sớm
                </h4>
                <p className="text-xs text-slate-500">
                  Đã lưu từ bài học: Daily Routine Podcast
                </p>
              </div>
              <button className="text-xs text-indigo-600 font-semibold hover:underline flex items-center gap-1">
                <span>Ôn tập</span>
                <ExternalLink size={14} />
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-indigo-200 transition">
              <div>
                <span className="inline-block px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded mb-1">
                  Connected Speech
                </span>
                <h4 className="font-semibold text-sm text-slate-800">
                  Hiện tượng nối âm ở cụm "Quite a bustling city"
                </h4>
                <p className="text-xs text-slate-500">
                  Đã lưu từ bài học: IELTS Speaking Part 1
                </p>
              </div>
              <button className="text-xs text-indigo-600 font-semibold hover:underline flex items-center gap-1">
                <span>Ôn tập</span>
                <ExternalLink size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Component quản lý tài khoản tích hợp sẵn của Clerk */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-4">
            Cài đặt Tài khoản Bảo mật (Clerk Profile)
          </h3>
          <p className="text-slate-500 text-sm mb-6">
            Bạn có thể thay đổi mật khẩu, quản lý phiên đăng nhập hoặc cập nhật
            thông tin cá nhân trực tiếp tại đây.
          </p>

          <div className="border border-slate-100 rounded-xl overflow-hidden p-4 bg-slate-50 flex justify-center">
            <UserProfile routing="hash" />
          </div>
        </div>
      </div>
    </div>
  );
}
