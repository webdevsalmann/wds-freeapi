
export default function DisplayCard({ children, className }) {
    return (
        <div className="max-w-[30rem] mx-auto">
            <div className={`relative m-3 p-[1px] set-bg-light rounded-2xl flex-center overflow-hidden group ${className}`}>
                <span
                    className="absolute w-[60rem] h-[60rem] aspect-square bg-gradient-to-r from-lime-500 via-transparent to-lime-500 animate-[spin_6s_linear_infinite] z-0"></span>
                <div className="set-bg rounded-2xl w-full h-full z-10">
                    {children}
                </div>
            </div>
        </div>
    )
}
