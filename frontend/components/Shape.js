import Image from "next/image";

const Shape = () => {
  return (
    <div className="background-shapes">
      <div className="shape-1 common-shape">
        <Image width={0} height={0} className="w-full h-auto" sizes={"100vw"} src="/assets/img/bg/banner-shape-1.png" alt="banner-shape-1" />
      </div>
      <div className="shape-2 common-shape">
        <Image width={0} height={0} className="w-full h-auto" sizes={"100vw"} src="/assets/img/bg/banner-shape-1.png" alt="banner-shape-1" />
      </div>
      <div className="threed-shape-1 move-with-cursor" data-value={1}>
        <Image width={0} height={0} className="w-full h-auto" sizes={"100vw"} src="/assets/img/bg/object-3d-1.png" alt="object-3d-1" />
      </div>
      <div className="threed-shape-2 move-with-cursor" data-value={1}>
        <Image width={0} height={0} className="w-full h-auto" sizes={"100vw"} src="/assets/img/bg/object-3d-2.png" alt="object-3d-2" />
      </div>
    </div>
  );
};
export default Shape;
