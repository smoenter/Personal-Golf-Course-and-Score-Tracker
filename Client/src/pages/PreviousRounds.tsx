import React, { useState, useEffect } from 'react';

const PreviousRounds: React.FC = () => {
    const [scores, setScores] = useState<{ course: string, score: number, comments: string }[]>([]);

    useEffect(() => {
        const savedScores = localStorage.getItem('golfScores');
        if (savedScores) {
            setScores(JSON.parse(savedScores));
        }
    }, []);

    const deleteScore = (index: number) => {
        const updatedScores = scores.filter((_, i) => i !== index);
        setScores(updatedScores);
        localStorage.setItem('golfScores', JSON.stringify(updatedScores));
    };

    const updateComments = (index: number, comments: string) => {
        const updatedScores = scores.map((score, i) => i === index ? { ...score, comments } : score);
        setScores(updatedScores);
        localStorage.setItem('golfScores', JSON.stringify(updatedScores));
    };

    return (
        <div>
            <h1>Previous Rounds</h1>
            <table>
                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Total Score</th>
                        <th>Comments</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {scores.map((score, index) => (
                        <tr key={index}>
                            <td>{score.course}</td>
                            <td>{score.score}</td>
                            <td>
                                <textarea 
                                    value={score.comments} 
                                    onChange={(e) => updateComments(index, e.target.value)} 
                                />
                            </td>
                            <td>
                                <button onClick={() => deleteScore(index)}>Delete Score</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PreviousRounds;