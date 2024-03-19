export default function NotAccepted({ rent, estimation, form }) {
    return (
        <div>
            <h1>Nous ne sommes pas encore présent dans la ville de {form.city}</h1>
        </div>
    )
}

NotAccepted.getLayout = function getLayout(page) {
    return page;
};