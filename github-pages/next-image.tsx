import type { CSSProperties, ImgHTMLAttributes } from "react";

type StaticImageSource = { src: string };

type ImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "width" | "height"> & {
  src: string | StaticImageSource;
  width?: number | `${number}`;
  height?: number | `${number}`;
  fill?: boolean;
  priority?: boolean;
  unoptimized?: boolean;
};

function withRepositoryBase(source: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  if (!source.startsWith("/") || source.startsWith(`${base}/`)) return source;
  return `${base}${source}`;
}

export default function Image({
  src,
  width,
  height,
  fill,
  priority,
  unoptimized,
  style,
  ...props
}: ImageProps) {
  const source = withRepositoryBase(typeof src === "string" ? src : src.src);
  const fillStyle: CSSProperties | undefined = fill
    ? { position: "absolute", inset: 0, width: "100%", height: "100%", ...style }
    : style;

  return (
    <img
      {...props}
      src={source}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      style={fillStyle}
      loading={priority ? "eager" : props.loading}
    />
  );
}
