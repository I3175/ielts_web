'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Mic,
  Square,
  Play,
  RefreshCw,
  Volume2,
  CheckCircle2,
} from 'lucide-react';

export default function SpeakingPracticePage() {
  const [isRecording, setIsRecording] = useState(false);
  const [hasRecorded, setHasRecorded] = useState(false);

  const toggleRecording = () => {
    if (!isRecording) {
      setIsRecording(true);
      setHasRecorded(false);
    } else {
      setIsRecording(false);
      setHasRecorded(true);
    }
  };

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
            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold uppercase tracking-wider">
              IELTS Speaking Part 1
            </span>
            <span className="text-xs text-slate-400 font-medium">
              Chủ đề: Hometown & Connected Speech
            </span>
          </div>

          <h1 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
            "Well, to be honest, my hometown is quite a bustling city..."
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            <strong className="text-indigo-600">Mẹo nối âm bản xứ:</strong> Hãy
            chú ý hiện tượng nuốt âm ở cụm từ{' '}
            <span className="bg-indigo-50 px-1.5 py-0.5 rounded text-indigo-700 font-medium">
              "quite a"
            </span>{' '}
            (phát âm nối thành *qui-ta*) và{' '}
            <span className="bg-indigo-50 px-1.5 py-0.5 rounded text-indigo-700 font-medium">
              "bustling city"
            </span>
            .
          </p>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-sm font-semibold transition">
              <Volume2 size={18} className="text-indigo-600" />
              <span>Nghe mẫu chuẩn bản xứ</span>
            </button>
          </div>
        </div>

        {/* Khu vực Ghi âm tương tác */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center mb-6">
          <h3 className="font-bold text-slate-800 mb-2">
            Phòng thu âm của bạn
          </h3>
          <p className="text-slate-500 text-sm mb-8">
            Bấm nút microphone để bắt đầu đọc câu trả lời theo chuẩn nối âm.
          </p>

          {/* Nút Mic chính */}
          <div className="flex flex-col items-center justify-center">
            <button
              onClick={toggleRecording}
              className={`w-20 h-20 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 ${
                isRecording
                  ? 'bg-rose-500 animate-pulse ring-4 ring-rose-200'
                  : 'bg-indigo-600 hover:bg-indigo-700 hover:scale-105'
              }`}
            >
              {isRecording ? <Square size={32} /> : <Mic size={32} />}
            </button>
            <span className="mt-4 text-sm font-medium text-slate-600">
              {isRecording ? 'Đang ghi âm... (Bấm để dừng)' : 'Bấm để ghi âm'}
            </span>
          </div>
        </div>

        {/* Kết quả chấm điểm (Hiển thị sau khi ghi âm mẫu) */}
        {hasRecorded && (
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-indigo-100 shadow-sm animate-fadeIn">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">
                  Kết quả phân tích từ AI
                </h3>
                <p className="text-xs text-slate-500">
                  Đã chấm điểm dựa trên tiêu chuẩn phát âm IELTS Speaking
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-50 p-4 rounded-xl text-center border border-slate-100">
                <span className="text-xs text-slate-500 block mb-1">
                  Độ chính xác
                </span>
                <span className="text-2xl font-bold text-indigo-600">8.5</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl text-center border border-slate-100">
                <span className="text-xs text-slate-500 block mb-1">
                  Độ trôi chảy
                </span>
                <span className="text-2xl font-bold text-indigo-600">8.0</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl text-center border border-slate-100">
                <span className="text-xs text-slate-500 block mb-1">
                  Ngữ điệu (Prosody)
                </span>
                <span className="text-2xl font-bold text-amber-500">7.5</span>
              </div>
            </div>

            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800">
              💡 <strong>Gợi ý cải thiện:</strong> Bạn đã phát âm rất tốt từ
              "hometown", tuy nhiên ở cụm "quite a", âm cuối chưa được nối mượt
              sang nguyên âm 'a'. Hãy luyện tập lại cụm này nhé!
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
