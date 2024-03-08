const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";
export const MovieCard = ({ title, imagePath }: any) => {
  const imgUrl = `${IMG_BASE_URL}${imagePath}`;
  return (
    <div className="bg-slate-300 rounded-lg">
      <img src={imgUrl} className="w-72 rounded-t-lg" alt="alt" />
      <span className="flex items-center justify-center p-3 max-w-72 flex-wrap text-center">
        {title}
      </span>
    </div>
  );
};
