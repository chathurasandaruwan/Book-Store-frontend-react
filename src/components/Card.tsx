import React from "react";

export const Card = ({
                  children,
                  title,
                  description,
              }: { children: React.ReactNode; title?: string; description?: string }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {(title || description) && (
            <div className="p-6 border-b border-gray-200">
                {title && <h2 className="text-xl font-semibold text-gray-800">{title}</h2>}
                {description && <p className="mt-1 text-sm text-gray-600">{description}</p>}
            </div>
        )}
        <div className="p-6">{children}</div>
    </div>
)