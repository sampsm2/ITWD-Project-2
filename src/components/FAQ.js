//Import
import Questions from "./faq/faqs.json";
import { useState } from "react";

//Functional Component
function FAQ() {
    //declare "state":"entered keywords"
    const [enteredKeywords, setEnteredKeywords] = useState('');

    let id = 0;
    //UI
    return(
        <>
            <div style={{minHeight: "10vh"}}>
                <h1>Frequently Asked Questions</h1>
            </div>
            {/*Add a search box on top*/}
            <div className="row">
                <input className="col-11 m-3" type="text" name="search" onChange={(e) => {setEnteredKeywords(e.target.value)}} />
            </div>
            {/*Loop through all questions, extract "question" and "answer", and display them*/}
            <div>
                {Questions.filter(question => question.question.toLowerCase().includes(enteredKeywords.toLowerCase()) || question.answer.toLowerCase().includes(enteredKeywords.toLowerCase())).map(question => {
                    return(
                        <div className="bg-warning p-3 m-2" key={id++}>
                            <h4>{question.question}</h4>
                            <p>{question.answer}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

//export
export default FAQ;