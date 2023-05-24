import * as React from "react"
const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
            enableBackground: "new 0 0 414 414",
            backgroundColor: props.color,
            borderRadius: '50%'
        }}
        viewBox="0 0 414 414"
    >
        <path
            d="M84.2 85c31.3-31.5 74.7-51 122.7-51 95.5 0 173 77.5 173 173s-77.5 173-173 173c-47.8 0-91-19.4-122.3-50.7"
            className="transrg"
            style={{
                opacity: 0.4,
                fill: "none",
                stroke: "#fff",
                strokeWidth: 2,
                strokeMiterlimit: 10,
                enableBackground: "new",
            }}
        />
        <path
            strokeDasharray={`${props.position}, 1000`}
            d="M84.2 85c31.3-31.5 74.7-51 122.7-51 95.5 0 173 77.5 173 173s-77.5 173-173 173c-47.8 0-91-19.4-122.3-50.7"
            className="transrgwht"
            style={{
                fill: "none",
                stroke: "#fff",
                strokeWidth: 2,
                strokeMiterlimit: 10,
                strokeDasharray: `${props.position}, 1000`,
            }}
        />
        <g className="dots-nav">
            <path
                d="M84 80c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                className="dotsst dotsfill1"
                style={{
                    fill: "#0092ff",
                    opacity: 1,
                }}
            />
            <path
                d="M84 80c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                className="dotsstro1"
                style={{
                    opacity: 1,
                    fill: "none",
                    stroke: "#fff",
                    strokeWidth: 2,
                    strokeMiterlimit: 10,
                }}
            />
        </g>
        <g className="dots-nav">
            <path
                d="M206.8 29c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z"
                className="dotsst dotsfill2"
                style={{
                    fill: "#0092ff",
                    opacity: 1,
                }}
            />
            <path
                d="M206.8 29c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z"
                className="dotsstro2"
                style={{
                    opacity: 1,
                    fill: "none",
                    stroke: "#fff",
                    strokeWidth: 2,
                    strokeMiterlimit: 10,
                }}
            />
        </g>
        <g className="dots-nav">
            <path
                d="M332 85c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                className="dotsst dotsfill3"
                style={{
                    fill: "#0092ff",
                    opacity: 1,
                }}
            />
            <path
                d="M332 85c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                className="dotsstro3"
                style={{
                    opacity: 1,
                    fill: "none",
                    stroke: "#fff",
                    strokeWidth: 2,
                    strokeMiterlimit: 10,
                }}
            />
        </g>
        <g className="dots-nav">
            <path
                d="M380 205c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                className="dotsst dotsfill4"
                style={{
                    fill: "#0092ff",
                    opacity: 1,
                }}
            />
            <path
                d="M380 205c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                className="dotsstro4"
                style={{
                    opacity: 1,
                    fill: "none",
                    stroke: "#fff",
                    strokeWidth: 2,
                    strokeMiterlimit: 10,
                }}
            />
        </g>
        <g className="dots-nav">
            <path
                d="M335 315c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6z"
                className="dotsst dotsfill5"
                style={{
                    fill: "#0092ff",
                    opacity: 1,
                }}
            />
            <path
                d="M335 315c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6z"
                className="dotsstro5"
                style={{
                    opacity: 1,
                    fill: "none",
                    stroke: "#fff",
                    strokeWidth: 2,
                    strokeMiterlimit: 10,
                }}
            />
        </g>
        <g className="dots-nav">
            <path
                d="M210 375c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6z"
                className="dotsst dotsfill6"
                style={{
                    fill: "#0092ff",
                    opacity: 1,
                }}
            />
            <path
                d="M210 375c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6z"
                className="dotsstro6"
                style={{
                    opacity: 1,
                    fill: "none",
                    stroke: "#fff",
                    strokeWidth: 2,
                    strokeMiterlimit: 10,
                }}
            />
        </g>
        <g className="dots-nav">
            <path
                d="M88 324c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2-6-6-6z"
                className="dotsst dotsfill7"
                style={{
                    fill: "#0092ff",
                    opacity: 1,
                }}
            />
            <path
                d="M88 324c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2-6-6-6z"
                className="dotsstro7"
                style={{
                    opacity: 1,
                    fill: "none",
                    stroke: "#fff",
                    strokeWidth: 2,
                    strokeMiterlimit: 10,
                }}
            />
        </g>
    </svg>
)
export default SvgComponent
