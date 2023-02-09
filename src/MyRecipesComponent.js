function MyRecipesComponent({label, calories, image, ingredient}) {
    return(
        <div>
            <h2>{label}</h2>
            <p>{calories.toFixed()} calories</p>
            <img src={image} alt='food' width='350px'/>
            <ul className="list">
                {ingredient.map((element, index) => (
                    <li key={index}>{element}</li>
                ))}
            </ul>
        </div>
    )
}

export default MyRecipesComponent;