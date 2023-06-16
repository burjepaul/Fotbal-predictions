import React, { useEffect, useState, useCallback } from 'react';
import Spinner from '../../../components/spinner/spinner';
import MatchesList from '../../../components/matchesList/matchesList.component';

import './todayMatches.styles.scss'

const TodayMatches = () => {
        const [toadyMatches, setTodayMatches] = useState([])
        const [isLoadingData, setIsLoadingData] = useState(false)
        const [error, setError] = useState(null)

        const fetchTodayMatchesHandler = useCallback(async () => {
            setIsLoadingData(true)
            setError(null)
            try{
                const response = await fetch('https://1d50-2a02-2f07-d910-f00-115a-abbb-d794-31a3.ngrok-free.app/todayMatches', {
                    method: "get",
                    headers: new Headers({
                      "ngrok-skip-browser-warning": "69420",
                    }),
                })
                if (!response.ok){
                throw new Error('Something went wrong!')
                }

                const data = await response.json();
                setTodayMatches((data))
            }
            catch(error) {
                setError(error.message)
            }
            setIsLoadingData(false)
        }, []
        )

        useEffect(() => {
            fetchTodayMatchesHandler()
        },[fetchTodayMatchesHandler])

        let content;

        if (!isLoadingData){
            content = <MatchesList matches={toadyMatches} />
        }

        if (!isLoadingData && error){
            content = <p>{error}</p>
        }

        if (isLoadingData){
            content = <Spinner/>
        }

        return (
            <>
                <div className='today-matches-title'>
                    <h1>
                        Today Matches
                    </h1>
                </div>
                {content}
            </>
    );
}


export default TodayMatches