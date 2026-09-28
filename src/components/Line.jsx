export function Line({ coords }) {
    if (!coords) return null;

    return (
        <svg
            className="win-svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
        >
            <defs>
                <filter id="roughStroke" x="-20%" y="-20%" width="140%" height="140%">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.1"
                        numOctaves="3"
                        seed="2"
                        result="noise"
                    />
                    <feDisplacementMap
                        in="SourceGraphic"
                        in2="noise"
                        scale="1.5"
                        xChannelSelector="R"
                        yChannelSelector="G"
                    />
                </filter>
            </defs>

            <path
                d={`M ${coords.x1} ${coords.y1}
            Q ${(coords.x1 + coords.x2) / 2 + 2} ${(coords.y1 + coords.y2) / 2 - 1}
            ${coords.x2} ${coords.y2}`}
                stroke="black"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                filter="url(#roughStroke)"
            />
        </svg>
    );
}