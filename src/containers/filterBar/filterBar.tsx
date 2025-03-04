import ComboBox from "../../components/commonComponents/ComboBox";
import "./filterBar.css"

export default function FilterBar(){
    const options1=[{label:"Option 1",value:"1"},{label:"Option 2",value:2}]
    const options2=[{label:"Option 3",value:"3"},{label:"Option 4",value:4}]
    return (
        <div id="content-filter-bar" className="flex-row">
            <ComboBox clear={true} onChange={()=>{}} options={options1} value={undefined} label="Filter 1" type="text" placeholder="Filter 1"/>
            <ComboBox onChange={()=>{}} options={options2} value={undefined} label="Filter 2" type="text" placeholder="Filter 2"/>
        </div>
    )
}