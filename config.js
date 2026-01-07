const SHOP_CONFIG = {
    shopName: "Zee Cuts",
    shopTagline: "Walk-In Queue",
    logoUrl: null,
    useGenericBranding: false,
    reviewLink: "https://reviewthis.biz/kiyoio",
    bookingLink: "https://reviewthis.biz/kiyoio",

    theme: {
        primary: "#818cf8",
        primaryGlow: "rgba(129, 140, 248, 0.5)",
        secondary: "#a78bfa",
        secondaryGlow: "rgba(167, 139, 250, 0.5)",
        success: "#34d399",
        successGlow: "rgba(52, 211, 153, 0.5)",
        danger: "#f87171",
        warning: "#fbbf24",
        info: "#60a5fa",
        bgDark: "#0c0a2e",
        textMain: "#f8fafc",
        textMuted: "#cbd5e1",
        glassBg: "rgba(255, 255, 255, 0.08)",
        glassBorder: "rgba(255, 255, 255, 0.15)",
    },

    location: {
        enabled: true,
        latitude: 51.102640,
        longitude: -113.935633,
        maxDistanceMeters: 100,
    },

    barbers: [
        { id: 'john', name: 'John', avatar: '👨', color: '#6366f1' },
        { id: 'mike', name: 'Mike', avatar: '👨‍🦱', color: '#8b5cf6' },
        { id: 'sarah', name: 'Sarah', avatar: '👩', color: '#ec4899' },
        { id: 'next_available', name: 'Next Available', avatar: '⚡', color: '#10b981' }
    ],

    services: [
        { id: 'mens-regular', name: "Men's Regular Cut", duration: 40, price: 30 },
        { id: 'skin-fade', name: "Skin Fade (Only)", duration: 40, price: 30 },
        { id: 'skin-fade-beard', name: "Skin Fade + Beard Trim & Line Up", duration: 60, price: 40 },
        { id: 'taper-fade', name: "Taper Fade + Beard Line Up", duration: 60, price: 35 },
        { id: 'hair-beard-only', name: "Hair + Beard Line Up (Only)", duration: 20, price: 20 },
        { id: 'womens-cut', name: "Women's Hair Cut", duration: 40, price: 30 },
        { id: 'seniors', name: "Seniors' Haircut", duration: 30, price: 25 },
        { id: 'kids-cut', name: "Kids' Cut", duration: 30, price: 20 },
        { id: 'luxury', name: "Luxury Service", duration: 95, price: 60, description: "Full Package" },
        { id: 'mens-wash', name: "Men's Wash (Buzz Cut)", duration: 10, price: 10 },
    ],

    api: {
        baseUrl: "https://n8n.srv1146840.hstgr.cloud/webhook",
        checkin: "/checkin",
        queue: "/api/queue",
        startService: "/start-service",
        completeService: "/complete-service",
        noShow: "/no-show",
        callback: "/customer-callback",
        cancel: "/customer-cancel",
    },

    security: {
        dashboardPassword: "barber2024",
        qrAccessToken: "barber_qr_2024",
        sessionTimeout: 3 * 60 * 1000,
        dashboardSessionDuration: 8 * 60 * 60 * 1000,
    },

    sms: {
        fromNumber: "+15879121963",
        countryCode: "+1",
    },

    display: {
        currency: "$",
        timeFormat: 12,
        showPrices: true,
        showWaitTimes: true,
    },
};

function getApiUrl(endpoint) {
    const path = SHOP_CONFIG.api[endpoint] || endpoint;
    return SHOP_CONFIG.api.baseUrl + path;
}

function applyTheme() {
    const root = document.documentElement;
    const theme = SHOP_CONFIG.theme;
    root.style.setProperty('--primary', theme.primary);
    root.style.setProperty('--primary-glow', theme.primaryGlow);
    root.style.setProperty('--secondary', theme.secondary);
    root.style.setProperty('--secondary-glow', theme.secondaryGlow);
    root.style.setProperty('--success', theme.success);
    root.style.setProperty('--success-glow', theme.successGlow);
    root.style.setProperty('--danger', theme.danger);
    root.style.setProperty('--warning', theme.warning);
    root.style.setProperty('--info', theme.info);
    root.style.setProperty('--bg-dark', theme.bgDark);
    root.style.setProperty('--text-main', theme.textMain);
    root.style.setProperty('--text-muted', theme.textMuted);
    root.style.setProperty('--glass-bg', theme.glassBg);
    root.style.setProperty('--glass-border', theme.glassBorder);
    document.body.style.background = theme.bgDark;
}

if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyTheme);
    } else {
        applyTheme();
    }
}
