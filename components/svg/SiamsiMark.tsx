// โลโก้ไอคอน "ดิจิทัลเซียมซี" — กระบอกเซียมซีพร้อมไม้เสี่ยงทาย
// ปลายไม้เป็นพิกเซลสื่อความเป็นดิจิทัล โทนแดงเข้ม-น้ำตาลอุ่น ตัดทอง
// แบบ flat vector อ่านง่ายในขนาดเล็ก เหมาะกับ header เว็บไซต์

type Props = { className?: string };

const STICKS = [-17, -8.5, 0, 8.5, 17];

export function SiamsiMark({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      role="img"
      aria-label="ดิจิทัลเซียมซี"
    >
      <defs>
        <linearGradient id="siamsi-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#A81E23" />
          <stop offset="0.55" stopColor="#7A0E12" />
          <stop offset="1" stopColor="#43130F" />
        </linearGradient>
        <linearGradient id="siamsi-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F3DD93" />
          <stop offset="1" stopColor="#C8A24B" />
        </linearGradient>
      </defs>

      {/* พื้นหลังการ์ดมุมมน */}
      <rect
        x="0.9"
        y="0.9"
        width="38.2"
        height="38.2"
        rx="11"
        fill="url(#siamsi-bg)"
        stroke="#C8A24B"
        strokeOpacity="0.55"
        strokeWidth="1.4"
      />
      {/* แสงสะท้อนบาง ๆ ด้านบน */}
      <rect x="3.5" y="3.5" width="33" height="14" rx="9" fill="#ffffff" opacity="0.06" />

      {/* ไม้เซียมซีเรียงพัด ปลายเป็นพิกเซล */}
      <g>
        {STICKS.map((a, i) => {
          const center = a === 0;
          const top = center ? 7.4 : 9;
          const h = center ? 17.6 : 16;
          const tipY = top - 2.4;
          return (
            <g key={i} transform={`rotate(${a} 20 25)`}>
              <rect
                x="18.85"
                y={top}
                width="2.3"
                height={h}
                rx="1.15"
                fill="url(#siamsi-gold)"
              />
              <rect
                x="18.4"
                y={tipY}
                width="3.2"
                height="3.2"
                rx="0.6"
                fill="#F7E6AE"
              />
            </g>
          );
        })}
      </g>

      {/* ช่องเปิดของกระบอก (ด้านใน) */}
      <ellipse cx="20" cy="24.4" rx="7" ry="2" fill="#3C100C" />

      {/* ตัวกระบอก */}
      <path
        d="M13 24.4 H27 L25.5 32.6 Q25.3 34 24 34 H16 Q14.7 34 14.5 32.6 Z"
        fill="url(#siamsi-gold)"
      />
      {/* ดวงตราบนกระบอก (ซับเทิล) */}
      <circle cx="20" cy="29.2" r="2.3" fill="#7A0E12" opacity="0.16" />

      {/* ขอบปากกระบอก */}
      <ellipse
        cx="20"
        cy="24.4"
        rx="7"
        ry="2"
        fill="none"
        stroke="url(#siamsi-gold)"
        strokeWidth="1.3"
      />
    </svg>
  );
}
