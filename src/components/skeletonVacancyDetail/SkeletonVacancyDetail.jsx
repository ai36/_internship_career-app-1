import styles from "./SkeletonVacancyDetail.module.css";
import { useResize } from "@hooks/useResize";

const textData = {
  desktop: [
    { w: 336, h: 32, rg: 16 },
    { w: 197, h: 28, rg: 24 },
    { w: 224, h: 24, rg: 16 },
    [
      { w: 20, h: 20, cg: 16, rg: 28 },
      { w: 108, h: 20, cg: 32, rg: 28 },
      { w: 20, h: 20, cg: 16, rg: 28 },
      { w: 188, h: 20, cg: 32, rg: 28 },
      { w: 20, h: 20, cg: 16, rg: 28 },
      { w: 188, h: 20, cg: 0, rg: 28 },
    ],
    { w: 141, h: 52, rg: 32 },
    { w: 336, h: 28, rg: 24 },
    { w: 640, h: 24, rg: 12 },
    { w: 544, h: 24, rg: 12 },
    { w: 594, h: 24, rg: 12 },
    { w: 482, h: 24, rg: 32 },
    { w: 336, h: 28, rg: 24 },
    [
      { w: 64, h: 28, cg: 16, rg: 28 },
      { w: 89, h: 28, cg: 16, rg: 28 },
      { w: 52, h: 28, cg: 16, rg: 28 },
      { w: 57, h: 28, cg: 16, rg: 28 },
      { w: 37, h: 28, cg: 16, rg: 28 },
      { w: 44, h: 28, cg: 16, rg: 28 },
      { w: 66, h: 28, cg: 16, rg: 28 },
      { w: 71, h: 28, cg: 0, rg: 28 },
    ],
    { w: 123, h: 20 },
  ],
  tablet: [
    { w: 336, h: 32, rg: 12 },
    { w: 197, h: 28, rg: 16 },
    { w: 224, h: 24, rg: 12 },
    [
      { w: 20, h: 20, cg: 16, rg: 20 },
      { w: 108, h: 20, cg: 24, rg: 20 },
      { w: 20, h: 20, cg: 16, rg: 20 },
      { w: 188, h: 20, cg: 24, rg: 20 },
      { w: 20, h: 20, cg: 16, rg: 20 },
      { w: 188, h: 20, cg: 0, rg: 20 },
    ],
    { w: 141, h: 52, rg: 24 },
    { w: 336, h: 28, rg: 16 },
    { w: 640, h: 24, rg: 8 },
    { w: 544, h: 24, rg: 8 },
    { w: 594, h: 24, rg: 8 },
    { w: 482, h: 24, rg: 24 },
    { w: 336, h: 28, rg: 16 },
    [
      { w: 64, h: 28, cg: 12, rg: 20 },
      { w: 89, h: 28, cg: 12, rg: 20 },
      { w: 52, h: 28, cg: 12, rg: 20 },
      { w: 57, h: 28, cg: 12, rg: 20 },
      { w: 37, h: 28, cg: 12, rg: 20 },
      { w: 44, h: 28, cg: 12, rg: 20 },
      { w: 66, h: 28, cg: 12, rg: 20 },
      { w: 71, h: 28, cg: 0, rg: 20 },
    ],
    { w: 123, h: 20 },
  ],
  mobile: [
    { w: 225, h: 28, rg: 8 },
    { w: 131, h: 24, rg: 12 },
    { w: 181, h: 20, rg: 8 },
    [
      { w: 16, h: 16, cg: 8, rg: 4 },
      { w: 86, h: 16, cg: 16, rg: 4 },
      { w: 16, h: 16, cg: 8, rg: 4 },
      { w: 148, h: 16, cg: 0, rg: 4 },
    ],
    [
      { w: 16, h: 16, cg: 8, rg: 12 },
      { w: 148, h: 16, cg: 0, rg: 12 },
    ],
    { w: 109, h: 40, rg: 16 },
    { w: 225, h: 24, rg: 12 },
    { w: 303, h: 20, rg: 6 },
    { w: 248, h: 20, rg: 6 },
    { w: 282, h: 20, rg: 6 },
    { w: 209, h: 20, rg: 16 },
    { w: 225, h: 24, rg: 12 },
    [
      { w: 57, h: 24, cg: 8, rg: 0 },
      { w: 89, h: 24, cg: 8, rg: 0 },
      { w: 52, h: 24, cg: 8, rg: 0 },
      { w: 57, h: 24, cg: 0, rg: 0 },
    ],
    [
      { w: 37, h: 24, cg: 8, rg: 12 },
      { w: 44, h: 24, cg: 8, rg: 12 },
      { w: 66, h: 24, cg: 8, rg: 12 },
      { w: 71, h: 24, cg: 0, rg: 12 },
    ],
    { w: 105, h: 16 },
  ],
};

const logoData = {
  desktop: [
    { w: 108, h: 60, cg: 0, rg: 16 },
    [
      { w: 166, h: 28, cg: 0, rg: 8 },
      { w: 71, h: 24 },
    ],
  ],
  tablet: [
    { w: 108, h: 60 },
    [
      { w: 166, h: 28, cg: 24, rg: 8 },
      { w: 71, h: 24 },
    ],
  ],
  mobile: [
    { w: 100, h: 56 },
    [
      { w: 133, h: 24, cg: 16, rg: 8 },
      { w: 62, h: 20 },
    ],
  ],
};

const renderContent = (item) => {
  if (!Array.isArray(item)) return <div style={{ "--w": item.w, "--h": item.h, "--rg": item.rg, "--cg": item.cg }}></div>;
  return (
    <div>
      {item.map((item) => (
        <div style={{ "--w": item.w, "--h": item.h, "--rg": item.rg, "--cg": item.cg, display: "inline-block" }}></div>
      ))}
    </div>
  )
}

export const SkeletonVacancyDetail = () => {
  const screenType = useResize();

  return (
    <div className={styles.box}>
      <div className={styles.textBox}>
        {textData[screenType].map((item) => renderContent(item))}
      </div>
      <div className={styles.logoBox}>
        <div className={styles.wrapper}>
          <div className={styles.layout}>
            {logoData[screenType].map((item) => renderContent(item))}
          </div>
        </div>
      </div>
    </div>
  );
};
