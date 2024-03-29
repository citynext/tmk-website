export default function Button({ children, className, outline, ...props }) {
    const _className = outline ? "bg-white border border-text text-text" : "bg-secondary text-white";
    return (
        <button className={`rounded-3xl px-6 transition-all duration-300 py-2 hover:bg-primary hover:border-white hover:text-white ${_className} ${className}`} {...props}>
            {children}
        </button>
    )
}