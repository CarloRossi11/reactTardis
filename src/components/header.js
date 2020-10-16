import React from "react"

const Header = (props) =>{

    const [state, setTardis] = React.useState({
        tardis:{  
           name: "Time and Relative Dimension in Space",
           caps: false
      } })

    const changeIt = (text) => {
        if (state.tardis.caps) {
          setTardis({
            tardis: {
              name: text.toLowerCase(),
              caps: false
            }
          })
        } else {
          setTardis({
            tardis: {
              name: text.toUpperCase(),
              caps: true
            }
          })
        }
      }


    return(
        <div>
            <h3 onClick={() => {
                changeIt(state.tardis.name)
            }}>{state.tardis.name}</h3>
        </div>
    )
}

export default Header