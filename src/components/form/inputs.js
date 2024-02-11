export function Input({ label, value, onChange, icon, ...props}) {
    return (
            <div className="" {...props}>
                <icon />
                <input type="text" value={value} onChange={onChange} className="border border-gray-400 p-2 rounded-md" />
            </div>
    );
}