import React, { useState, useEffect } from 'react';

// Styling
import '../styles/PreviousRounds.css';

// PreviousRounds component
const PreviousRounds: React.FC = () => {
    const [scores, setScores] = useState<{ course: string, score: number, comments: string }[]>([]);
    // Load saved scores from local storage
    useEffect(() => {
        const savedScores = localStorage.getItem('golfScores');
        if (savedScores) {
            setScores(JSON.parse(savedScores));
        }
    }, []);
    // Delete a score
    const deleteScore = (index: number) => {
        const updatedScores = scores.filter((_, i) => i !== index);
        setScores(updatedScores);
        localStorage.setItem('golfScores', JSON.stringify(updatedScores));
    };
    // Update comments
    const updateComments = (index: number, comments: string) => {
        const updatedScores = scores.map((score, i) => i === index ? { ...score, comments } : score);
        setScores(updatedScores);
        localStorage.setItem('golfScores', JSON.stringify(updatedScores));
    };

    return (
        <div className='container'>
            <h1 id='PR'>Previous Rounds</h1>
            <table>
                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Total Score</th>
                        <th>Comments</th>
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
                            <br />
                            <td>
                                <button id="deleteButton" onClick={() => deleteScore(index)}>Delete Score</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PreviousRounds;