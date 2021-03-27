const SneakersIndex = () => {
    const sneakers = [
        {
            brand: "Nike",
            name: "Air Max 90",
            colorway: "Volt",
            photo: "https://stockx-360.imgix.net/Nike-Air-Max-90-OG-White-Particle-Grey-Volt/Images/Nike-Air-Max-90-OG-White-Particle-Grey-Volt/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1606323250&fit=clip&fm=webp&ixlib=react-9.0.3&w=2258",
            id: 1
        },
        {
            brand: "New Balance",
            name: "990V5",
            colorway: "Grey / Castlerock",
            photo: "https://stockx-360.imgix.net/New-Balance-990v5-Grey/Images/New-Balance-990v5-Grey/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1607650731&fit=clip&fm=webp&ixlib=react-9.0.3&w=2258",
            id: 2
        }
    ];

    return (
        <div className="SneakersIndex">
            <p>This is the SneakersIndex component...</p>
            {sneakers.map(sneaker => (
                <div className="SneakersIndexCard" key={sneaker.id}>
                    <h2>{sneaker.brand} {sneaker.name}</h2>
                </div>
            ))}

        </div>
    );
}

export default SneakersIndex;