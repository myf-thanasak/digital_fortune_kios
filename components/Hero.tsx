import Image from "next/image";
import { MessageCircle, Smartphone } from "lucide-react";
import { rewardDemoUrl, lineMessageUrl, rewardPackage } from "@/lib/site";
import cylinderImg from "@/public/shake-cylinder.webp";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 pb-14 sm:pt-28 lg:pt-32 lg:pb-20">
      <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-pop-violet/25 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 top-40 h-80 w-80 rounded-full bg-pop-pink/25 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-pop-sun/30 blur-[100px]" />

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="text-center lg:text-left">

          <h1 className="font-heading text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
            เขย่ามือถือ
            <br />
            <span className="bg-gradient-to-r from-pop-violet via-pop-pink to-pop-sun bg-clip-text text-transparent">
              ลุ้นรางวัลทันที
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-md text-lg text-pop-ink/70 lg:mx-0">
            <span className="block">เกมแจกรางวัลให้ร้านค้า คาเฟ่ แบรนด์</span>{" "}
            <span className="block">สแกน QR แล้วเขย่า ไม่ต้องโหลดแอป</span>
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href={rewardDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pop w-full sm:w-auto"
            >
              <Smartphone className="h-5 w-5" />
              ลองเขย่าฟรี
            </a>
            <a
              href={lineMessageUrl(rewardPackage.lineKeyword)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-line w-full sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" />
              ทัก LINE ดูแพ็ก
            </a>
          </div>

          <p className="mt-5 text-sm text-pop-ink/55">
            เริ่ม <span className="font-semibold text-pop-ink">{rewardPackage.price} บาท</span>{" "}
            / แคมเปญ 30 วัน
          </p>
        </div>

        <PhoneMockup />
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-60 sm:w-64" aria-hidden="true">
      <span className="absolute -left-14 top-16 text-4xl motion-safe:animate-float-slow">☕</span>
      <span className="absolute -right-12 top-6 text-4xl motion-safe:animate-float-slow [animation-delay:1.5s]">🎁</span>
      <span className="absolute -right-14 bottom-24 text-4xl motion-safe:animate-float-slow [animation-delay:3s]">🏷️</span>

      <div className="relative aspect-[9/18.5] overflow-hidden rounded-[2.6rem] border-[9px] border-pop-ink bg-gradient-to-b from-pop-sun via-pop-pink to-pop-violet shadow-[0_30px_60px_-20px_rgba(76,43,214,0.6)]">
        <div className="absolute left-1/2 top-2 h-5 w-20 -translate-x-1/2 rounded-full bg-pop-ink" />
        <p className="mt-12 text-center font-heading text-2xl font-bold text-white drop-shadow">
          เขย่าเลย!
        </p>
        <Image
          src={cylinderImg}
          alt=""
          priority
          sizes="160px"
          className="mx-auto mt-4 w-[55%] origin-bottom motion-safe:animate-shake"
        />
        <div className="absolute inset-x-3 bottom-5 rounded-2xl bg-white px-3 py-3 text-center shadow-xl motion-safe:animate-pop-in">
          <p className="text-xs font-medium text-pop-ink/60">🎉 ยินดีด้วย! คุณได้รับ</p>
          <p className="font-heading text-lg font-bold text-pop-violet">☕ ฟรี 1 แก้ว</p>
        </div>
      </div>
    </div>
  );
}
