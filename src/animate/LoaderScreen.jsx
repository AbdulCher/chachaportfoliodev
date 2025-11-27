export default function LoaderScreen({ fadeOut }) {
  return (
    <div
      className={`
        flex items-center justify-center h-screen bg-[#001219]
        transition-opacity duration-200
        ${fadeOut ? "opacity-0" : "opacity-100"}
      `}
    >
      <div className="flex space-x-3">
        {/* Logo */}
        <div className="animate-bounce p-2 border-t-8 text-[#ff7d00] text-3xl w-26 h-22">
          <h3>@/////</h3>
        </div>
        <div className="w-5 h-5 bg-[#15616d] rounded-full animate-bounce"></div>
        <div className="w-5 h-5 bg-[#ff7d00] rounded-full animate-bounce [animation-delay:0.2s]"></div>
        <div className="w-5 h-5 bg-[#78290f] rounded-full animate-bounce [animation-delay:0.4s]"></div>
      </div>
    </div>
  );
}
