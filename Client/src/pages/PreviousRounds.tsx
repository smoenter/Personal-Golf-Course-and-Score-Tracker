import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/PreviousRounds.css';

interface Score {
    course: string;
    score: number;
    comments: string;
    gir?: boolean[]; // Optional to handle older saved data
    fir?: boolean[]; // Optional to handle older saved data
}

const PreviousRounds: React.FC = () => {
    const navigate = useNavigate();
    const [scores, setScores] = useState<Score[]>([]);

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
        const updatedScores = scores.map((score, i) =>
            i === index ? { ...score, comments } : score
        );
        setScores(updatedScores);
        localStorage.setItem('golfScores', JSON.stringify(updatedScores));
    };

    // Calculate percentage
    const calculatePercentage = (array?: boolean[]) => {
        if (!array || array.length === 0) return '0.00'; // Handle missing or empty data
        const trueCount = array.filter((value) => value).length;
        return ((trueCount / array.length) * 100).toFixed(2); // Return percentage with 2 decimal places
    };

    // Calculate average total score
    const calculateAverageScore = () => {
        if (scores.length === 0) return '0.00';
        const totalScore = scores.reduce((acc, score) => acc + score.score, 0);
        return (totalScore / scores.length).toFixed(2);
    };

    // Calculate total FIR and GIR percentages
    const calculateTotalPercentage = (key: 'fir' | 'gir') => {
        const allValues = scores.flatMap((score) => score[key] || []);
        return calculatePercentage(allValues);
    };

    return (
        <div className='container'>
            <h1 id='PR'>Previous Rounds</h1>
            <table>
                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Total Score</th>
                        <th>FIR (%)</th>
                        <th>GIR (%)</th>
                        <th className='comments'>Comments</th>
                        <th className='actions'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {scores.map((score, index) => (
                        <tr key={index}>
                            <td>{score.course}</td>
                            <td>{score.score}</td>
                            <td>{calculatePercentage(score.fir)}%</td>
                            <td>{calculatePercentage(score.gir)}%</td>
                            <td>
                                <textarea
                                    value={score.comments}
                                    onChange={(e) => updateComments(index, e.target.value)}
                                />
                            </td>
                            <td>
                                <button id="deleteButton" onClick={() => deleteScore(index)}>
                                    Delete Score
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="summary">
                <h2>Summary</h2>
                <p>Average Total Score: {calculateAverageScore()}</p>
                <p>Total FIR Percentage: {calculateTotalPercentage('fir')}%</p>
                <p>Total GIR Percentage: {calculateTotalPercentage('gir')}%</p>
            </div>
            <button
                id='backButton'
                style={{ marginLeft: '20px' }}
                onClick={() => navigate('/')}
            >
                Back to Home
            </button>
        </div>
    );
};

export default PreviousRounds;