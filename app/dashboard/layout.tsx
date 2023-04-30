import React from 'react';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className='flex-auto' data-testid='layout-div'>
            {children}
        </div>
    );
}