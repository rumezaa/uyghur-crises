const Info = ({ title, description, img, caption, source }) => {
  return (
    <div className="flex flex-row justify-between w-full ">
      <a className="w-2/5 bg-blue-500 text-white font-light flex flex-col items-center justify-center" href={source}>
        <img src={img} alt="item" className="w-5/6" />
        <h2 className="text-xs w-5/6">{caption}</h2>
      </a>

      <div className="flex flex-col gap-2 w-3/5 pl-10 py-20">
        <h2 className="font-bold text-xl">{title}</h2>
        {description}
      </div>
    </div>
  );
};

export default Info;
