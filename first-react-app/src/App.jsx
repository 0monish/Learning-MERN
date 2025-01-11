import React, { useState } from "react"
import axios from 'axios'
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Parent from "./components/Parent"

const App = () => {

    //return "hello"

    // CREATING A VARIABLE 
    // let message = "THIS IS REACT"
    // return (    
    //     <div>
    //         {/* ACCESSING THE VARIABLE */}
    //         <h1>{message}</h1>
    //     </div>
    // )



    // TRYING TO CHANGE THE NAME ON BUTTON CLICK

    // let username = "Monish"

    // const changeName = () => { // CREATING A FUNCTION TO CHANGE THE NAME
    //     console.log(username)
    //     username = "Monish Khandelwal"
    //     console.log(username)
    // }

    // return (
    // FISRT IMPORTANT THING TO NOTE THAT REACT RETURNS ONLY ONE ELEMENT
    // I.E. SUPPOSE USE TRY TO RETURN H1 AND H2 THEN IT WILL GIVE ERROR SO TO HANDLE THIS 
    // YOU NEED ENCLOSE OTHER ELEMETS INTO ONE ELEMENT FOR THIS WE CAN PREFER TO USE DIV ELEMENT 
    // <div>
    //     <h1>{username}</h1>
    {/* IF YOU TRY TO DO THIS WAY THEN FUNCTION WILL BE EXECUTED WITH OUT WAITING FOR THE BUTTON BE CLICKED */ }
    {/* <button onClick={changeName()}></button> */ }

    {/* INSTEAD LIKE THIS */ }
    {/* <button onClick={changeName}>CHANGE</button>
        </div> */}

    // YOU WILL BE ABLE TO SEE THAT USERNAME DOESN'T GOT CHANGED IN DOM  
    // BECAUSE WE ARE TRYING TO MANIULATE THE DOM DIRECTLY WHICH SHOULDN'T BE THE CASE
    // WE NEED TO MANIPULATE THE DOM WITH HELP OF REACT

    // )



    // SO RESOLVE THE ABOVE ISSUE THE IS A CONCEPT useState HOOK

    // const [no, setNo] = useState(10)
    // no IS A READABLE ABLE ELLEMENT
    // setNO IS A WRITEABLE FUNCTION WHICH IS USED TO SET THE VALUE OF no 
    // AND IN useState() FUNCTION WE CAN ASSIGN THE VALUE FOR no IT'S MORE LIKE INITIALIZATION

    // return (
    //     // HERE EMPTY TAGS ARE CALLED FRAGMENTS AS WE RETURN ONLY ONE ELEMENT 
    //     // SO INSTEAD OF RETURNING THE DIV ELEMENT AS WRAPER LIKE WE DID EARLIER
    //     // WE CAN USE THIS FRAGMENTS AS A WRAPER BY NOT CREATING UNNESSARILY EXTRA ELEMENT(DIV)
    //     <>
    //         <h1>THE NUMBER IS {no}</h1>
    //         <button onClick={() => setNo(no + 10)}>INCREMENT</button>
    //         &emsp;<button onClick={() => setNo(no - 10)}>DECREMENT</button>
    //     </>
    // )



    // NOW WE ARE PROCEEDING WITH THE FORM HANDLING WITH TWO WAY BINDING

    // const [movieName, setmovieName] = useState("")
    // const [movName, setmovName] = useState("") // EXTRA VARIABLE TO HANDLE THE VALUE OF THE ABOVE VARIABLE 
    // const formSubmit = (e) => {
    //     e.preventDefault();
    //     setmovName(movieName)
    //     setmovieName("")
    // }

    // return (
    //     <>
    //         <div className="m-10">
    //             <h1 className="text-2xl mb-5">Setting movie name through Form Submission </h1>

    //             <form onSubmit={(e) => { formSubmit(e) }}>
    //                 <input
    //                     className="px-4 py-3 rounded text-black"
    //                     value={movieName} // THIS BECAUSE THERE IS NEED TO SET THE VALUE TO THE INPUT FIELD BY THE HELP OF REACT AS WE DON'T HAVE TO INTERACT WITH THE DOM DIRECTLY
    //                     onChange={(e) => { setmovieName(e.target.value) }}
    //                     type="text" />
    //                 <br />
    //                 <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 mt-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
    //                     Button
    //                 </button>         </form>

    //             <h1 className="text-2xl">My favourite movie is {movName} </h1>
    //         </div>
    //     </>
    // )



    // NOW PROCEEDING WITH THE COMPONENTS 
    // COMPONENTS ARE REUSEABLE PART OF CODE FOR EXAMPLE THE HEADER, FOOTER SECTION ETC. ARE USED MULTIPLE TIMES IN A WEBSITE 
    // SO WRITING THE CODE ONCE AND USING AS MANY TIME AS WE WANT
    // SO FOR THIS WE START WITH CREATING A FOLDER NAME components UNDER src FOLDER FOR THE SAKE OF STANDARDIZATION 
    // ALSO REMEMBER THAT FILE NAME OF THE COMPONENTS SHOULD STARTS WITH CAPITAL LETTER AS BETTER CODING PRACTICE

    // return (
    //     <>
    //         <Navbar />
    //     </>
    // )



    // NOW PROCEEDING WITH DATA PASSING IN THE COMPONENTS
    // CREATING CARD COMPONENT FOR THIS EXAMPLE 

    // const movies = [
    //     {
    //         "movieName": "Tu Jhoothi Main Makkar",
    //         "directorName": "Luv Ranjan",
    //         "releaseDate": "Mar 8 2023"
    //     },
    //     {
    //         "movieName": "Satyaprem Ki Katha",
    //         "directorName": "Sameer Vidwans",
    //         "releaseDate": "Jun 29 2023"
    //     },
    //     {
    //         "movieName": "Farhana",
    //         "directorName": "Nelson Venkatesan",
    //         "releaseDate": "Apr 21 2023"
    //     },
    //     {
    //         "movieName": "The Kerala Story",
    //         "directorName": "Sudeep Tiwari",
    //         "releaseDate": "May 5 2023"
    //     },
    //     {
    //         "movieName": "Gadar 2",
    //         "directorName": "Anil Sharma",
    //         "releaseDate": "Aug 11 2023"
    //     },
    //     {
    //         "movieName": "Bawaal",
    //         "directorName": "Nishikant Kamat",
    //         "releaseDate": "Jul 21 2023"
    //     }
    // ]

    // return (
    //     <>
    //         <Card movieName="Jawan" directorName="Atlee" releaseDate="Sep 7 2023" />
    //         <Card movieName="Animal" directorName="Sandeep Reddy Vanga" releaseDate="Dec 1 2023" />
    //         <Card movieName="Salaar: Part 1 - Ceasefire" directorName="Prashanth Neel" releaseDate="Dec 22 2023" />
    //         <Card movieName="Dunki" directorName="Rajkumar Hirani" releaseDate="Dec 21 2023" />

    //         {/* GETTING DATA FROM THE ARRAY OF OBJECTS */}
    //         {movies.map((movDetails) => {
    //             return <Card movieName={movDetails.movieName} directorName={movDetails.directorName} releaseDate={movDetails.releaseDate} />
    //         })}
    //     </>
    // )



    // PROCEEDING FURTHER WITH PROPERTY DRILLING (PROP DRILLING)
    // MEANS PASSING DATA FROM PARENT COMPONENT TO CHILD AND FURTHER TO ANOTHER CHILD LIKE THAT
    // CREATING TWO COMPONENTS PARENT AND CHILD

    // return <Parent parentName="Ravi" childName="Kishan" />


    // WORING WITH API, WE WILL BE USING A TOOL NAMED AXIOS YOU ARE REQUIRED TO INSTALL WITH THIS COMMAND "npm i axios"

    // GETTING API DATA FROM SAMPLE WEBSITE https://picsum.photos/ THERE ARE MULTIPLE APIs PRESENT THERE

    const [data, setData] = useState([]) // DATA RECEIVED FROM API IS IN ARRAY FORM

    const getData = async () => {
        // THE DATA WHICH IS BEING RECEIVED BY axios.get IS IN ASYNCHRONOUS DATA AND IT COMES IN THE FORM OF PROMISES
        const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=10")
        // console.log(response) // BY THIS YOU CAN SEE THAT DATA IS RECIVED IN FORM OF PROMISE

        setData(response.data)
        // console.log(data) // TO WHICHEVER PROPERTIES OF data OBJECT YOU WILL LIKE TO WORK
    }


    return (
        <>
            <h1 className="text-3xl m-5 text-center">Getting API DATA</h1>
            <button onClick={getData} className="bg-white flex active:scale-90 m-10 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                GET DATA
            </button>

            {/* GETTING THE DATA AND PRINTING THE DATA USING MAP FUNCTION ON BUTTON CLICK */}
            {data.map(imgUrl => {
                return <div className="p-5 m-6 bg-lime-200 inline-block">
                    <img src={imgUrl.download_url} alt="some image" className="h-52" />
                </div>

            })}

        </>
    )
}


export default App