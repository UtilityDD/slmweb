import React, { useEffect, useState } from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';
import { RefreshCw, X } from 'lucide-react';

const PWAUpdateNotification: React.FC = () => {
    const [showReload, setShowReload] = useState(false);

    const {
        offlineReady: [offlineReady, setOfflineReady],
        needRefresh: [needRefresh, setNeedRefresh],
        updateServiceWorker,
    } = useRegisterSW({
        onRegistered(r) {
            console.log('SW Registered: ' + r);
        },
        onRegisterError(error) {
            console.log('SW registration error', error);
        },
    });

    const close = () => {
        setOfflineReady(false);
        setNeedRefresh(false);
        setShowReload(false);
    };

    useEffect(() => {
        if (offlineReady || needRefresh) {
            setShowReload(true);
        }
    }, [offlineReady, needRefresh]);

    if (!showReload) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 lg:left-auto lg:right-4 lg:w-96 z-[100] animate-in slide-in-from-bottom-4 duration-300">
            <div className="bg-slate-900 text-white rounded-2xl shadow-2xl p-4 border border-slate-700">
                <div className="flex items-start gap-3">
                    <div className="bg-blue-500/20 p-2 rounded-lg flex-shrink-0">
                        <RefreshCw size={20} className="text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-sm mb-1">
                            {needRefresh ? 'Update Available' : 'Ready for Offline Use'}
                        </h3>
                        <p className="text-slate-300 text-xs leading-relaxed">
                            {needRefresh
                                ? 'A new version is available. Click reload to update.'
                                : 'App is ready to work offline!'}
                        </p>
                        {needRefresh && (
                            <button
                                onClick={() => updateServiceWorker(true)}
                                className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-xs transition-colors"
                            >
                                Reload App
                            </button>
                        )}
                    </div>
                    <button
                        onClick={close}
                        className="text-slate-400 hover:text-white transition-colors flex-shrink-0"
                        aria-label="Close notification"
                    >
                        <X size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PWAUpdateNotification;
