"use client";

import Link from "next/link";

export function GlobalNavbar() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false); // 예시용

  return (
    <header className="sticky top-0 z-50 w-full bg-[#c9e7db] backdrop-blur border-b border-gray-200">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/">
          <div className="text-xl font-bold tracking-tight text-primary">
            DB-WORLD
          </div>
        </Link>

        {/* Center: Navigation */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
          <Link href="/classroom">
            <span className="hover:text-primary transition-colors">
              학급관리
            </span>
          </Link>

          <a href="#" className="hover:text-primary transition-colors">
            학생상세
          </a>
          <Link href="/activity">
            <span className="hover:text-primary transition-colors">
              활동관리
            </span>
          </Link>
          <span className="hover:text-primary transition-colors">뱃지</span>
          <span className="hover:text-primary transition-colors">상점</span>
          <span className="hover:text-primary transition-colors">주식</span>
        </nav>

        {/* Right: Auth or Avatar */}
        <div>로그아웃</div>
      </div>
    </header>
  );
}
