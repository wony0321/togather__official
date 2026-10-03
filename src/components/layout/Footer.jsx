import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-blue-10 text-blue-4 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2">
              <img src="/icons/192x192.png" alt="ToGather" className="w-7 h-7 rounded-md" />
              <span className="text-white font-bold text-lg">ToGather</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed">
              교회 운영을 하나로, 성도와 더 가까이
            </p>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-3">서비스</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/service" className="hover:text-white transition-colors">서비스 소개</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">요금제</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">도입 문의</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-3">회사</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/team" className="hover:text-white transition-colors">회사 소개</Link></li>
              <li><a href="mailto:hello@togather.kr" className="hover:text-white transition-colors">hello@togather.kr</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
          <span>© {new Date().getFullYear()} ToGather. All rights reserved.</span>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-white transition-colors">개인정보처리방침</Link>
            <Link to="/terms" className="hover:text-white transition-colors">이용약관</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
