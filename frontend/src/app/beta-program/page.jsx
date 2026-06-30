import React, { Suspense } from 'react';
import BetaProgramContent from '../../components/BetaProgramContent';

export const metadata = {
    title: 'Join the Trixon Beta Program | Early Access | Trixon',
    description: 'Get early access to upcoming software products built by Trixon. Apply to be a beta tester, share feedback, and help shape our product roadmap.',
    alternates: {
        canonical: '/beta-program',
    },
};

export default function BetaProgramPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-stone-50 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-stone-300 border-t-stone-900 rounded-full animate-spin"></div>
            </div>
        }>
            <BetaProgramContent />
        </Suspense>
    );
}
