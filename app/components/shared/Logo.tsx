export default function Logo({
  textSize,
  textColor,
  textWeight,
}: {
  textSize?: string;
  textColor?: string;
  textWeight?: string;
}) {
  return (
    <div>
      <h1
        className={`font-bebas-neue ${
          textSize || "text-2xl"
        } ${textColor || "text-black"} ${textWeight || "font-bold"}`}
      >
        FRMD
      </h1>
    </div>
  );
}
