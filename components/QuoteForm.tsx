"use client";

import { useState, type FormEvent } from "react";
import {
  User,
  Building2,
  Phone,
  MessageCircle,
  FileText,
  Copy,
  Check,
  PhoneCall,
} from "lucide-react";
import { site } from "@/lib/site";

type FormState = {
  name: string;
  org: string;
  phone: string;
  lineId: string;
  details: string;
};

const initialState: FormState = {
  name: "",
  org: "",
  phone: "",
  lineId: "",
  details: "",
};

function buildMessage(data: FormState) {
  return [
    "ขอใบเสนอราคา Digital เซียมซี",
    "──────────────────",
    `ชื่อผู้ติดต่อ: ${data.name || "-"}`,
    `ชื่อวัด/องค์กร: ${data.org || "-"}`,
    `เบอร์โทร: ${data.phone || "-"}`,
    `LINE ID: ${data.lineId || "-"}`,
    `รายละเอียดที่สนใจ: ${data.details || "-"}`,
  ].join("\n");
}

export default function QuoteForm() {
  const [data, setData] = useState<FormState>(initialState);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState("");

  const update = (key: keyof FormState) => (value: string) =>
    setData((prev) => ({ ...prev, [key]: value }));

  const copyMessage = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!data.name.trim()) {
      setError("กรุณากรอกชื่อผู้ติดต่อ");
      return;
    }
    if (!data.phone.trim() && !data.lineId.trim()) {
      setError("กรุณากรอกเบอร์โทรหรือ LINE ID อย่างน้อย 1 ช่องทาง");
      return;
    }
    setError(null);
    const msg = buildMessage(data);
    setMessage(msg);
    await copyMessage(msg);
    setSent(true);
    window.open(site.lineUrl, "_blank", "noopener,noreferrer");
  };

  if (sent) {
    return (
      <div className="rounded-3xl border border-temple-gold/30 bg-white p-6 shadow-card sm:p-8">
        <div className="flex flex-col items-center text-center">
          <span className="grid h-16 w-16 place-items-center rounded-full bg-emerald-500/15 text-emerald-600">
            <Check className="h-8 w-8" />
          </span>
          <h3 className="mt-4 font-heading text-xl font-bold text-temple-ink">
            เตรียมข้อความเรียบร้อยแล้ว
          </h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-temple-ink/70">
            เราได้คัดลอกรายละเอียดของท่านไว้แล้ว และเปิดแชต LINE
            <span className="font-semibold text-temple-ink"> {site.lineId} </span>
            ให้อัตโนมัติ — เพียง <span className="font-semibold">วางข้อความ</span>{" "}
            แล้วกดส่ง ทีมงานจะติดต่อกลับโดยเร็ว
          </p>
        </div>

        <pre className="mt-6 max-h-48 overflow-auto whitespace-pre-wrap rounded-2xl bg-temple-cream p-4 text-left text-sm text-temple-ink/85">
          {message}
        </pre>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <button
            type="button"
            onClick={() => copyMessage(message)}
            className="btn-outline-gold !text-temple-ink"
          >
            {copied ? (
              <Check className="h-5 w-5 text-emerald-600" />
            ) : (
              <Copy className="h-5 w-5" />
            )}
            {copied ? "คัดลอกแล้ว" : "คัดลอกอีกครั้ง"}
          </button>
          <a
            href={site.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-line"
          >
            <MessageCircle className="h-5 w-5" />
            เปิด LINE
          </a>
          <a href={`tel:${site.phoneRaw}`} className="btn-red">
            <PhoneCall className="h-5 w-5" />
            โทรเลย
          </a>
        </div>

        <button
          type="button"
          onClick={() => {
            setSent(false);
            setData(initialState);
          }}
          className="mt-4 w-full text-center text-sm font-medium text-temple-ink/50 hover:text-temple-red"
        >
          กรอกแบบฟอร์มใหม่
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-temple-gold/30 bg-white p-6 shadow-card sm:p-8"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="ชื่อผู้ติดต่อ"
          required
          icon={<User className="h-4 w-4" />}
          value={data.name}
          onChange={update("name")}
          placeholder="เช่น คุณสมชาย"
          autoComplete="name"
        />
        <Field
          label="ชื่อวัด / องค์กร"
          icon={<Building2 className="h-4 w-4" />}
          value={data.org}
          onChange={update("org")}
          placeholder="เช่น วัดพระแก้ว"
        />
        <Field
          label="เบอร์โทร"
          icon={<Phone className="h-4 w-4" />}
          value={data.phone}
          onChange={update("phone")}
          placeholder="08X-XXX-XXXX"
          type="tel"
          autoComplete="tel"
        />
        <Field
          label="LINE ID"
          icon={<MessageCircle className="h-4 w-4" />}
          value={data.lineId}
          onChange={update("lineId")}
          placeholder="เช่น @yourtemple"
        />
      </div>

      <div className="mt-4">
        <label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-temple-ink">
          <FileText className="h-4 w-4 text-temple-gold" />
          รายละเอียดที่สนใจ
        </label>
        <textarea
          value={data.details}
          onChange={(e) => update("details")(e.target.value)}
          rows={4}
          placeholder="เช่น สนใจติดตั้งที่วัด ต้องการตู้ Kiosk 1 จุด พร้อม QR รับบริจาค"
          className="w-full rounded-xl border border-temple-gold/30 bg-temple-cream/50 px-4 py-3 text-sm text-temple-ink outline-none transition-colors placeholder:text-temple-ink/40 focus:border-temple-gold focus:bg-white focus:ring-2 focus:ring-temple-gold/30"
        />
      </div>

      {error ? (
        <p className="mt-3 rounded-lg bg-temple-red/10 px-4 py-2.5 text-sm font-medium text-temple-red">
          {error}
        </p>
      ) : null}

      <button type="submit" className="btn-primary mt-5 w-full">
        <FileText className="h-5 w-5" />
        ขอใบเสนอราคา
      </button>
      <p className="mt-3 text-center text-xs text-temple-ink/50">
        เมื่อกดส่ง ระบบจะคัดลอกข้อมูลและเปิดแชต LINE {site.lineId} ให้อัตโนมัติ
      </p>
    </form>
  );
}

function Field({
  label,
  icon,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  icon: React.ReactNode;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-temple-ink">
        <span className="text-temple-gold">{icon}</span>
        {label}
        {required ? <span className="text-temple-red">*</span> : null}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-temple-gold/30 bg-temple-cream/50 px-4 py-3 text-sm text-temple-ink outline-none transition-colors placeholder:text-temple-ink/40 focus:border-temple-gold focus:bg-white focus:ring-2 focus:ring-temple-gold/30"
      />
    </div>
  );
}
