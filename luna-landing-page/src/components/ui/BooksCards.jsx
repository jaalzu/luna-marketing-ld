export default function BookCard({ title, description, image, color }) {
  return (
    <article className={`book flex flex-col items-center flex-shrink-0 w-[340px] md:w-[360px] h-[520px] ${color} p-4 rounded-xl text-white book-card`}>
      <img
        src={image.src}
        alt={title}
        className="w-[180px] h-[270px] md:w-[200px] md:h-[290px] object-cover rounded-md shadow-lg"
      />
      <h3 className="text-[25px] font-bold text-center mt-3 mb-3">
        {title}
      </h3>
      <p className="text-[13px] md:text-[15px] text-center px-2 line-clamp-2 leading-snug">
        {description}
      </p>
      <button className="mt-8 bg-white text-gray-800 rounded-md px-11 py-3 font-bold hover:bg-opacity-80 transition shadow-md text-[14px]">
        Comprar
      </button>
    </article>
  );
}