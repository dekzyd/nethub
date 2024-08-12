export default function SingleExperience({ icon, title, content }) {
  return (
    <div className="flex gap-4">
      <div className="flex">
        <div className="h-[72px] w-[72px] bg-customColors-hitgray/60 rounded-full flex justify-center items-center">
          {icon}
        </div>
      </div>
      <div className="font-Open_sans">
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className="text-customColors-dovegray col-span-4  text-lg">
          {content}
        </p>
      </div>
    </div>
  );
}
