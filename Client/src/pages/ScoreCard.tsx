import React, { useEffect, useState } from 'react';

// ScoreCard component
function ScoreCard() {
    const [score, setScore] = useState(() => {
        const savedScores = localStorage.getItem('currentGolfScores');
        return savedScores ? JSON.parse(savedScores) : Array(18).fill('');
    });

    // Par for each hole
    const [par, setPar] = useState(() => {
        const savedPars = localStorage.getItem('currentGolfPars');
        return savedPars ? JSON.parse(savedPars) : Array(18).fill(3);
    });

    const [course, setCourse] = useState('');
    const [comments, setComments] = useState('');

    // Event handler for form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const totalScore = score.reduce((acc: any, curr: any) => acc + Number(curr), 0);
        const newRound = { course, score: totalScore, comments };
        const savedRounds = JSON.parse(localStorage.getItem('golfScores') || '[]');
        savedRounds.push(newRound);
        localStorage.setItem('golfScores', JSON.stringify(savedRounds));
        console.log(newRound);

        // Reset the form
        setScore(Array(18).fill(''));
        setPar(Array(18).fill(3));
        setCourse('');
        setComments('');
    };

    // Score Change handler
    const handleScoreChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newScore = [...score];
        newScore[index] = e.target.value;
        setScore(newScore);
    };

    // Par Change handler
    const handleParChange = (e: React.ChangeEvent<HTMLSelectElement>, index: number) => {
        const newPar = [...par];
        newPar[index] = e.target.value;
        setPar(newPar);
    };

    useEffect(() => {
        localStorage.setItem('currentGolfScores', JSON.stringify(score));
    }, [score]);

    useEffect(() => {
        localStorage.setItem('currentGolfPars', JSON.stringify(par));
    }, [par]);

    return (
        <div>
            <h1>Scorecard</h1>
            <form onSubmit={handleSubmit}>
                <label>Course Name</label>
                <input
                    type='text'
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    placeholder='Enter course name'
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
                        {score.map((s: string | number, index: any) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                    <select value={par[index]} onChange={(e) => handleParChange(e, index)}>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </td>
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
                <label>Comments</label>
                <textarea
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    placeholder='Enter comments'
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default ScoreCard;