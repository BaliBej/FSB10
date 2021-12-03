import React from "react";
import ReactDOM from "react-dom";

// const Search = () => {
//     return (
//         <div>
//             <input type="text" placeholder="Wyszukaj..."/>
//             <button>Szukaj</button>
//         </div>
//     )
// }

class Search extends React.Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="Wyszukaj..."/>
                <button>Szukaj</button>
            </div>
        )
    }
}

ReactDOM.render(
  <Search />,
  document.getElementById("app")
);
