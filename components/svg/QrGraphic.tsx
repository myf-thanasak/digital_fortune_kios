// QR Code แบบกราฟิก (สร้างลวดลายคงที่ ดูเหมือน QR จริง ใช้เพื่อการนำเสนอ)
// ต้องการสลับเป็น QR จริง: แทนคอมโพเนนต์นี้ด้วย <img src="/qr-donate.png" /> ได้เลย

type Props = {
  size?: number;
  className?: string;
  fg?: string;
  bg?: string;
  rounded?: boolean;
};

const MODULES = 25;

function buildMatrix(): boolean[][] {
  const grid: boolean[][] = Array.from({ length: MODULES }, () =>
    Array<boolean>(MODULES).fill(false)
  );

  const placeFinder = (r0: number, c0: number) => {
    for (let r = 0; r < 7; r++) {
      for (let c = 0; c < 7; c++) {
        const edge = r === 0 || r === 6 || c === 0 || c === 6;
        const inner = r >= 2 && r <= 4 && c >= 2 && c <= 4;
        grid[r0 + r][c0 + c] = edge || inner;
      }
    }
  };

  placeFinder(0, 0);
  placeFinder(0, MODULES - 7);
  placeFinder(MODULES - 7, 0);

  // ตัวสร้างเลขสุ่มแบบ deterministic เพื่อให้ SSR/CSR ตรงกัน
  let seed = 1337;
  const rand = () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    return seed / 0x7fffffff;
  };

  for (let r = 0; r < MODULES; r++) {
    for (let c = 0; c < MODULES; c++) {
      const inFinderZone =
        (r < 8 && c < 8) ||
        (r < 8 && c >= MODULES - 8) ||
        (r >= MODULES - 8 && c < 8);
      if (inFinderZone) continue;
      grid[r][c] = rand() > 0.52;
    }
  }
  return grid;
}

const MATRIX = buildMatrix();

export default function QrGraphic({
  size = 220,
  className = "",
  fg = "#16110D",
  bg = "#FFFFFF",
  rounded = true,
}: Props) {
  const quiet = 2;
  const total = MODULES + quiet * 2;
  const cell = size / total;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      role="img"
      aria-label="QR Code สำหรับร่วมบริจาค (ภาพประกอบ)"
    >
      <rect
        x="0"
        y="0"
        width={size}
        height={size}
        rx={rounded ? 14 : 0}
        fill={bg}
      />
      {MATRIX.map((row, r) =>
        row.map((on, c) =>
          on ? (
            <rect
              key={`${r}-${c}`}
              x={(c + quiet) * cell}
              y={(r + quiet) * cell}
              width={cell + 0.5}
              height={cell + 0.5}
              fill={fg}
            />
          ) : null
        )
      )}
    </svg>
  );
}
