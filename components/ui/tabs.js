import * as React from "react";

export function Tabs({ children, className = "", ...props }) {
  return <div className={`space-y-2 ${className}`} {...props}>{children}</div>;
}

export function TabsList({ children, className = "", ...props }) {
  return <div className={`flex gap-2 border-b pb-2 ${className}`} {...props}>{children}</div>;
}

export function TabsTrigger({ children, className = "", ...props }) {
  return <button className={`text-sm font-medium text-gray-500 hover:text-black ${className}`} {...props}>{children}</button>;
}

export function TabsContent({ children, className = "", ...props }) {
  return <div className={`pt-4 ${className}`} {...props}>{children}</div>;
}
