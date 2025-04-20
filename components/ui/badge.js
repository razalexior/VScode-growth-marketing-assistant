export function Badge({ children, className = "" }) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 ${className}`}>
      {children}
    </span>
  );
}
