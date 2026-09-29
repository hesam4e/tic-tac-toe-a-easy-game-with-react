import "../Styles/BloodCss.css";

export function Blood() {
    return (
        <svg
            className="blood-effect"
            viewBox="0 0 1000 450"
            preserveAspectRatio="none"
        >
            <defs>

                <linearGradient
                    id="bloodGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                >
                    <stop offset="0%" stopColor="#a90000" />
                    <stop offset="45%" stopColor="#8b0000" />
                    <stop offset="75%" stopColor="#700000" />
                    <stop offset="100%" stopColor="#3d0000" />
                </linearGradient>

                {/* سایه خیلی ظریف */}
                <filter id="bloodShadow">
                    <feDropShadow
                        dx="0"
                        dy="2"
                        stdDeviation="2"
                        floodColor="#260000"
                        floodOpacity="0.55"
                    />
                </filter>

            </defs>


            <path
                className="blood"
                d="
                    M0 0
                    H1000
                    V45

                    C950 50 930 65 900 130
                    C880 180 840 180 820 125

                    C800 80 780 60 750 55
                    C700 65 680 130 650 155
                    C620 180 590 155 580 80

                    C570 55 540 50 500 55
                    C450 65 430 120 400 110
                    C370 100 350 60 330 55

                    C300 80 290 260 260 290
                    C230 265 225 120 210 60

                    C180 85 160 150 120 150
                    C80 150 60 85 50 55

                    C30 45 15 40 0 40
                    Z
                "
            />


            <path
                className="blood-highlight"
                d="
                    M20 25
                    C150 35 260 28 380 32
                    C500 38 620 28 760 32
                    C850 35 920 28 980 32
                "
            />

        </svg>
    );
}