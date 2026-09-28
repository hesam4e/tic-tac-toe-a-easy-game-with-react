import { useState } from 'react';

export function RippleButton({ children, onClick }) {
    const [ripples, setRipples] = useState([]);

    const handleClick = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        const newRipple = {
            id: Date.now(),
            x,
            y,
            size
        };

        setRipples([...ripples, newRipple]);

        setTimeout(() => {
            setRipples(ripples => ripples.filter(r => r.id !== newRipple.id));
        }, 600);

        if (onClick) onClick();
    };

    return (
        <button
            onClick={handleClick}
            style={{
                position: 'relative',
                overflow: 'hidden',
                padding: '12px 24px',
                fontSize: '18px',
                border: 'none',
                borderRadius: '8px',
                backgroundColor: '#6366f1',
                color: 'white',
                cursor: 'pointer',
                transition: 'transform 0.2s',
                fontWeight: 'bold'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
            {children}
            {ripples.map(ripple => (
                <span
                    key={ripple.id}
                    style={{
                        position: 'absolute',
                        left: ripple.x,
                        top: ripple.y,
                        width: ripple.size,
                        height: ripple.size,
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255,255,255,0.4)',
                        transform: 'scale(0)',
                        animation: 'rippleAnimation 0.6s ease-out forwards',
                        pointerEvents: 'none'
                    }}
                />
            ))}
            <style>{`
        @keyframes rippleAnimation {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
        </button>
    );
}
