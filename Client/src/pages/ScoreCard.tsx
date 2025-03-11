import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ScoreCard.css';

// ScoreCard component
function ScoreCard() {
    const navigate = useNavigate();

    const [score, setScore] = useState(() => {
        const savedScores = localStorage.getItem('currentGolfScores');
        return savedScores ? JSON.parse(savedScores) : Array(18).fill('');
    });

    const [par, setPar] = useState(() => {
        const savedPars = localStorage.getItem('currentGolfPars');
        return savedPars ? JSON.parse(savedPars) : Array(18).fill(3);
    });

    const [course, setCourse] = useState('');
    const [comments, setComments] = useState('');

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

    const handleScoreChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newScore = [...score];
        newScore[index] = e.target.value;
        setScore(newScore);
    };

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
            <h1 id='SC'>Scorecard</h1>
            <form className='form' onSubmit={handleSubmit}>
                <label>Course Name</label>
                <input
                    type='text'
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    placeholder='Enter course name'
                />
                <div className='scoreBody'>
                    <div className='holeRow'>
                        {score.slice(0, 9).map((s: any, index: number) => (
                            <div className='hole' key={index}>
                                <div>Hole {index + 1}</div>
                                <label>Par</label>
                                <select value={par[index]} onChange={(e) => handleParChange(e, index)}>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                </select>
                                <label>Score</label>
                                <input
                                    type='number'
                                    min='1'
                                    max='10'
                                    value={s}
                                    onChange={(e) => handleScoreChange(e, index)}
                                />
                            </div>
                        ))}
                    </div>
                    <div className='holeRow'>
                        {score.slice(9, 18).map((s: any, index: number) => (
                            <div className='hole' key={index + 9}>
                                <div>Hole {index + 10}</div>
                                <label>Par</label>
                                <select value={par[index + 9]} onChange={(e) => handleParChange(e, index + 9)}>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                </select>
                                <label>Score</label>
                                <input
                                    type='number'
                                    min='1'
                                    max='10'
                                    value={s}
                                    onChange={(e) => handleScoreChange(e, index + 9)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <label></label>
                <textarea
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    placeholder="How'd you play?"
                />
                <br />
                <button id='scButton' type='submit'>Submit Round</button>
            </form>
            <button style={{marginLeft:'20px'}} id='backButton' onClick={() => navigate('/')}>Back to Home</button>
        </div>
    );
}

export default ScoreCard;