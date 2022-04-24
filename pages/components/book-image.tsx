import { FC } from "react";
import image from "../../public/sample.jpg";
import Image from "next/image";
export const BookImage: FC = () => {
  return (
    <div>
      <Image
        style={{
          position: "relative",
        }}
        src={image}
        alt="Picture of the author"
      />
    </div>
  );
};
