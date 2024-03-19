export default function Proprietaire({ estimation, rent, marketRent, form }) {
    return (
        <div>
            <h1>Estimation</h1>
            <p>estimation airdna : {estimation}</p>
            <p>proposition sous loc : {rent}</p>
            <p>marché : {marketRent}</p>
        </div>
    )
}

Proprietaire.getLayout = function getLayout(page) {
    return page;
};