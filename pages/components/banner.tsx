import { FC } from "react";
import image from "../../public/canvas-girl.jpg";
import Image from "next/image";

export const Banner: FC = () => {
  return (
    <div style={{ paddingLeft: "40rem" }}>
      <div
        style={{
          position: "absolute",
          zIndex: "1",
          transform: "translate(-100px, 145px)",
        }}
      >
        <svg
          width="592"
          height="408"
          viewBox="0 0 592 408"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.6" filter="url(#filter0_d_4_1154)">
            <rect x="4" width="584" height="400" fill="#00B875" opacity="0.6" />
            <rect
              x="4.5"
              y="0.5"
              width="583"
              height="399"
              stroke="#00B875"
              opacity="0.6"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_4_1154"
              x="0"
              y="0"
              width="592"
              height="408"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_4_1154"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_4_1154"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <Image
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          position: "relative",
          width: "100%",
          height: "100%",
        }}
        src={image}
        alt="Picture of the author"
      />
    </div>
  );
};
