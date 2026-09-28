import "../ThunderCss.css";
import lightning from "../image/lightning.svg";

export function Thunder() {
    return (
        <div className="lightning-effect">

            <img
                src={lightning}
                alt=""
                className="lightning-image"
            />

        </div>
    );
}