import React from 'react';

{/* Komponentti hakuhistorian näyttämiseen */}
export const History = ({ history }) => {
    return (
        <div className="container py-4">
            <h2>Hakuhistoria</h2>
            <button className="btn btn-danger mt-2" onClick={() => window.location.reload()}>Tyhjennä historia</button>
            {history.length === 0 ? (
                <p>Ei vielä haettuja Pokémoneja.</p>
            ) : (
                <ul className="list-group mt-3">
                    {history.map((name, index) => (
                        <li key={index} className="list-group-item text-capitalize">
                            {name} 
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};