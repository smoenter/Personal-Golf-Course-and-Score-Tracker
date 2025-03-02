import React, { useEffect } from 'react';

function ScoreCard(){
    const [score, setScore] = React.useState(() => {
        // Load scores from local storage or initialize with empty array
        const savedScores = localStorage.getItem('golfScores');
        return savedScores ? JSON.parse(savedScores) : Array(18).fill('');
    });

    // Handles form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(score);
    }

    // Handles score change
    const handleScoreChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newScore = [...score];
        newScore[index] = e.target.value;
        setScore(newScore);
    };

    // Save scores to local storage whenever they change
    useEffect(() => {
        localStorage.setItem('golfScores', JSON.stringify(score));
    }, [score]);

    // Scorecard form
    return (
        <form onSubmit={handleSubmit}>
            <label>IMPORT USERNAME</label>
                <input
                    type='text'
                    placeholder='' 
                />
            <table>
                <thead>
                    <tr>
                        <th>Hole</th>
                        <th>Par</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {score.map((s: string | number, index:any) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>3</td>
                            <td>
                                <input
                                    type='number'
                                    min='1'
                                    max='10'
                                    value={s}
                                    onChange={(e) => handleScoreChange(e, index)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </form>
    );
}

export default ScoreCard;