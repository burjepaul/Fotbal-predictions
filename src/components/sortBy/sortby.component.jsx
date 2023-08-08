import { useState } from 'react';
import {ReactComponent as DropDownArrow} from '../../assets/dropdown-arrow.svg'

import './sortby.styles.scss'

const SortBy = ({matches, handleActiveDropDownItem}) => {
    const dropDownText = ["Playing hour", "Win Chance", "Odd", "Country"]

    const [dropDown, setDropDown] = useState(false)
    const [dropDownClass, setDropDownClass] = useState("drop-down-menu hide")
    const [activeDropDown, setActiveDropDown] = useState(dropDownText)
      
    const handleDropDown = () => {
        if (!dropDown){
          setDropDown(!dropDown)
          setDropDownClass("drop-down-menu visible")
        }else{
          setDropDown(!dropDown)
          setDropDownClass("drop-down-menu hide")
        }
      }
    
      const handleDropDownItem1 = () => {
        const temp = activeDropDown[0]
        activeDropDown[0] = activeDropDown[1]
        activeDropDown[1] = temp
        setActiveDropDown(activeDropDown)
        setDropDown(!dropDown)
        setDropDownClass("drop-down-menu hide")
        handleActiveDropDownItem(activeDropDown[0])
      }
      const handleDropDownItem2 = () => {
        const temp = activeDropDown[0]
        activeDropDown[0] = activeDropDown[2]
        activeDropDown[2] = temp
        setActiveDropDown(activeDropDown)
        setDropDown(!dropDown)
        setDropDownClass("drop-down-menu hide")
        handleActiveDropDownItem(activeDropDown[0])
      }
      const handleDropDownItem3 = () => {
        const temp = activeDropDown[0]
        activeDropDown[0] = activeDropDown[3]
        activeDropDown[3] = temp
        setActiveDropDown(activeDropDown)
        setDropDown(!dropDown)
        setDropDownClass("drop-down-menu hide")
        handleActiveDropDownItem(activeDropDown[0])
      }

    return (
    <div className='sort-component'>
        <h2>Sort by :&nbsp;&nbsp;</h2>
              <button onClick={handleDropDown}>
                <div className='dropdown-arrow'>
                  <DropDownArrow/>
                  <div className='button-text'>
                    &nbsp;&nbsp;{activeDropDown[0]}
                  </div>
                </div>
              </button>
          <div className={dropDownClass}>
              <div className='drop-down-item' onClick={handleDropDownItem1}>{activeDropDown[1]}</div>
              <div className='drop-down-item' onClick={handleDropDownItem2}>{activeDropDown[2]}</div>
              <div className='drop-down-item' onClick={handleDropDownItem3}>{activeDropDown[3]}</div>
          </div>
    </div>
    )
}

export default SortBy