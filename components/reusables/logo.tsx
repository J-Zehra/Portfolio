import Image from "next/image";

export default function Logo({ size = "2.5rem" }: { size?: string }) {
  return (
    <Image
      src="/logo_symbol.webp"
      alt="Logo"
      width={500}
      height={500}
      style={{ width: size }}
    />
  );
}
