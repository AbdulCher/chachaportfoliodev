export default function Loader({ done }) {
  return (
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center 
        bg-[#001219] transition-opacity duration-700
        ${done ? "opacity-0 pointer-events-none" : "opacity-100"}
      `}
    >
      <div className="flex space-x-3">
        <div className="animate-bounce text-[#ff7d00] text-2xl">
          <h3>@////</h3>
        </div>
        <div className="w-4 h-4 bg-[#15616d] rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-[#ff7d00] rounded-full animate-bounce delay-150"></div>
        <div className="w-4 h-4 bg-[#78290f] rounded-full animate-bounce delay-300"></div>
      </div>
    </div>
  );
}
