import React from "react";

export const Card = ({
                  children,
                  title,
                  description,
              }: { children: React.ReactNode; title?: string; description?: string }) => (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-14 bg-white z-1000 overflow-hidden ">
        {(title || description) && (
            <div className="p-6 border-b border-gray-200">
                {title && <h2 className="text-xl font-semibold text-gray-800">{title}</h2>}
                {description && <p className="mt-1 text-sm text-gray-600">{description}</p>}
            </div>
        )}
        <div className="p-10">{children}</div>
    </div>
)