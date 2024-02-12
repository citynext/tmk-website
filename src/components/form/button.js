export default function Button({ children, className, outline, ...props }) {
    const _className = outline ? "bg-white border border-text text-text" : "bg-secondary text-white";
    return (
        <button className={`rounded-3xl px-5 py-1 hover:bg-primary-90 hover:border-white hover:text-white ${_className} ${className}`} {...props}>
            {children}
        </button>
    )
}