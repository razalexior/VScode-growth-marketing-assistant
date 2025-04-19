export function Avatar({ children, className = "" }) {
    return <div className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}>{children}</div>;
  }
  
  export function AvatarImage({ src, alt }) {
    return <img src={src} alt={alt || "Avatar"} className="object-cover w-full h-full" />;
  }
  
  export function AvatarFallback({ children, className = "" }) {
    return <div className={`flex h-full w-full items-center justify-center bg-muted text-muted-foreground ${className}`}>{children}</div>;
  }
  