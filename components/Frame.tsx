import Image, { type StaticImageData } from "next/image";

type Props = {
  src: StaticImageData;
  alt: string;
  plate?: string;
  note?: string;
  sizes: string;
  className?: string;
};

// A framed photograph with a gallery-style caption: plate number, then a materials note.
export function Frame({ src, alt, plate, note, sizes, className }: Props) {
  return (
    <figure className={`frame ${className ?? ""}`}>
      <div className="frame__img">
        <Image src={src} alt={alt} sizes={sizes} placeholder="blur" />
      </div>
      {(plate || note) && (
        <figcaption>
          {plate && <b>{plate}</b>}
          {note && <span>{note}</span>}
        </figcaption>
      )}
    </figure>
  );
}
