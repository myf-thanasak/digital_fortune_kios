// ลายไทย / กนก แบบเรียบง่าย ใช้ตกแต่งหัวข้อและคั่นเนื้อหา

type Props = { className?: string; color?: string };

export function LotusMark({ className = "", color = "#C8A24B" }: Props) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M24 6c2.6 4.2 2.6 9.4 0 13.6-2.6-4.2-2.6-9.4 0-13.6Z"
        fill={color}
      />
      <path
        d="M24 21c4.6-1 9.2.6 12.4 4.2-4.6 1-9.2-.6-12.4-4.2Zm0 0c-4.6-1-9.2.6-12.4 4.2 4.6 1 9.2-.6 12.4-4.2Z"
        fill={color}
        opacity="0.85"
      />
      <path
        d="M24 24c5.4 1.6 9.2 6 10.4 11.6C29 34.6 24.8 30.4 24 24Zm0 0c-5.4 1.6-9.2 6-10.4 11.6C19 34.6 23.2 30.4 24 24Z"
        fill={color}
      />
      <path
        d="M24 25c1.8 4 1.8 8.6 0 12.6-1.8-4-1.8-8.6 0-12.6Z"
        fill={color}
        opacity="0.9"
      />
    </svg>
  );
}

export function ThaiDivider({ className = "", color = "#C8A24B" }: Props) {
  return (
    <div
      className={`flex items-center justify-center gap-3 ${className}`}
      aria-hidden="true"
    >
      <span
        className="h-px w-16 sm:w-24"
        style={{
          background: `linear-gradient(90deg, transparent, ${color})`,
        }}
      />
      <LotusMark className="h-6 w-6" color={color} />
      <span
        className="h-px w-16 sm:w-24"
        style={{
          background: `linear-gradient(90deg, ${color}, transparent)`,
        }}
      />
    </div>
  );
}
