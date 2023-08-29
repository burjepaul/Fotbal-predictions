import React from "react";
import './faq.styles.scss'
import FAQCard from "../../../components/FAQcard/FAQCard";

const FAQ = () => {
    const questions = [
        'DO YOU USE MATHEMATICAL ALGORITHMS FOR YOUR BETTING TIPS?',
        'ARE THE PREDICTIONS FILTERED BY CONSIDERING NON-STATISTICAL ELEMENTS?',
        'IN WHICH PART OF THE DAY ARE THE PREDICTIONS PUBLISHED?',
        'WHAT TYPE OF PREDICTIONS DO YOU PROVIDE?',
        'WHY THERE ARE NO UEFA CHAMPIONS LAEGUE/UEFA EUROPA LEAGUE/UEFA EUROPA CONFERENCE LEAGUE PREDICTIONS?'
    ]
    const answers = [
        'Yes, for every standings, mathematical calculations are being done based on temas form on away or home field, on average goals scored. For more details see About Us section Way of calculating.',
        'The predictions are 100% generated. Non-statistical elements, like lack of confidence or playng with the 2nd team, are not taken into account.',
        'Usually, we are trying to run our software at 00:00 AM UTC+00, but we may encounter encounter difficultys and it can be delayed until 08:00 AM. Here comes into play the porpouse of "Tommorw Predictions" in case you are in a hurry and the "Today Matches" has not been updated yet.',
        'For now, there are only 2 types of predictions, the winning team (can be draw) and the expected goals to be scored.',
        'For now, the software is programmed to do analyses only over mathces that are part of a standing. Matches from elimination competitions, matches of nationa teams, frendly games are being ignored.'
    ]

    return(
        <>
            <h1 className="faq-title">TheOracle FAQ'S</h1>
            {questions.map((entry, index) => {
                return(
                    <FAQCard question={questions[index]} answer={answers[index]}/>
                )
            })}
        </>
    )
}

export default FAQ