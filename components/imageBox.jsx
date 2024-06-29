import Image from "next/image";

function ImageBox({ profilePic, contents, headerText }) {
  return (
    <div className="flex gap-4 pb-[10px]">
      <div className="w-[40px] h-[40px] rounded-full overflow-hidden flex">
        <Image
          src={profilePic}
          alt="alt image"
          width={100}
          height={100}
          className="object-cover"
        />
      </div>
      <div className="">
        <h3 className="uppercase font-bold text-customColors-hitgray tracking-wide">
          {headerText}
        </h3>
        <p className="text-white font-normal">{contents}</p>
      </div>
    </div>
  );
}

export default ImageBox;
